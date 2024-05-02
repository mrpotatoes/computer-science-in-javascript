# Design a social media feed

- [Design a social media feed](#design-a-social-media-feed)
  - [Step 1: Determine Use Cases \& Constraints](#step-1-determine-use-cases--constraints)
    - [Use cases](#use-cases)
      - [In Scope](#in-scope)
      - [Out of scope](#out-of-scope)
    - [Constraints](#constraints)
      - [Usage \& Space \[^conversion-guide\]](#usage--space-conversion-guide)
  - [Step 2: Create a high level design](#step-2-create-a-high-level-design)
  - [Step 3: Design core components](#step-3-design-core-components)
    - [Use case: Create post](#use-case-create-post)
    - [Use case: User views the home timeline](#use-case-user-views-the-home-timeline)
    - [Use case: User views the user timeline](#use-case-user-views-the-user-timeline)
    - [Use case: User searches keywords](#use-case-user-searches-keywords)
  - [Step 4: Scale the design](#step-4-scale-the-design)
    - [Other items to consider using](#other-items-to-consider-using)
    - [Additional optimizations](#additional-optimizations)
    - [`SQL Database` bottlenecks](#sql-database-bottlenecks)
  - [Additional talking points](#additional-talking-points)
    - [NoSQL](#nosql)
    - [Caching](#caching)
    - [Asynchronism and microservices](#asynchronism-and-microservices)
    - [Communications](#communications)
    - [Security](#security)
    - [Latency numbers](#latency-numbers)
  - [Footnotes](#footnotes)

## Step 1: Determine Use Cases & Constraints
> Gather requirements and scope the problem.
> Ask questions to clarify use cases and constraints.
> Discuss assumptions.

### Use cases
#### In Scope
<table>
  <thead>
    <tr>
      <th width="500px">Actor</th>
      <th width="500px">Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr width="600px">
      <td>User</td>
      <td>Shares new content</td>
    </tr>
    <tr width="600px">
      <td>User</td>
      <td>Views home timeline</td>
    </tr>
    <tr width="600px">
      <td>User</td>
      <td>Views another user's timeline</td>
    </tr>
    <tr width="600px">
      <td>User</td>
      <td>Runs a search</td>
    </tr>
    <tr width="600px">
      <td>Service</td>
      <td>Push content to followers</td>
    </tr>
    <tr width="600px">
      <td>Service</td>
      <td>Push notification(s)</td>
    </tr>
    <tr width="600px">
      <td>Service</td>
      <td>Sends emails</td>
    </tr>
    <tr width="600px">
      <td>Service</td>
      <td>High availability</td>
    </tr>
  </tbody>
</table>

#### Out of scope
<table>
  <thead>
    <tr>
      <th width="500px">Actor</th>
      <th width="500px">Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr width="600px">
      <td>Service</td>
      <td>Content parsing</td>
    </tr>
    <tr width="600px">
      <td>Service</td>
      <td>Service integrations</td>
    </tr>
    <tr width="600px">
      <td>General</td>
      <td>Analytics</td>
    </tr>
  </tbody>
</table>

### Constraints
<table>
  <thead>
    <tr>
      <th width="500px">Aspect</th>
      <th width="500px">Assumption</th>
    </tr>
  </thead>
  <tbody>
    <tr width="600px">
      <td>Traffic</td>
      <td>Traffic is not evenly distributed. Posting a tweet should be fast. Fanning out a tweet to all of your followers should be fast, unless you have millions of followers</td>
    </tr>
    <tr width="600px">
      <td>Searching</td>
      <td>Needs is read-heavy but should still be fast</td>
    </tr>
    <tr width="600px">
      <td>Timeline</td>
      <td>Viewing the timeline should be fast. Social feeds are more read heavy than write heavy therefore you must optimize for fast reads of posts. Ingesting posts is write</td>
    </tr>
  </tbody>
</table>

#### Usage & Space [^conversion-guide]
> [`NOTE`]: Ask if back-of-the-envelope usage calculations are required

* $100M$ `MAU`
* $500M\ posts/day$ ($15B\ posts/mo$)
  * Each tweet averages a fanout[^fanout] of $10$ deliveries
  * $5B$ posts delivered on fanout $/$ day
  * $150B$ posts delivered on fanout $/$ month
* $250B$ reads $/$ month
* $10B$ searches $/$ month
* Size $/$ post
  * `post_id` - $8b$
  * `uid` - $32b$
  * `text` - $140b$
  * `media` - $10kb$
  * Total: $~10kb$
* $150TB$ posts $/$ month
  * $10KB\ /\ post\ \times\ 500M\ posts/day\ \times 30\ days/month$
  * $5.4PB$ of new content every 3 years
* $100K\ reads / second$
  * $250B\ reads / month\ \times (400 reqs/sec\ \div\ 1B\ reqs / mo)$
* $6K\ posts/s$
  * $15B\ postt / month\ \times (400 reqs/sec\ \div\ 1B\ reqs / mo)$
* $60K$ posts delivered on fanout $/$ second
  * $150B$ posts delivered on fanout $/$ month $\times (400 reqs/sec\ \div\ 1B\ reqs / mo)$
* 4K search requests $/$ second
  * $10B\ searches/month \times (400 reqs/sec\ \div\ 1B\ reqs / mo)$

## Step 2: Create a high level design
![Initial Design](../_assets/social-feed-initial.png)

## Step 3: Design core components
### Use case: Create post
Delivering posts and building the user's timeline is nuanced. Fanning out posts to all followers (60 thousand posts delivered on fanout per second) will overload a traditional [relational database](../topics/database.md#relational-database-management-system-rdbms). We'll probably want to choose a data store with fast writes such as a `NoSQL database` or `Memory Cache`. Reading `1MB` sequentially from memory takes about 250 microseconds, while reading from `SSD` takes $4x$ and from disk takes $80x$ longer[^latency]. Lastly mediacan be stored in an [`Object Store`](../topics/database.md#document-store).

* `Client` submits a post to the `Web Server` (`[reverse proxy](../topics/reverse-proxy-web-server.md)` in this case)
  * `Web Server` forwards  request to the `Write Service`
    * `Write Service` stores the post in user's timeline in a ``SQL database``
    * `Write Service` submits (or `POST`s) to the `[Fanout Service](../topics/fanout-service.md)`
      * Query `User Graph Service` to find `Client`s followers in `[Memory Cache](../topics/cache.md#application-caching)`
      * Save post in ***home timeline of user's followers*** in `Memory Cache`
        * $O(n)$: $1K$ followers $=$ $1K$ lookups & inserts
      * Store media in the [Object Store](../topics/database.md#document-store)
      * Uses the `Notification Service`

A public [`REST API`](../topics/communication.md#representational-state-transfer-rest) would be used to submit a new post all user timelines in the user's relationship graph.

Submitting
```js
api.post('https://example.com/api/v1/post', {
  'uid': '123',
  'auth_token': 'ABC123',
  'content': 'hello world!',
  'media_id': 'ABC987'
})
```

Response
```json
{
  "created_at": "Wed Sep 05 00:37:15 +0000 2012",
  "status": "hello world!",
  "pid": "987",
  "uid": "123",
}
```

Internal `API` calls may use either a [`Remote Procedure Call`](../topics/communication.md#remote-procedure-call-rpc) or simply a service request to an `API Gateway` to route to the.

### Use case: User views the home timeline
* `Client` requests a home timeline from `Web Server`
  * `Web Server` forwards request to `Read API` server
    * `Read API` server contacts `Timeline Service`
      * `Get`s timeline data in `Memory Cache` (containing `pid`s and `uid`s - $O(1)$ )
      * Query `Post Info Service` → metadata about `pid`s - $O(n)$
      * Query `User Info Service` → metadata about `uid`s - $O(n)$

REST API
```js
api.get('https://example.com/api/v1/home-timeline', {
  'uid': '123'
})
```

Response
```json
{
    "uid": "456",
    "post": "123",
    "status": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum lacinia egestas."
},
{
    "uid": "789",
    "post": "456",
    "status": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum lacinia egestas."
},
{
    "uid": "789",
    "post": "579",
    "status": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum lacinia egestas."
},
```

### Use case: User views the user timeline
> This Use Case is similar to the home timeline except all posts would be from the user and not the users the user is following.

* `Client` requests (`GET`) another user's timeline to `Web Server`
  * `Web Server` forwards request to `Read API`
    * `Read API` retrieves user timeline from `SQL Database`

### Use case: User searches keywords
* `Client` requests a search to `Web Server`
  * `Web Server` forwards request to `Search API`
    * `Search API` contacts `Search Service`
      * Parses/tokenizes input query and determines what needs to be searched
        * Merges, ranks, sorts and returns results

REST API
```js
api.get('https://example.com/api/v1/search?query=hello+world', {
  'uid': '123'
})
```

## Step 4: Scale the design
> > It's important to discuss what bottlenecks you might encounter with the initial design and how you might address each of them. For example, what issues are addressed by adding a `Load Balancer` with multiple Web Servers? `CDN`? `Master-Slave Replicas`? What are the alternatives and `Trade-Offs` for each?

![Scaled Design](../_assets/social-feed-scaled.png)

First steps could be
1. Benchmark/Load Test
1. Profile for bottlenecks 
2. Address bottlenecks while evaluating alternatives and trade-offs 
3. Repeat. See [Design a system that scales to millions of users on AWS](../scaling_aws/) as a sample on how to iteratively scale the initial design.

### Other items to consider using
* [DNS](../topics/domain-name-system.md)
* [CDN](../topics/content-delivery-network.md)
* [Load balancer](../topics/load-balancer.md)
* [Horizontal scaling](../topics/load-balancer.md#horizontal-scaling)
* [Web server (reverse proxy)](../topics/reverse-proxy-web-server.md)
* [API server (application layer)](../topics/application-layer.md)
* [Cache](../topics/cache.md)
* [Relational database management system (RDBMS)](../topics/database.md)
* [SQL write master-slave failover](../topics/availability-patterns.md#fail-over)
* [Master-slave replication](../topics/database.md#master-master-replication)
* [Consistency patterns](../topics/consistency-patterns.md)
* [Availability patterns](../topics/availability-patterns.md)

The `Fanout Service` is a potential bottleneck. Users with millions of followers could take several minutes to have their posts go through the fanout process. This could lead to race conditions with `@replies` to the post, which we could mitigate by re-ordering the posts at serve time. We could also avoid fanning out posts from highly-followed users. Instead, we could search to find posts for highly-followed users, merge the search results with the user's home timeline results, then re-order the posts at serve time.

### Additional optimizations
* Keep only several hundred posts for each timeline in `Memory Cache`
* Keep only active users' home timeline info in the `Memory Cache`
  * If a user was not previously active in the past 30 days, we could rebuild the timeline from the `SQL Database`
    * Query the `User Graph` service to determine who the user is following
    * Get the posts from the `SQL Database` and add them to the `Memory Cache`
* Store only a month/week of posts in the `Post Info` service
* Store only active users in the `User Info` service
* The `Search Cluster` would likely need to keep the posts in memory to keep latency low

### `SQL Database` bottlenecks
Although the `Memory Cache` should reduce the load on the database, it is unlikely the `SQL Read Replicas` alone would be enough to handle the cache misses. We'll probably need to employ additional SQL scaling patterns. The high volume of writes would overwhelm a single `SQL Write Master-Slave`, also pointing to a need for additional scaling techniques.

* [Federation](../topics/database.md#federation)
* [Sharding](../topics/database.md#sharding)
* [Denormalization](../topics/database.md#denormalization)
* [SQL Tuning](../topics/database.md#sql-tuning)

We should also consider moving some data to a `NoSQL Database`.

## Additional talking points
### NoSQL
* [Key-value store](../topics/database.md#key-value-store)
* [Document store](../topics/database.md#document-store)
* [Wide column store](../topics/database.md#wide-column-store)
* [Graph database](../topics/database.md#graph-database)
* [SQL vs NoSQL](../topics/database.md#sql-or-nosql)

### Caching
* Where to cache
  * [Client caching](../topics/cache.md#client-caching)
  * [CDN caching](../topics/cache.md#cdn-caching)
  * [Web server caching](../topics/cache.md#web-server-caching)
  * [Database caching](../topics/cache.md#database-caching)
  * [Application caching](../topics/cache.md#application-caching)
* What to cache
  * [Caching at the database query level](../topics/cache.md#caching-at-the-database-query-level)
  * [Caching at the object level](../topics/cache.md#caching-at-the-object-level)
* When to update the cache
  * [Cache-aside](../topics/cache.md#cache-aside)
  * [Write-through](../topics/cache.md#write-through)
  * [Write-behind (write-back)](../topics/cache.md#write-behind-write-back)
  * [Refresh ahead](../topics/cache.md#refresh-ahead)

### Asynchronism and microservices
* [Message queues](../topics/asynchronism.md#message-queues)
* [Task queues](../topics/asynchronism.md#task-queues)
* [Back pressure](../topics/asynchronism.md#back-pressure)
* [Microservices](../topics/asynchronism.md#microservices)

### Communications
* Tradeoffs
  * External communication with clients - [HTTP APIs following REST](../topics/communication.md#representational-state-transfer-rest)
  * Internal communications - [RPC](../topics/communication.md#remote-procedure-call-rpc)
* [Service discovery](../topics/application-layer.md#service-discovery)

### Security
Refer to the [security section](../topics/security.md).

### Latency numbers
See [Latency numbers every programmer should know](../basics/additional.md#latency-numbers-every-programmer-should-know).

## Footnotes
[^conversion-guide]: Handy conversion guide
    - 2.5 million seconds per month
    - 1 request per second = 2.5 million requests per month
    - 40 requests per second = 100 million requests per month
    - 400 requests per second = 1 billion requests per month
    - Scaling is an iterative process
[^fanout]: [System Design: Fan-Out with Twitter](https://medium.com/@gitaeklee/system-design-fan-out-with-twitter-d071a6799893)
[^latency]: [Latency numbers every programmer should know](../basics/additional.md#latency-numbers-every-programmer-should-know)

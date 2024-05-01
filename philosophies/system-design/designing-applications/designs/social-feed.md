# Design a social media feed

- [Design a social media feed](#design-a-social-media-feed)
      - [Out of scope](#out-of-scope)
  - [Step 1: Determine use cases \& constraints](#step-1-determine-use-cases--constraints)
    - [Use cases](#use-cases)
      - [In Scope](#in-scope)
      - [Out of scope](#out-of-scope-1)
    - [Constraints](#constraints)
      - [Usage \& Space](#usage--space)
  - [Step 2: Create a high level design](#step-2-create-a-high-level-design)
  - [Step 3: Design core components](#step-3-design-core-components)
    - [Use case: User posts a tweet](#use-case-user-posts-a-tweet)
    - [Use case: User views the home timeline](#use-case-user-views-the-home-timeline)
    - [Use case: User views the user timeline](#use-case-user-views-the-user-timeline)
    - [Use case: User searches keywords](#use-case-user-searches-keywords)
  - [Step 4: Scale the design](#step-4-scale-the-design)
  - [Additional talking points](#additional-talking-points)
      - [NoSQL](#nosql)
    - [Caching](#caching)
    - [Asynchronism and microservices](#asynchronism-and-microservices)
    - [Communications](#communications)
    - [Security](#security)
    - [Latency numbers](#latency-numbers)
    - [Ongoing](#ongoing)

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
  * `user_id` - 32 bytes
  * `text` - 140 bytes
  * `media` - 10 KB average
  * Total: ~10 KB
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
### Use case: User submits post

We could store the user's own posts to populate the user timeline (activity from the user) in a [relational database](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms).  We should discuss the [use cases and tradeoffs between choosing SQL or NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql).

Delivering posts and building the home timeline (activity from people the user is following) is trickier.  Fanning out posts to all followers (60 thousand posts delivered on fanout per second) will overload a traditional [relational database](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms).  We'll probably want to choose a data store with fast writes such as a **NoSQL database** or **Memory Cache**.  Reading 1 MB sequentially from memory takes about 250 microseconds, while reading from SSD takes 4x and from disk takes 80x longer.<sup><a href=https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know>1</a></sup>

We could store media such as photos or videos on an **Object Store**.

* The **Client** posts a tweet to the **Web Server**, running as a [reverse proxy](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server)
* The **Web Server** forwards the request to the **Write API** server
* The **Write API** stores the tweet in the user's timeline on a **SQL database**
* The **Write API** contacts the **Fan Out Service**, which does the following:
    * Queries the **User Graph Service** to find the user's followers stored in the **Memory Cache**
    * Stores the tweet in the *home timeline of the user's followers* in a **Memory Cache**
        * O(n) operation:  1,000 followers = 1,000 lookups and inserts
    * Stores the tweet in the **Search Index Service** to enable fast searching
    * Stores media in the **Object Store**
    * Uses the **Notification Service** to send out push notifications to followers:
        * Uses a **Queue** (not pictured) to asynchronously send out notifications

**Clarify with your interviewer how much code you are expected to write**.

If our **Memory Cache** is Redis, we could use a native Redis list with the following structure:

```
           tweet n+2                   tweet n+1                   tweet n
| 8 bytes   8 bytes  1 byte | 8 bytes   8 bytes  1 byte | 8 bytes   8 bytes  1 byte |
| tweet_id  user_id  meta   | tweet_id  user_id  meta   | tweet_id  user_id  meta   |
```

The new tweet would be placed in the **Memory Cache**, which populates the user's home timeline (activity from people the user is following).

We'll use a public [**REST API**](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest):

```
$ curl -X POST --data '{ "user_id": "123", "auth_token": "ABC123", \
    "status": "hello world!", "media_ids": "ABC987" }' \
    https://twitter.com/api/v1/tweet
```

Response:

```
{
    "created_at": "Wed Sep 05 00:37:15 +0000 2012",
    "status": "hello world!",
    "tweet_id": "987",
    "user_id": "123",
    ...
}
```

For internal communications, we could use [Remote Procedure Calls](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc).

### Use case: User views the home timeline

* The **Client** posts a home timeline request to the **Web Server**
* The **Web Server** forwards the request to the **Read API** server
* The **Read API** server contacts the **Timeline Service**, which does the following:
    * Gets the timeline data stored in the **Memory Cache**, containing tweet ids and user ids - O(1)
    * Queries the **Tweet Info Service** with a [multiget](http://redis.io/commands/mget) to obtain additional info about the tweet ids - O(n)
    * Queries the **User Info Service** with a multiget to obtain additional info about the user ids - O(n)

REST API:

```
$ curl https://twitter.com/api/v1/home_timeline?user_id=123
```

Response:

```
{
    "user_id": "456",
    "tweet_id": "123",
    "status": "foo"
},
{
    "user_id": "789",
    "tweet_id": "456",
    "status": "bar"
},
{
    "user_id": "789",
    "tweet_id": "579",
    "status": "baz"
},
```

### Use case: User views the user timeline

* The **Client** posts a user timeline request to the **Web Server**
* The **Web Server** forwards the request to the **Read API** server
* The **Read API** retrieves the user timeline from the **SQL Database**

The REST API would be similar to the home timeline, except all posts would come from the user as opposed to the people the user is following.

### Use case: User searches keywords

* The **Client** sends a search request to the **Web Server**
* The **Web Server** forwards the request to the **Search API** server
* The **Search API** contacts the **Search Service**, which does the following:
    * Parses/tokenizes the input query, determining what needs to be searched
        * Removes markup
        * Breaks up the text into terms
        * Fixes typos
        * Normalizes capitalization
        * Converts the query to use boolean operations
    * Queries the **Search Cluster** (ie [Lucene](https://lucene.apache.org/)) for the results:
        * [Scatter gathers](https://github.com/donnemartin/system-design-primer#under-development) each server in the cluster to determine if there are any results for the query
        * Merges, ranks, sorts, and returns the results

REST API:

```
$ curl https://twitter.com/api/v1/search?query=hello+world
```

The response would be similar to that of the home timeline, except for posts matching the given query.

## Step 4: Scale the design

> Identify and address bottlenecks, given the constraints.

![Scaled Design](../_assets/social-feed-scaled.png)

**Important: Do not simply jump right into the final design from the initial design!**

State you would 1) **Benchmark/Load Test**, 2) **Profile** for bottlenecks 3) address bottlenecks while evaluating alternatives and trade-offs, and 4) repeat.  See [Design a system that scales to millions of users on AWS](../scaling_aws/README.md) as a sample on how to iteratively scale the initial design.

It's important to discuss what bottlenecks you might encounter with the initial design and how you might address each of them.  For example, what issues are addressed by adding a **Load Balancer** with multiple **Web Servers**?  **CDN**?  **Master-Slave Replicas**?  What are the alternatives and **Trade-Offs** for each?

We'll introduce some components to complete the design and to address scalability issues.  Internal load balancers are not shown to reduce clutter.

*To avoid repeating discussions*, refer to the following [system design topics](https://github.com/donnemartin/system-design-primer#index-of-system-design-topics) for main talking points, tradeoffs, and alternatives:

* [DNS](https://github.com/donnemartin/system-design-primer#domain-name-system)
* [CDN](https://github.com/donnemartin/system-design-primer#content-delivery-network)
* [Load balancer](https://github.com/donnemartin/system-design-primer#load-balancer)
* [Horizontal scaling](https://github.com/donnemartin/system-design-primer#horizontal-scaling)
* [Web server (reverse proxy)](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server)
* [API server (application layer)](https://github.com/donnemartin/system-design-primer#application-layer)
* [Cache](https://github.com/donnemartin/system-design-primer#cache)
* [Relational database management system (RDBMS)](https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms)
* [SQL write master-slave failover](https://github.com/donnemartin/system-design-primer#fail-over)
* [Master-slave replication](https://github.com/donnemartin/system-design-primer#master-slave-replication)
* [Consistency patterns](https://github.com/donnemartin/system-design-primer#consistency-patterns)
* [Availability patterns](https://github.com/donnemartin/system-design-primer#availability-patterns)

The **Fanout Service** is a potential bottleneck.  Twitter users with millions of followers could take several minutes to have their posts go through the fanout process.  This could lead to race conditions with @replies to the tweet, which we could mitigate by re-ordering the posts at serve time.

We could also avoid fanning out posts from highly-followed users.  Instead, we could search to find posts for highly-followed users, merge the search results with the user's home timeline results, then re-order the posts at serve time.

Additional optimizations include:

* Keep only several hundred posts for each home timeline in the **Memory Cache**
* Keep only active users' home timeline info in the **Memory Cache**
    * If a user was not previously active in the past 30 days, we could rebuild the timeline from the **SQL Database**
        * Query the **User Graph Service** to determine who the user is following
        * Get the posts from the **SQL Database** and add them to the **Memory Cache**
* Store only a month of posts in the **Tweet Info Service**
* Store only active users in the **User Info Service**
* The **Search Cluster** would likely need to keep the posts in memory to keep latency low

We'll also want to address the bottleneck with the **SQL Database**.

Although the **Memory Cache** should reduce the load on the database, it is unlikely the **SQL Read Replicas** alone would be enough to handle the cache misses.  We'll probably need to employ additional SQL scaling patterns.

The high volume of writes would overwhelm a single **SQL Write Master-Slave**, also pointing to a need for additional scaling techniques.

* [Federation](https://github.com/donnemartin/system-design-primer#federation)
* [Sharding](https://github.com/donnemartin/system-design-primer#sharding)
* [Denormalization](https://github.com/donnemartin/system-design-primer#denormalization)
* [SQL Tuning](https://github.com/donnemartin/system-design-primer#sql-tuning)

We should also consider moving some data to a **NoSQL Database**.

## Additional talking points

> Additional topics to dive into, depending on the problem scope and time remaining.

#### NoSQL

* [Key-value store](https://github.com/donnemartin/system-design-primer#key-value-store)
* [Document store](https://github.com/donnemartin/system-design-primer#document-store)
* [Wide column store](https://github.com/donnemartin/system-design-primer#wide-column-store)
* [Graph database](https://github.com/donnemartin/system-design-primer#graph-database)
* [SQL vs NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql)

### Caching

* Where to cache
    * [Client caching](https://github.com/donnemartin/system-design-primer#client-caching)
    * [CDN caching](https://github.com/donnemartin/system-design-primer#cdn-caching)
    * [Web server caching](https://github.com/donnemartin/system-design-primer#web-server-caching)
    * [Database caching](https://github.com/donnemartin/system-design-primer#database-caching)
    * [Application caching](https://github.com/donnemartin/system-design-primer#application-caching)
* What to cache
    * [Caching at the database query level](https://github.com/donnemartin/system-design-primer#caching-at-the-database-query-level)
    * [Caching at the object level](https://github.com/donnemartin/system-design-primer#caching-at-the-object-level)
* When to update the cache
    * [Cache-aside](https://github.com/donnemartin/system-design-primer#cache-aside)
    * [Write-through](https://github.com/donnemartin/system-design-primer#write-through)
    * [Write-behind (write-back)](https://github.com/donnemartin/system-design-primer#write-behind-write-back)
    * [Refresh ahead](https://github.com/donnemartin/system-design-primer#refresh-ahead)

### Asynchronism and microservices

* [Message queues](https://github.com/donnemartin/system-design-primer#message-queues)
* [Task queues](https://github.com/donnemartin/system-design-primer#task-queues)
* [Back pressure](https://github.com/donnemartin/system-design-primer#back-pressure)
* [Microservices](https://github.com/donnemartin/system-design-primer#microservices)

### Communications

* Discuss tradeoffs:
    * External communication with clients - [HTTP APIs following REST](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest)
    * Internal communications - [RPC](https://github.com/donnemartin/system-design-primer#remote-procedure-call-rpc)
* [Service discovery](https://github.com/donnemartin/system-design-primer#service-discovery)

### Security

Refer to the [security section](https://github.com/donnemartin/system-design-primer#security).

### Latency numbers

See [Latency numbers every programmer should know](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know).

### Footnotes

* Continue benchmarking and monitoring your system to address bottlenecks as they come up
* Scaling is an iterative process

[^conversion-guide]: Handy conversion guide
    - 2.5 million seconds per month
    - 1 request per second = 2.5 million requests per month
    - 40 requests per second = 100 million requests per month
    - 400 requests per second = 1 billion requests per month
    - Scaling is an iterative process
[^fanout]: [System Design: Fan-Out with Twitter](https://medium.com/@gitaeklee/system-design-fan-out-with-twitter-d071a6799893)

<!-- # Social Newsfeed
- [Social Newsfeed](#social-newsfeed)
  - [Overview](#overview)
  - [Solution](#solution)
  - [Features](#features)
  - [Functional Requirements](#functional-requirements)
  - [System](#system)
  - [Links](#links)

## Overview

## Solution
<details>
  <summary>Diagram</summary>
  
  ![](./_assets/twitter.png)
</details>

## Features
1. 

## Functional Requirements
1. 

## System
- 

---
## Links
- [`donnemartin/system-design-primer`](https://github.com/donnemartin/system-design-primer/tree/master)
- [Twitter System Design - YouTube](https://www.youtube.com/watch?v=EkudBdvbDhs)
- [Twitter System Design - Medium](https://medium.com/@karan99/system-design-twitter-793ab06c9355) -->

<!-- # Designing Twitter

# Features
1. Follow others
1. Create tweets
    - 140 Character limit
    - Images
    - Videos
1. View Feed

## Functional Requirements
1. Users
    - 500M totals users
    - 200M active users
    - 100 reads / day
      - 200M * 100 => 20B reads / day
        - 1mb reads per tweet => 20pb data read / day
          - 1M * 20G * 1000 * 1000 => 20pb
    - Eventual Consistancy is preferred for this much data

## System
- Application Servers
  - Database options
    - Relation database
      - If `join`s are needed
      - Can shard
      - [CockroachDB](https://www.cockroachlabs.com/) is amazing for this
    - GraphDB database
      - Great for finding relations
  - Caching
    - In front of the database
      - Object storage for hella fast reads
      - CDN Network tied to Object Storage
        - Polling as immediate writes to the CDN aren't overloaded
        - Also because different locations are looking at different tweets
  - Interactions
    - Create tweet
      - `uid`
      - text
      - media
    - Getting Feed
      - `uid`
    - Follow
      - `uid`
  - Database Tables
    - Tweets
      - Timestamp
      - Media
        - Not in DB => Object storage
    - Follows
      - followee
      - follower
        - Index on follower
          - Because read heavy
    - 50GB per day
      - 500 writes / second
      - Read only replicas
        - Sharding
          - Okay if not on time
          - Sharding on `uid`
            - If on `tweetid` we don't know which shard to hit
              - Would be pretty expensive
            - Need to order based on created
              - Can wait on scroll not all immediatly
            - Latency would also be an issue
              - Can create news feed asynchronously
                - Cuz 200M isn't a lot with tweets this small
    - Can use `pub/sub`
      - [Apache Kafka](https://kafka.apache.org/) could be an amazing option here
    - Save all feeds at once
      - Will want to shard cache
    - Updating feeds
      - If user with many followers (e.g. User w/100M followers on high end)
      - Cache might be a bad option here

Karan Pratap Singh
- https://leanpub.com/systemdesign
- https://github.com/karanpratapsingh/system-design
- https://dev.to/karanpratapsingh/system-design-twitter-865

Donne Martin
- https://www.geeksforgeeks.org/design-twitter-a-system-design-interview-question/

Misc
- https://github.com/donnemartin/system-design-primer/ -->

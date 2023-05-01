# System Design

As this is a refresher all this information came from NeetCode's Youtube video which is why most of the headings are the same as the chapters in the video. Further examples originate from experiance, books or various websites.

## Vertical & Horizontal Scaling
### Vertical
Adding hardware to make a beefy server. This is good for small and low 

| Pros | Cons |
|---|---|
| Very easy to do | Single point of failure |

### Horizontal
Hardware replicas. Containers, actual servers etc.

| Pros | Cons |
|---|---|
| Fewer single points of failure | More complicated |
| | What if a single server is overloaded with requests |

## Load Balancers
A `Reverse Proxy` (note, I hate this name) _balances_ the load and spreads it across servers (in a horizontal setup). Goal is to split the requests to all the servers evenly. This can be done with a "Round Robin" approach (each request goes to a different server) or to use a hashing algorithm to determine which server the request will be relayed to. 

If servers are in different locations across the world (or even just timezones) the `Load Balancer`(s) can direct traffic to nearest geographical server [cluster]. 

## Content Delivery Networks
Like the previous sentence in the `Load Balancers` a `CDN` spaces out traffic across servers. A `CDN` does not run any application logic but rather serves up static files. They work by taking your uploaded static files and copies them across the `CDN` network. `CDN`s can push or pull. `Pushing` is copying to the network. An alterative approach is `Pulling` which works by copying the static files either "Just in Time" when there is a request or the origin server tells the others files are ready and then each `CDN` pulls the files from the origin.

A `CDN` is essentially a static file cache.

## Caching
I personally do not like `Caching` in most instances but in one that I do feel it works well is a `CDN`. Another good time to cache is local development. For instance `nx` caches changes to code and tests so that things are compliled quicker. I typically do not like `Caching` for runtime software as it makes things more complicated and usually too difficult to implement correctly and as engineers our products will rarely benefit from writing (and sometimes using packages/services) is also troublesome as you don't want to be bug fixing this code. 

AAAAAAANYway, `Caching` can be done in different ways. For instance at the computer level the computer can `Cache` operations/functions in `RAM` or in the `CPU`

### When `Caching` is appropriate and useful:
- `CDNs`
- *_SOME_* DB queries
- `Memoization` of functions

### Tangent

## Domain Name System
A `DNS` is a map of `IP`s to a domain name and is spread across the public network. Also used in your router, NAS etc to remember which machine is which when they are being requested.

## `HTTP`
### Protocols
## `TCP/IP`
The networking layer. Important to know because ...

`TCP/IP` breaks down the data that will be sent over the wire and they are ordered so that they can be reassembled on the requesting machine. It's a powerful and reliable network powerful for those reasons and is why `HTTP` & `Websockets`, for instance, are built on `TCP/IP`.

#### Quick Tangent
Q: Why is it important for software engineers to know the networking layers (at least `TCP/IP`)?

Answers:
1. Architecture Design: One must understandthe protocols so architectures can be designed to be performance and durable.
1. Debugging/Bug fixing: There are times, not often, where a bug will surface and it comes down to an edge case in server communication (server-to-server, server-to-client etc)
1. Websockets, REST, 
1. Setting up containers with intercommunication
1. The higher the traffic and application recieves he more important knowing the protocols will be. 

*_NOTE_*: The instances where knowing the networking layers intimately are exceedingly rare but knowing at least the bases is important. Especially for interviews as, for some ungodly reason, people like to ask about the Layers. If so make sure to ask if engineers have to use that knowledge often. I would be annoyed if I have to as I prefer to work _inc deo_ versus being low level often.

### Machine-to-machine communication 
#### `REST`
> Learn about the REST (Representational State Transfer) paradigm and how rest architecture streamlines communication between web components.

`REST` is a web standard for communication from machine-to-machine. The biggest benefit is that it's human readable and [many] web languages have native support. It is bulky, tho, as it is just a string that is sent over the wire and even when it's compressed it can still be a hefty response. Another drawback is `REST` APIs [can] suffer from unwieldy architecture when the API becomes large. Oftentimes you will see/work with`REST` APIs that have similar responses for different endpoints (not via `HTTP METHOD`) as it will be easier to develop a new endpoint instead of modifying the existing one as it could introduce a breaking change. Many architectures leverage some sort of versioning system to handle breaking changes for the same endpoint.

#### `GraphQL`
Is another API standard for making requests from the server but is more targeted and works more like a schema. I will not go further into this one as it is a whole topic on it's own and I haven't really had a change to work with `GraphQL`. The benefit of `GraphQL` is instead of making multiple requests like `REST` one makes a single request for everything required for a request. `GraphQL` also won't "overfetch" as is comming in `REST` as, again, one only requests what is directly needed for any given request.

This can also be done with `REST` but that requires one to develop those options whereas using `GraphQL` is simpler and already built out in order to do just that.

#### `gRPC`
Same as `GraphQL` I haven't used this in order to really say anything about it but NeetCode says:
> Introduced by Google `gRPC` is used, typically, in server-to-server communication. It uses Protocol Buffers which is a way to send data as binary across the wire.

#### `WebSockets`
Insead of using `polling` this protocol is a way to have constant bi-direction communication between application and server. Meaning that requests are immediatly sent to each device communicating with each other.

## Data Storage
### `SQL`
Storing data in a structured format. FYI databases use binary trees to store data and has [blazing] fast retrieval especially when the database is normalized well and properly indexed.

#### `ACID`
```
A - Atomicity → Every transaction is "All or Nothing"
C - Consistancy → FKs will always be enforced
I - Isolation → Different concurrent transactions will not collide
D - Durability → Data is saved so even if the database is restarted the data will still exist and is retrievable (unless in a container 😬)
```

### `NoSQL`
Storing data in a non-structured format. Often uses `JSON` like `MongoDB`. I don't love this one for most uses but for logging, caching and/or copious amounts of non-relation data it's amazing. Big issue with data schema changes tho as the code would have to account for that and that usually means a ton of conditionals in code and that would make it very hard to decipher.

`NoSQL` foregoes the foreign key constraints. This can also be done in a relational DB but requires the developers to be very cognizant of their query mutations so as to not make the data murky/inconsistant.

#### Data 
### `Sharding`
No, not a joke. `Sharding` is when one can break up a database as the foreign key constraint allows for this. Sharding keys are used to find where the data is located on each shard. 

### Replication
As Sharding can get complicated replication is a simpler way to handle data splitting. While easier it can be difficult to maintain in it's own right. "Leader → Follower Replication" DBs can have issues of replicating data and then the two are out of sync, for instance.

### Last alternative
Another approach is to use a CQRS-type design where the data is broken up by read & writes into different microservices and storing all the data into a large log database. This is an incredibly simplified explaination. 

## CAP Theorem
A way to help with replicated architecture.

```
C - Consistency
A - Availability
P - Partition (Network)
```

## Message Queues
A Message Queue maintains durability (each message) and can be sharded or replicated. They maintain a queue of messages that can be processed as they come in or later (durability) if the system is restarted. Often used if the traffic is large and is more than an application can handle. Since the queue is maintained it can be processed as is needed. A benefit is that an application can be decoupled from each other (microservices).

---
## Footnotes
- NeetCode, [20 Concepts in 10 min](https://www.youtube.com/watch?v=i53Gi_K3o7I), 2023
- Kousik Nath, [Understanding TCP internals step by step for Software Engineers and System Designers](https://codeburst.io/understanding-tcp-internals-step-by-step-for-software-engineers-system-designers-part-1-df0c10b86449), 2019
- [yannis](https://softwareengineering.stackexchange.com/users/25936/yannis), [Should a web developer understand TCP/IP and how routers manage requests?](https://softwareengineering.stackexchange.com/questions/66569/should-a-web-developer-understand-tcp-ip-and-how-routers-manage-requests), 2011
- Quora, [Do software engineers often need to know a lot about networks?](https://www.quora.com/Do-software-engineers-often-need-to-know-a-lot-about-networks), 2020
- Codeccademy, https://www.codecademy.com/article/what-is-rest, [What is Rest?](https://www.codecademy.com/article/what-is-rest), 

<!--

| Pros | Cons |
|---|---|
|   |   |

-->

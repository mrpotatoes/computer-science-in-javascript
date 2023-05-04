# Design Fundamentals
- [Design Fundamentals](#design-fundamentals)
  * [About Computers](#about-computers)
    + [Application Architecture](#application-architecture)
      - [Were they good decisions?](#were-they-good-decisions-)
      - [Horizontal Scaling](#horizontal-scaling)
      - [Main bits of an architecture](#main-bits-of-an-architecture)
  * [Networking](#networking)
    + [Protocols](#protocols)
    + [DNS](#dns)
  * [APIs](#apis)
    + [HTTP](#http)
    + [Websockets](#websockets)
    + [Paradigms](#paradigms)
    + [Design](#design)
  * [Caching](#caching)
    + [CDNs](#cdns)
  * [Proxies](#proxies)
    + [Load Balancing](#load-balancing)
    + [Consistent Hashing](#consistent-hashing)
  * [Persistent data](#persistent-data)
    + [Relational Databases (`SQL`)](#relational-databases---sql--)
    + [NoSQL](#nosql)
    + [Replication](#replication)
    + [Sharding](#sharding)
    + [`CAP`](#-cap-)
    + [Message Queues](#message-queues)
    + [`MapReduce`](#-mapreduce-)
  * [References](#references)
  * [Citations](#citations)

System Design is about large-scale systems & big data. It's about designing systems/platforms that handle large datasets, large traffic and blazing fast performance in the face of those challenges. Designing a large system also includes making it easy (or at least consistent) for engineers to solve business problems. Having a performant system will be of no benefit if adding new features or fixing bugs slows everything to a crawl. It isn't beneficial to the organization or your mental state/morale.

Okay, so, as with everything in life System Design is about tradeoffs. Which language and why? Which server architecture and why? Which service providers and why? Build your own API Gateway or use an off-the-rack one? And why. It's all about how to make the best decisions for your team and organization. System Design and Software Engineering is about data. Moving it, storing it or transforming it. 

```
Storing - Saving data into RAM temporarily, putting it into a data store (db) or onto files (typically configurations)
Moving - Data moving from server to server, dbs to to application & vice versa, between services within your own network
Transforming - 
```

## About Computers
Not just your local machine but the servers and systems that are all components that are composed together to create a coherent platform. I will not go over computer architecture as it is so basic (and most people already know it anyhow) but it should be known that this is important to understand as it is the underpinnings of all decisions one would one would make when designing a system. Though, I should note, that this would be even more important if you need to write code that gets close to bare metal. The closer one gets to machine code the more indepth knowledge one is required to have to make proper use of the computer so as to not destroy the machine and can have good performance.

## Application Architecture
I'm going to breeze through this section because if you've worked in a professional setting for at least 6 months you'll know most of this already just from experience.

If the basic building blocks of a computer are used in tandem to create a machine that allows someone to use applications for various purposes like watching/listening to media on a streaming provider's platform, using a chat app or any of the multitudes of networked applications then application architecture is the composition of many of these computers in some configuration. 

One example is beefing up a computer's components. For instance adding a bigger CPU, a beefier graphics card or more and specialized RAM. Anotrher common (for applications that will serve many users) example of this is `Horizontal Scaling` of systems. This allows for better/easier scaling. Essentially computer replicas that work together. Both approaches can also be used. Building really beefy machines and replicating them. There is sort of the benefit of both but this is something costly to maintain and difficult to scale.

![Web Application Architecture](./_web-arch.png)
[^app-arch] - Image Attribution

### Horizontal Scaling
![Horizontal Scaling Diagram](./_horiz-scale.png)
[^horscale] - Image Attribution

### Other Prerequsites
These prerequsites are what help us determine if our design is a good one or if there are tweaks that need to be made.

| Prerequsites| What/Why |
|---|---|
| Fault Tolerance | Can a server go down and the app still stay up? This is usually handled by redundancy. |
| Redundancy | Scaling. It's good to have redundancy so there is leeway of failure without the entire system falling into chaos. |
| Reliability | What is the expectation that the whole or part of the system will fail? ex: Can `DDOS` won't bring the system down. |
| Availability | The uptime. Shoot for 99.9999%. Seriously. [SLO/SLA/SLI](https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli). |
| Throughput | How much data can be requested and responded by users of the system. |
| Latency | How long it takes to respond to a request. Slow operations, slow network, poorly designed databases etc all affect the latency of an application |

#### Main bits of an architecture
- Logging Service
- Metrics Service
- Horizontal Scaling
- Database (`SQL`, `NoSQL`, `Graph`)
- CI/CD
- Repo (usually `Git`, at least for now)
- API Gateway
- Load Balancer
- Alerting

## Networking
Networking is so important as the Internet could not exist without it and all our devices (smart phones, computers, tablets, refrigerators etc) are interconnected via the Internet. Networking is so important to KNOW because if we intend to build application architectures for internet enabled applications we need to understand not only that data travels over the wire but how it does so and how it's deciphered on the other end.

### `TCP/IP`
`TCP/IP` breaks down the data that will be sent over the wire and they are ordered so that they can be reassembled on the requesting machine. It's a powerful and reliable network powerful for those reasons and is why `HTTP` & `Websockets`, for instance, are built on `TCP/IP`. `TCP/IP` also does retransmission. For instance if a packet is lost then the requester can re-request that specific packet because of the packet ID. This makes it hella reliable.

Quick note on `UDP`. It is meant for speed. Used in applications like gaming, music/video streaming and calling. `TCP/IP` is great for data that needs to be in order and consistant but if you use it in something like meda streaming then it'll re-request packets and slow things down. Even worse it can make the audio sound really odd when it is getting back up to speed.

### Basic Technology
#### `RPC`
`RPC` translates to Remote Procedure Call. 
> Remote Procedure Call is a software communication protocol that one program can use to request a service from a program located in another computer on a network without having to understand the network's details. RPC is used to call other processes on the remote systems like a local system. - Tech Target [^rpc]

It is a client → server model. This means that a client (your computer, a server et al) makes a request to another machine (server) in order to run a function on the server (procedure). 

#### `HTTP`
The Internet protocol. As engineers and architects we primarily use `TCP/IP`. `HTTP` is an application layer that is built on top of `TCP/IP`.  `HTTP` is stateless. `HTTP` uses "METHOD"s to tell the server _what_ behavior the requester wants. 

| Common Methods[^http-methods] | Explaination |
|---|---|
| `GET`  | The `GET` method requests a representation of the specified resource. Requests using GET should only retrieve data. |
| `PUT`  | The `PUT` method replaces all current representations of the target resource with the request payload |
| `POST`  | The `POST` method submits an entity to the specified resource, often causing a change in state or side effects on the server |
| `DELETE`  | The `DELETE` method deletes the specified resource |

Quick note on security. HTTP on it's own isn't inherently secure so the `SSL` & `TLS` protocols were introduced. It's the `s` at the end of `https://`

### Domain Name System
A `DNS` is a map of `IP`s to a domain name and is spread across the public network. Also used in your router, NAS etc to remember which machine is which when they are being requested.

#### Quick Tangent
Q: Why is it important for software engineers to know the networking layers (at least `TCP/IP`)?

Answers:
1. Architecture Design: One must understandthe protocols so architectures can be designed to be performance and durable.
1. Debugging/Bug fixing: There are times, not often, where a bug will surface and it comes down to an edge case in server communication (server-to-server, server-to-client etc)
1. Websockets, REST, 
1. Setting up containers with intercommunication
1. The higher the traffic and application recieves he more important knowing the protocols will be. 

*_NOTE_*: The instances where knowing the networking layers intimately are exceedingly rare but knowing at least the bases is important. Especially for interviews as, for some ungodly reason, people like to ask about the Layers. If so make sure to ask if engineers have to use that knowledge often. I would be annoyed if I have to as I prefer to work _inc deo_ versus being low level often.

### Protocols

There are a few protocols such as `SSH`, `FTP`, `SMTP` and `Websockets`. I will go over these quickly.

#### `SSH`
... TODO

#### `FTP`
... TODO

#### `SMTP`
... TODO

#### `Websockets`
`Websockets` is a way to open two-way communication between two machines. It is possible to do this with `HTTP` and polling but polling is an inefficient method of aquiring up-to-date data from a source. For instance with `HTTP` whenver a request is made the application (browser, server) is required to make a new network request each time and if the application being developed is, for instance, a chat app like `Discord` then polling will quickly get out of hand. A better method to achieve the same results is the `Websockets` techology.

`Websockets` creates a "handshake" between the client and server which creates a persistent connection to the server. This allows for bi-direction communication. Think of it as an event pased communication between machines. One could say that `Websockets` are an outdated technology in the presense of `HTTP/2` as that new protocol added streaming.

## APIs
### Paradigms
#### `REST`
> Learn about the REST (Representational State Transfer) paradigm and how rest architecture streamlines communication between web components.

`REST` is a web standard for communication from machine-to-machine. The biggest benefit is that it's human readable and [many] web languages have native support. It is bulky, tho, as it is just a string that is sent over the wire and even when it's compressed it can still be a hefty response. Another drawback is `REST` APIs [can] suffer from unwieldy architecture when the API becomes large. Oftentimes you will see/work with`REST` APIs that have similar responses for different endpoints (not via `HTTP METHOD`) as it will be easier to develop a new endpoint instead of modifying the existing one as it could introduce a breaking change. Many architectures leverage some sort of versioning system to handle breaking changes for the same endpoint.

#### `GraphQL`
Is another API standard for making requests from the server but is more targeted and works more like a schema. I will not go further into this one as it is a whole topic on it's own and I haven't really had a change to work with `GraphQL`. The benefit of `GraphQL` is instead of making multiple requests like `REST` one makes a single request for everything required for a request. `GraphQL` also won't "overfetch" as is comming in `REST` as, again, one only requests what is directly needed for any given request.

This can also be done with `REST` but that requires one to develop those options whereas using `GraphQL` is simpler and already built out in order to do just that.

#### `gRPC`
Same as `GraphQL` I haven't used this in order to really say anything about it but NeetCode says:
> Introduced by Google `gRPC` is used, typically, in server-to-server communication. It uses Protocol Buffers which is a way to send data as binary across the wire.

### Design

## Caching
### CDNs

## Proxies
### Load Balancing
### Consistent Hashing

## Persistent data
### Relational Databases (`SQL`)
### NoSQL
### Replication
### Sharding
### `CAP`
### Message Queues
### `MapReduce`


---
## References

---

## Citations

[^app-arch]: lanars.com, [Web application architecture best practices](https://lanars.com/blog/web-application-architecture-best-practices)

[^horscale]: Michael Wittig, [How to Choose the Best Way to Scale EC2 Instances](https://blog.cloudcraft.co/how-to-choose-the-best-way-to-scale-ec2-instances-when-faced-with-changing-demand/), 2021

[^rpc]: [Remote Procedure Call (RPC)](https://www.techtarget.com/searchapparchitecture/definition/Remote-Procedure-Call-RPC)

[^http-methods]: [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

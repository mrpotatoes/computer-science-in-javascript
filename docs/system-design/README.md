# System Design
> Learn how to design large-scale systems.
>
> Prep for the system design interview.

<p align="center"><img src="./_assets/hero-image.jpg"></p>

- [System Design](#system-design)
  - [TODOs](#todos)
  - [Start Here](#start-here)
  - [Core Topics](#core-topics)
  - [Interview Questions](#interview-questions)
  - [Credits](#credits)
  - [License](#license)

## TODOs
- [ ] Consolidate all relevant sources to the bottom of each page
- [ ] Images
  - [ ] Pull in all images
  - [ ] Rename to be discoverable
  - [ ] Relink all images
- [ ] Remake all diagrams using [draw.io](https://draw.io/)
- [ ] Add each system design document
- [ ] Rewrite content into my own words

## Start Here
Learning how to design scalable systems will help you become a better engineer. System design is a broad topic. There is a vast amount of resources scattered throughout the web on system design principles.

- [How to approach](./basics/how-to-approach.md)
- [Study Guide](./basics/study-guide.md)
- [Additional System Designs](./basics/additional-designs.md)

## [Core Topics](README.md)
| Topic                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Application Layer](./topics/application-layer.md)                     | Separating out the web layer from the application layer (also known as platform layer) allows you to scale and configure both layers independently. Adding a new API results in adding application servers without necessarily adding additional web servers. The **single responsibility principle** advocates for small and autonomous services that work together. Small teams with small services can plan more aggressively for rapid growth. |
| [Asynchronism](./topics/asynchronism.md)                               | Asynchronous workflows help reduce request times for expensive operations that would otherwise be performed in-line                                                                                                                                                                                                                                                                                                                                   |
| [Availability Patterns](./topics/availability-patterns.md)             | There are two complementary patterns to support high availability: `fail-over` and `replication`                                                                                                                                                                                                                                                                                                                                                      |
| [Availability Vs Consistency](./topics/availability-vs-consistency.md) | Pick one: Consistency, Availability, Partition Tolerance                                                                                                                                                                                                                                                                                                                                                                                              |
| [Cache](./topics/cache.md)                                             | Caching improves page load times and can reduce the load on your servers and databases                                                                                                                                                                                                                                                                                                                                                                |
| [Communication](./topics/communication.md)                             | HTTP methods, but, like, there's more to it                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Consistency Patterns](./topics/consistency-patterns.md)               | Basically synchronization                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Content Delivery Network](./topics/content-delivery-network.md)       | A globally distributed network of proxy servers                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Database](./topics/database.md)                                       | Data storage                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Domain Name System](./topics/domain-name-system.md)                   | DNS translates a domain name to an IP address                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Latency Vs Throughput](./topics/latency-vs-throughput.md)             | Just read it, the simplest topic in here                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Load Balancer](./topics/load-balancer.md)                             | Load balancers distribute incoming client requests to computing resources                                                                                                                                                                                                                                                                                                                                                                             |
| [Performance Vs Scalability](./topics/performance-vs-scalability.md)   | We all know this ...                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Reverse Proxy Web Server](./topics/reverse-proxy-web-server.md)       | A reverse proxy is a web server that centralizes internal services and provides unified interfaces to the public                                                                                                                                                                                                                                                                                                                                      |
| [Security](./topics/security.md)                                       | ... security?                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Interview Questions
| Design a ...                               | Solution                                                           |
| ------------------------------------------ | ------------------------------------------------------------------ |
| Social feed                                | [Solution](./designs/social-feed.md)                               |
| Url Shortener                              | [Solution](./designs/url-shortener.md)                             |
| Scaling AWS                                | [Solution](./designs/scaling-aws.md)                               |
| Chat App                                   | [Solution](./designs/chat-app.md)                                  |
| Collaborative Document Editing             | [Solution](./designs/collaborative-document-editing.md)            |
| Cloud Storage                              | [Solution](./designs/cloud-storage.md)                             |
| Maps                                       | [Solution](./designs/maps.md)                                      |
| Streaming service                          | [Solution](./designs/streaming-service.md)                         |

<!--

| Consistent Hashing                         | [Solution](./designs/consistent-hashing.md)                        |
| Web crawler                                | [Solution](./designs/web-crawler.md)                               |
| Typeahead                                  | [Solution](./designs/typeahead.md)                                 |
| Rate Limiter                               | [Solution](./designs/rate-limiter.md)                              |
| Key Value Store                            | [Solution](./designs/key-value-store.md)                           |
| Infra to scale to millions                 | [Solution](./designs/infra-to-scale-to-millions.md)                |
| Distributed Message Queue                  | [Solution](./designs/distributed-message-queue.md)                 |

-->

## Credits
- Credits and sources are provided throughout this repo. Special thanks to Donne Martin ([`donnemartin/system-design-primer`](https://github.com/donnemartin/system-design-primer))
- Hero Image: [The key lessons I learned creating a popular Design System](https://medium.com/@MattBond21/the-key-lessons-i-learned-creating-a-popular-design-system-d078c817b4dd)

## License
*I am providing code and resources in this repository to you under an open source license. Because this is my personal repository, the license you receive to my code and resources is from me and not my employer (Facebook).*

```
Copyright 2017 Donne Martin

Creative Commons Attribution 4.0 International License (CC BY 4.0)

http://creativecommons.org/licenses/by/4.0/
```

# System Design
> Learn how to design large-scale systems.
>
> Prep for the system design interview.

<p align="center"><img src="./_assets/hero-image.jpg"></p>

<details>
  <summary>Todos</summary>
  
  ### Tasks for each document
  - [ ] Consolidate all relevant sources to the bottom of each page
    - [ ] Call them "`## Citations & Footnotes`"
  - [ ] Images
    - [x] Pull in all images
    - [ ] Rename to be discoverable
  - [ ] Remake all diagrams using [draw.io](https://draw.io/)
  - [ ] Use `LaTeX` for numbers n' shit
  - [ ] Change communication.md's table's code content to be proper html formatted with newlines & tabs
  - [ ] Add each system design document

  ### System docs to finish
  - [systems/asynchronism.md](systems/asynchronism.md)
  - [systems/performance-vs-scalability.md](systems/performance-vs-scalability.md)
  - [systems/latency-vs-throughput.md](systems/latency-vs-throughput.md)
  - [systems/fanout-service.md](systems/fanout-service.md)
  - [systems/domain-name-system.md](systems/domain-name-system.md)
  - [systems/content-delivery-network.md](systems/content-delivery-network.md)
  - [systems/consistency-patterns.md](systems/consistency-patterns.md)
  - [systems/consistency-patterns.md](systems/consistency-patterns.md)
  - [systems/cache.md](systems/cache.md)
  - [systems/availability-vs-consistency.md](systems/availability-vs-consistency.md)
  - [systems/availability-patterns.md](systems/availability-patterns.md)

  ### Useful Links
  > Delete me once I've converted all the docs

  - https://markdowntohtml.com/
  - https://codebeautify.org/html-to-markdown
  - https://www.freeformatter.com/html-formatter.html
</details>

## Start Here
Learning how to design scalable systems will help you become a better engineer. System design is a broad topic. There is a vast amount of resources scattered throughout the web on system design principles.

1. [Study Guide](./basics/study-guide.md)
1. [How to approach](./basics/how-to-approach.md)
1. [Application Architecture](./basics/application-architecture.md)
1. [Networking](./basics/networking.md)
1. [APIs](./basics/apis.md)
1. [Back of the Envelope Calculations](./basics/back-of-the-envelope.md)

## [Core Systems](README.md)
<table>
  <thead>
    <tr>
      <th width="250px">Systems</th>
      <th width="800px">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="./systems/application-layer.md">Application Layer</a></td>
      <td>Separating out the web layer from the application layer (also known as platform layer) allows you to scale and configure both layers independently. Adding a new API results in adding application servers without necessarily adding additional web servers. The <strong>single responsibility principle</strong> advocates for small and autonomous services that work together. Small teams with small services can plan more aggressively for rapid growth.</td>
    </tr>
    <tr>
      <td><a href="./systems/asynchronism.md">Asynchronism</a></td>
      <td>Asynchronous workflows help reduce request times for expensive operations that would otherwise be performed in-line</td>
    </tr>
    <tr>
      <td><a href="./systems/availability-patterns.md">Availability Patterns</a></td>
      <td>There are two complementary patterns to support high availability: <code>fail-over</code> and <code>replication</code></td>
    </tr>
    <tr>
      <td><a href="./systems/availability-vs-consistency.md">Availability Vs Consistency</a></td>
      <td>Pick one: Consistency, Availability, Partition Tolerance</td>
    </tr>
    <tr>
      <td><a href="./systems/cache.md">Cache</a></td>
      <td>Caching improves page load times and can reduce the load on your servers and databases</td>
    </tr>
    <tr>
      <td><a href="./systems/communication.md">Communication</a></td>
      <td>HTTP methods, but, like, there&#39;s more to it</td>
    </tr>
    <tr>
      <td><a href="./systems/consistency-patterns.md">Consistency Patterns</a></td>
      <td>Basically synchronization</td>
    </tr>
    <tr>
      <td><a href="./systems/content-delivery-network.md">Content Delivery Network</a></td>
      <td>A globally distributed network of proxy servers</td>
    </tr>
    <tr>
      <td><a href="./systems/database.md">Database</a></td>
      <td>Data storage</td>
    </tr>
    <tr>
      <td><a href="./systems/domain-name-system.md">Domain Name System</a></td>
      <td>DNS translates a domain name to an IP address</td>
    </tr>
    <tr>
      <td><a href="./systems/latency-vs-throughput.md">Latency Vs Throughput</a></td>
      <td>Just read it, the simplest topic in here</td>
    </tr>
    <tr>
      <td><a href="./systems/load-balancer.md">Load Balancer</a></td>
      <td>Load balancers distribute incoming client requests to computing resources</td>
    </tr>
    <tr>
      <td><a href="./systems/performance-vs-scalability.md">Performance Vs Scalability</a></td>
      <td>We all know this ...</td>
    </tr>
    <tr>
      <td><a href="./systems/reverse-proxy-web-server.md">Reverse Proxy Web Server</a></td>
      <td>A reverse proxy is a web server that centralizes internal services and provides unified interfaces to the public</td>
    </tr>
    <tr>
      <td><a href="./systems/security.md">Security</a></td>
      <td>... security?</td>
    </tr>
  </tbody>
</table>

## Interview Questions
<table>
  <thead>
    <tr>
      <th width="250px">Design a ...</th>
      <th width="800px">Solution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Social feed</td>
      <td><a href="./archtectures/social-feed.md">Solution</a></td>
    </tr>
    <tr>
      <td>Url Shortener</td>
      <td><a href="./archtectures/url-shortener.md">Solution</a></td>
    </tr>
    <tr>
      <td>Scaling AWS</td>
      <td><a href="./archtectures/scaling-aws.md">Solution</a></td>
    </tr>
    <tr>
      <td>Chat App</td>
      <td><a href="./archtectures/chat-app.md">Solution</a></td>
    </tr>
    <tr>
      <td>Collaborative Document Editing</td>
      <td><a href="./archtectures/collaborative-document-editing.md">Solution</a></td>
    </tr>
    <tr>
      <td>Cloud Storage</td>
      <td><a href="./archtectures/cloud-storage.md">Solution</a></td>
    </tr>
    <tr>
      <td>Maps</td>
      <td><a href="./archtectures/maps.md">Solution</a></td>
    </tr>
    <tr>
      <td>Streaming service</td>
      <td><a href="./archtectures/streaming-service.md">Solution</a></td>
    </tr>
  </tbody>
</table>

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

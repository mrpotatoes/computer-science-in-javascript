# Proxies
![Server Proxy](../_assets/systems/_server-proxy.png)

- [Content Delivery Networks (`CDN`)](#content-delivery-networks-cdn)
- [Load balancer](#load-balancer)
  - [Layer 4 load balancing](#layer-4-load-balancing)
  - [Layer 7 load balancing](#layer-7-load-balancing)
  - [Horizontal scaling](#horizontal-scaling)
    - [Disadvantage(s): horizontal scaling](#disadvantages-horizontal-scaling)
  - [Disadvantage(s): load balancer](#disadvantages-load-balancer)
- [Reverse Proxy](#reverse-proxy)
  - [Load balancer vs reverse proxy](#load-balancer-vs-reverse-proxy)
  - [Disadvantage(s): reverse proxy](#disadvantages-reverse-proxy)
- [Consistent Hashing](#consistent-hashing)
- [Citations \& Footnotes](#citations--footnotes)

[^server-proxy] - Image Attribution

A proxy is a server in the middle of your back end. Simply.

## Content Delivery Networks (`CDN`)
Like the previous sentence in the `Load Balancers` a `CDN` spaces out traffic across servers. A `CDN` does not run any application logic but rather serves up static files. They work by taking your uploaded static files and copies them across the `CDN` network. `CDN`s can push or pull. `Pushing` is copying to the network. An alterative approach is `Pulling` which works by copying the static files either "Just in Time" when there is a request or the origin server tells the others files are ready and then each `CDN` pulls the files from the origin.

## Load balancer
<p align="center">
  <img src="../_assets/systems/load-balancer.png">
  <br/>
  <i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Source: Scalable system design patterns</a></i>
</p>

Load balancers distribute incoming client requests to computing resources such as application servers and databases.  In each case, the load balancer returns the response from the computing resource to the appropriate client.  Load balancers are effective at:

* Preventing requests from going to unhealthy servers
* Preventing overloading resources
* Helping to eliminate a single point of failure

Load balancers can be implemented with hardware (expensive) or with software such as HAProxy.

Additional benefits include:

* **SSL termination** - Decrypt incoming requests and encrypt server responses so backend servers do not have to perform these potentially expensive operations
  * Removes the need to install [X.509 certificates](https://en.wikipedia.org/wiki/X.509) on each server
* **Session persistence** - Issue cookies and route a specific client's requests to same instance if the web apps do not keep track of sessions

To protect against failures, it's common to set up multiple load balancers, either in [active-passive](#active-passive) or [active-active](#active-active) mode.

Load balancers can route traffic based on various metrics, including:

* Random
* Least loaded
* Session/cookies
* [Round robin or weighted round robin](https://www.g33kinfo.com/info/round-robin-vs-weighted-round-robin-lb)
* [Layer 4](#layer-4-load-balancing)
* [Layer 7](#layer-7-load-balancing)

### Layer 4 load balancing
Layer 4 load balancers look at info at the [transport layer](#communication) to decide how to distribute requests.  Generally, this involves the source, destination IP addresses, and ports in the header, but not the contents of the packet.  Layer 4 load balancers forward network packets to and from the upstream server, performing [Network Address Translation (NAT)](https://www.nginx.com/resources/glossary/layer-4-load-balancing/).

### Layer 7 load balancing
Layer 7 load balancers look at the [application layer](#communication) to decide how to distribute requests.  This can involve contents of the header, message, and cookies.  Layer 7 load balancers terminate network traffic, reads the message, makes a load-balancing decision, then opens a connection to the selected server.  For example, a layer 7 load balancer can direct video traffic to servers that host videos while directing more sensitive user billing traffic to security-hardened servers.

At the cost of flexibility, layer 4 load balancing requires less time and computing resources than Layer 7, although the performance impact can be minimal on modern commodity hardware.

### Horizontal scaling
Load balancers can also help with horizontal scaling, improving performance and availability.  Scaling out using commodity machines is more cost efficient and results in higher availability than scaling up a single server on more expensive hardware, called **Vertical Scaling**.  It is also easier to hire for talent working on commodity hardware than it is for specialized enterprise systems.

#### Disadvantage(s): horizontal scaling
* Scaling horizontally introduces complexity and involves cloning servers
  * Servers should be stateless: they should not contain any user-related data like sessions or profile pictures
  * Sessions can be stored in a centralized data store such as a [database](#database) (SQL, NoSQL) or a persistent [cache](#cache) (Redis, Memcached)
* Downstream servers such as caches and databases need to handle more simultaneous connections as upstream servers scale out

### Disadvantage(s): load balancer
* The load balancer can become a performance bottleneck if it does not have enough resources or if it is not configured properly.
* Introducing a load balancer to help eliminate a single point of failure results in increased complexity.
* A single load balancer is a single point of failure, configuring multiple load balancers further increases complexity.

## Reverse Proxy
<p align="center">
  <img src="../_assets/systems/reverse-proxy-1.png">
  <br/>
  <i><a href=https://upload.wikimedia.org/wikipedia/commons/6/67/Reverse_proxy_h2g2bob.svg>Source: Wikipedia</a></i>
  <br/>
</p>

A `Reverse Proxy` (note, I hate this name) _balances_ the load and spreads it across servers (in a horizontal setup). Goal is to split the requests to all the servers evenly. This can be done with a "Round Robin" approach (each request goes to a different server) or to use a hashing algorithm to determine which server the request will be relayed to. 

If servers are in different locations across the world (or even just timezones) the `Load Balancer`(s) can direct traffic to nearest geographical server [cluster]. 

A reverse proxy is a web server that centralizes internal services and provides unified interfaces to the public.  Requests from clients are forwarded to a server that can fulfill it before the reverse proxy returns the server's response to the client.

Additional benefits include:

* **Increased security** - Hide information about backend servers, blacklist IPs, limit number of connections per client
* **Increased scalability and flexibility** - Clients only see the reverse proxy's IP, allowing you to scale servers or change their configuration
* **SSL termination** - Decrypt incoming requests and encrypt server responses so backend servers do not have to perform these potentially expensive operations
    * Removes the need to install [X.509 certificates](https://en.wikipedia.org/wiki/X.509) on each server
* **Compression** - Compress server responses
* **Caching** - Return the response for cached requests
* **Static content** - Serve static content directly
    * HTML/CSS/JS
    * Photos
    * Videos
    * Etc

### Load balancer vs reverse proxy
* Deploying a load balancer is useful when you have multiple servers.  Often, load balancers  route traffic to a set of servers serving the same function.
* Reverse proxies can be useful even with just one web server or application server, opening up the benefits described in the previous section.
* Solutions such as NGINX and HAProxy can support both layer 7 reverse proxying and load balancing.

### Disadvantage(s): reverse proxy
* Introducing a reverse proxy results in increased complexity.
* A single reverse proxy is a single point of failure, configuring multiple reverse proxies (ie a [failover](https://en.wikipedia.org/wiki/Failover)) further increases complexity.

## Consistent Hashing
<p align="center">
  <img src="../_assets/systems/_consistent-hashing.png">
</p>

Consistent Hashing is a way to consistently route a request to the same server every time. Consistent Hashing does not guarantee that load will be "balanced" if you're employing a weak algoritm (re: unbalanced binary tree) but if each server can cache an IP's request then the benefit is easy to recognize. That requester that is always going to the same server will recieve their response quickly as it's pulling from the cache instead of running the function each time. This could be more difficult to achieve w/o consistent hashing.

Simplistic algorithms will create more problems than they're worth (using server count/`%` for instance). If a server goes down then the hashing algo will change and now the request are going to different servers entirely.

## Citations & Footnotes
* [Reverse proxy vs load balancer](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)
* [NGINX architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy architecture guide](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [Wikipedia](https://en.wikipedia.org/wiki/Reverse_proxy)
* [NGINX architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [HAProxy architecture guide](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [Scalability](http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
* [Wikipedia](https://en.wikipedia.org/wiki/Load_balancing_(computing))
* [Layer 4 load balancing](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)
* [Layer 7 load balancing](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)
* [ELB listener config](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html)

[^load-balancer]: [Source: Scalable system design patterns](http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html)

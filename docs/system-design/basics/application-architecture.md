# Application Architecture
- [Application Architecture](#application-architecture)
  - [Horizontal Scaling](#horizontal-scaling)
  - [Other Prerequsites](#other-prerequsites)
    - [Main bits of an architecture](#main-bits-of-an-architecture)

I'm going to breeze through this section because if you've worked in a professional setting for at least 6 months you'll know most of this already just from experience.

If the basic building blocks of a computer are used in tandem to create a machine that allows someone to use applications for various purposes like watching/listening to media on a streaming provider's platform, using a chat app or any of the multitudes of networked applications then application architecture is the composition of many of these computers in some configuration. 

One example is beefing up a computer's components. For instance adding a bigger CPU, a beefier graphics card or more and specialized RAM. Anotrher common (for applications that will serve many users) example of this is `Horizontal Scaling` of systems. This allows for better/easier scaling. Essentially computer replicas that work together. Both approaches can also be used. Building really beefy machines and replicating them. There is sort of the benefit of both but this is something costly to maintain and difficult to scale.

![Web Application Architecture](./_web-arch.png)
[^app-arch] - Image Attribution

## Horizontal Scaling
![Horizontal Scaling Diagram](./_horiz-scale.png)
[^horscale] - Image Attribution

## Other Prerequsites
These prerequsites are what help us determine if our design is a good one or if there are tweaks that need to be made.

| Prerequsites    | What/Why                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Fault Tolerance | Can a server go down and the app still stay up? This is usually handled by redundancy.                                                           |
| Redundancy      | Scaling. It's good to have redundancy so there is leeway of failure without the entire system falling into chaos.                                |
| Reliability     | What is the expectation that the whole or part of the system will fail? ex: Can `DDOS` won't bring the system down.                              |
| Availability    | The uptime. Shoot for 99.9999%. Seriously. [SLO/SLA/SLI](https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli).                  |
| Throughput      | How much data can be requested and responded by users of the system.                                                                             |
| Latency         | How long it takes to respond to a request. Slow operations, slow network, poorly designed databases etc all affect the latency of an application |

### Main bits of an architecture
- Logging Service
- Metrics Service
- Horizontal Scaling
- Database (`SQL`, `NoSQL`, `Graph`)
- CI/CD
- Repo (usually `Git`, at least for now)
- API Gateway
- Load Balancer
- Alerting

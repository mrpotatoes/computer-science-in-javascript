# How to approach a system design interview question
> How to tackle a system design interview question.

The system design interview is an **open-ended conversation**. You are expected to lead it. You can use the following steps to guide the discussion

- [Step 1: Outline use cases, constraints, and assumptions](#step-1-outline-use-cases-constraints-and-assumptions)
- [Step 2: Create a high level design](#step-2-create-a-high-level-design)
- [Step 3: Design core components](#step-3-design-core-components)
- [Step 4: Scale the design](#step-4-scale-the-design)
- [Citations \& Footnotes](#citations--footnotes)

## Step 1: Outline use cases, constraints, and assumptions
Gather requirements and scope the problem.  Ask questions to clarify use cases and constraints. Discuss assumptions.

- Who is going to use it?
- How are they going to use it?
- How many users are there?
- What does the system do?
- What are the inputs and outputs of the system?
- How much data do we expect to handle?
- How many requests per second do we expect?
- What is the expected read to write ratio?

## Step 2: Create a high level design
Outline a high level design with all important components.

- Sketch the main components and connections
- Justify your ideas

## Step 3: Design core components
- Generating and storing a hash of the full url
  - [MD5](../architectures/url-shortener.md) and [Base62](../architectures/url-shortener.md)
  - Hash collisions
  - SQL or NoSQL
  - Database schema
- Translating a hashed url to the full url
  - Database lookup
- API and object-oriented design

## Step 4: Scale the design
Identify and address bottlenecks, given the constraints. For example, do you need the following to address scalability issues?

- Load balancer
- Horizontal scaling
- Caching
- Database sharding

Discuss potential solutions and trade-offs. Everything is a trade-off. Address bottlenecks using principles of scalable system design.

## Citations & Footnotes
* [How to ace a systems design interview](https://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)
* [The system design interview](http://www.hiredintech.com/system-design)
* [Intro to Architecture and Systems Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70)
* [System design template](https://leetcode.com/discuss/career/229177/My-System-Design-Template)

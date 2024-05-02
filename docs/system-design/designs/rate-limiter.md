# Rate Limiter
- Amount of retries 
  - e.g. Password Retries
- Limit amount of content because files can be very large
  - e.g. YouTube can limit 20 videos / day
  - e.g. Limit amount of comments / day

## Features
1. If limit reached
    - Do not fullfill request
    - Notify user
      - Return an HTTP error (400 => 429)
      - Mention timelimit
1. Client side
   - No since
     - They can bypass by with an API call
     - Modify the client code to allow for it
1. How to identify users
   - 
1. Storage
2. Throughput
3. Latency
4. Rules
5. \# of users
   - 132b * 1B => 132GB data
      - 32B can fit in memory
6. Availability
    - Fail Open
      - Can continue to use app for other features
        - e.g. Viewing videos
        - e.g. Viewing comments
    - Fail Closed
      - Take down entire system which isn't good for a Rate Limiter

## Functional Requirements / High level design
- Limiter is basically a reverse proxy
- Rules
  - Persistent
  - Primarily reading
- How to track requests
  - An in-memory key value store
    - Doing many reads & writes
      - Want to be as fast as possible
      - Options: `Redis` or `Memcache`
- APIs
  - Once passed limiter 
- Designed for backend API?
- How many services to be limited

## System
- 

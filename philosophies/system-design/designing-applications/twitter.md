# Designing Twitter

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
- https://github.com/donnemartin/system-design-primer/

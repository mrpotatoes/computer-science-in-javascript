# Back of envelope calculations

## Overview
Absolute accuracy isn't important. Getting "close enough" is fine.

## Common Inputs
- Monthly Active Users (MAU)
- Daily Active Users (DAU)
  - Usage per DAU
    - e.g. Twitter
      - 300M active users
      - 10 - 25% create tweets
  - Scaling factor
    - Useage rate over the day
    - e.g. Google Maps
      - Peak usage -> 5x average
    - e.g. Uber
      - Peak usage -> 2x average

## Examples
### Twitter
- 300M MAU
  - 50% MAU use daily -> 150M DAU
- 25% tweeting
  - 0.5 tweets / DAU
- Scaling factor
  - 2x average in morning
- (150M DAU) * (0.5 tweets per DAU) * (2x Scale) / (86400s / day)
  - 1500 tweets / second
- Convert to Scientic Notation
  - 150M DAU
    - 150 * 10^6 = 1.5 x 10^8
  - 0.5 tweets per DAU
  - 2x Scale
  - 86400s / day
    - Round up to 100,000 seconds
      - 10^5
- Math it up!
  - Group 10s together
    - 1.5 X .5 * 2 * 10^6
      - 10^3 = 10^8 * 10^5 => 10^(8-5)
    - 1.5 * 10^3 => 1500 tweets created / second

### Data storage of tweets


<!-- ### Example 1
- Web service
  - 10^6 requests / seconds
- Server
  - 10^4 requests / seconds
- Load balancer
  - 10^6 queries / second
  - 100 servers

### Example 2
- 10 queries / second
- Single database server
  - No need for sharding -->




## Links
### Byte Calculator
I refuse to remember the formula to convert bytes. It's a dumb thing to memorize. Besides it's not like we live in a world bereft of [tools](https://calcuworld.com/business-calculators/bytes-calculator/) (online or otherise) that exist for free that can handle these conversions. It is simply not useful to keep this in my brain just for doing these calculations for `Back of envelope calculations`. 

### Articles & videos
- [Bytes Calculator | Byte Converter | Bit Converter](https://calcuworld.com/business-calculators/bytes-calculator/)
- [Understanding Latency versus Throughput](https://community.cadence.com/cadence_blogs_8/b/fv/posts/understanding-latency-vs-throughput)
- [Back-of-the-envelope](https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation)
- [Back-Of-The-Envelope / Capacity Planning - YouTube](https://www.youtube.com/watch?v=UC5xf8FbdJc)

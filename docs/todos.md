# Todos
## Engineer Exercises
> [`Note`]: I will check each of these later to see what I want to do or want to remove i.e. `./src/javascript/*`

- [ ] `./src/algorithms`
- [ ] `./src/bit-shifting`
- [ ] `./src/compilers`
- [ ] `./src/cryptography`
- [ ] `./src/data-structures`
- [ ] `./src/dependency-injection`
- [ ] `./src/javascript`
  - I have the cheatsheets website. This is probably redundant.
- [ ] `./src/math`
- [ ] `./src/operating-systems`
- [ ] `./src/recursion`
- [ ] `./src/regex`
- [ ] `./src/streams`

## Coding Exercises
- [ ] [General](./interview-questions/README.md#general)
- [ ] [Amazon](./interview-questions/README.md#amazon)
- [ ] [Google](./interview-questions/README.md#google)

### System Design
> Do these in the suggested order below

#### Basics/Core
- [ ] House Cleaning
  - [ ] Break up documents into smaller chuncks
  - [ ] Clean up documents
  - [ ] Link to documents correctly
- [ ] Remove [`./additional-designs.md`](system-design/basics/additional-designs.md). I will never do these, let's be real

#### Topics
- [ ] These all need to be cleaned up
- [ ] May need to merge with my older fundamentals
- [ ] Rename `./topics` to `./core-systems`
  - [ ] Make sure all links still work

#### Designs
- [ ] Take the content in [`fundamentals`](docs/system-design/basics/fundamentals.md) and figure out what to do with it
- [ ] [Back of the Envelope](docs/system-design/basics/__back-of-the-envelope.md), do something with this
- [ ] Url Shortener
- [ ] Chat App
- [ ] Collaborative Document Editing
- [ ] Cloud Storage
- [ ] Maps
- [ ] Streaming service
- [ ] Scaling AWS
- [x] ~~Social feed~~

## Diagrams
> [`Note`]: Some of the docments in System Design should have diagrams

<details>
  <summary>Click to open</summary>
  <table>
    <thead>
      <tr>
        <th><code>basics</code></th>
        <th><code>topics</code></th>
        <th><code>designs</code></th>
      </tr>
    </thead>
    <tbody>
      <tr valign="top">
        <td>
          <ul>
            <li><a href="./system-design/topics/application-layer.md">application-layer.md</a></li>
            <li><a href="./system-design/topics/asynchronism.md">asynchronism.md</a></li>
            <li><a href="./system-design/topics/availability-patterns.md">availability-patterns.md</a></li>
            <li><a href="./system-design/topics/availability-vs-consistency.md">availability-vs-consistency.md</a></li>
            <li><a href="./system-design/topics/cache.md">cache.md</a></li>
            <li><a href="./system-design/topics/communication.md">communication.md</a></li>
            <li><a href="./system-design/topics/consistency-patterns.md">consistency-patterns.md</a></li>
            <li><a href="./system-design/topics/content-delivery-network.md">content-delivery-network.md</a></li>
            <li><a href="./system-design/topics/database.md">database.md</a></li>
            <li><a href="./system-design/topics/domain-name-system.md">domain-name-system.md</a></li>
            <li><a href="./system-design/topics/fanout-service.md">fanout-service.md</a></li>
            <li><a href="./system-design/topics/latency-vs-throughput.md">latency-vs-throughput.md</a></li>
            <li><a href="./system-design/topics/load-balancer.md">load-balancer.md</a></li>
            <li><a href="./system-design/topics/performance-vs-scalability.md">performance-vs-scalability.md</a></li>
            <li><a href="./system-design/topics/reverse-proxy-web-server.md">reverse-proxy-web-server.md</a></li>
            <li><a href="./system-design/topics/security.md">security.md</a></li>
          </ul>
        </td>      
        <td>
          <ul>
            <li><a href="./system-design/basics/__back-of-the-envelope.md">__back-of-the-envelope.md</a></li>
            <li><a href="./system-design/basics/additional-designs.md">additional-designs.md</a></li>
            <li><a href="./system-design/basics/additional.md">additional.md</a></li>
            <li><a href="./system-design/basics/fundamentals.md">fundamentals.md</a></li>
            <li><a href="./system-design/basics/how-to-approach.md">how-to-approach.md</a></li>
            <li><a href="./system-design/basics/study-guide.md">study-guide.md</a></li>
          </ul>
        </td>      
        <td>
          <ul>
            <li><a href="./system-design/designs/chat-app.md">chat-app.md</a></li>
            <li><a href="./system-design/designs/cloud-storage.md">cloud-storage.md</a></li>
            <li><a href="./system-design/designs/collaborative-document-editing.md">collaborative-document-editing.md</a></li>
            <li><a href="./system-design/designs/consistent-hashing.md">consistent-hashing.md</a></li>
            <li><a href="./system-design/designs/distributed-message-queue.md">distributed-message-queue.md</a></li>
            <li><a href="./system-design/designs/infra-to-scale-to-millions.md">infra-to-scale-to-millions.md</a></li>
            <li><a href="./system-design/designs/key-value-store.md">key-value-store.md</a></li>
            <li><a href="./system-design/designs/maps.md">maps.md</a></li>
            <li><a href="./system-design/designs/proximity-service.md">proximity-service.md</a></li>
            <li><a href="./system-design/designs/rate-limiter-2.md">rate-limiter-2.md</a></li>
            <li><a href="./system-design/designs/rate-limiter.md">rate-limiter.md</a></li>
            <li><a href="./system-design/designs/scaling-aws.md">scaling-aws.md</a></li>
            <li><a href="./system-design/designs/social-feed.md">social-feed.md</a></li>
            <li><a href="./system-design/designs/streaming-service.md">streaming-service.md</a></li>
            <li><a href="./system-design/designs/typeahead.md">typeahead.md</a></li>
            <li><a href="./system-design/designs/url-shortener.md">url-shortener.md</a></li>
            <li><a href="./system-design/designs/web-crawler.md">web-crawler.md</a></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</details>

## Misc
- [ ] Delete the `babel-plugin-namespace` plugin
- [ ] Convert to `TypeScript`
  - [ ] This removes the `Babel` requirement
  - [ ] Use `Rollup.js` to make my life easier
  - [ ] `ts-node` to run `--watch` on changes
  - [ ] Path aliases to make `import`s cleaner.
- [ ] Upgrade all packages
- [ ] Run spell check on 
- [ ] All documents in `./docs`
- [ ] All code in `./src`

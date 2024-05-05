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
- [ ] Take the content in [`fundamentals`](docs/system-design/basics/fundamentals.md) and figure out what to do with it
- [ ] [Back of the Envelope](docs/system-design/basics/__back-of-the-envelope.md), do something with this
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
            <li><a href="./system-design/systems/application-layer.md">application-layer.md</a></li>
            <li><a href="./system-design/systems/asynchronism.md">asynchronism.md</a></li>
            <li><a href="./system-design/systems/availability-patterns.md">availability-patterns.md</a></li>
            <li><a href="./system-design/systems/availability-vs-consistency.md">availability-vs-consistency.md</a></li>
            <li><a href="./system-design/systems/cache.md">cache.md</a></li>
            <li><a href="./system-design/systems/communication.md">communication.md</a></li>
            <li><a href="./system-design/systems/consistency-patterns.md">consistency-patterns.md</a></li>
            <li><a href="./system-design/systems/content-delivery-network.md">content-delivery-network.md</a></li>
            <li><a href="./system-design/systems/database.md">database.md</a></li>
            <li><a href="./system-design/systems/domain-name-system.md">domain-name-system.md</a></li>
            <li><a href="./system-design/systems/fanout-service.md">fanout-service.md</a></li>
            <li><a href="./system-design/systems/latency-vs-throughput.md">latency-vs-throughput.md</a></li>
            <li><a href="./system-design/systems/load-balancer.md">load-balancer.md</a></li>
            <li><a href="./system-design/systems/performance-vs-scalability.md">performance-vs-scalability.md</a></li>
            <li><a href="./system-design/systems/reverse-proxy-web-server.md">reverse-proxy-web-server.md</a></li>
            <li><a href="./system-design/systems/security.md">security.md</a></li>
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
            <li><a href="./system-design/architectures/chat-app.md">chat-app.md</a></li>
            <li><a href="./system-design/architectures/cloud-storage.md">cloud-storage.md</a></li>
            <li><a href="./system-design/architectures/collaborative-document-editing.md">collaborative-document-editing.md</a></li>
            <li><a href="./system-design/architectures/consistent-hashing.md">consistent-hashing.md</a></li>
            <li><a href="./system-design/architectures/distributed-message-queue.md">distributed-message-queue.md</a></li>
            <li><a href="./system-design/architectures/infra-to-scale-to-millions.md">infra-to-scale-to-millions.md</a></li>
            <li><a href="./system-design/architectures/key-value-store.md">key-value-store.md</a></li>
            <li><a href="./system-design/architectures/maps.md">maps.md</a></li>
            <li><a href="./system-design/architectures/proximity-service.md">proximity-service.md</a></li>
            <li><a href="./system-design/architectures/rate-limiter-2.md">rate-limiter-2.md</a></li>
            <li><a href="./system-design/architectures/rate-limiter.md">rate-limiter.md</a></li>
            <li><a href="./system-design/architectures/scaling-aws.md">scaling-aws.md</a></li>
            <li><a href="./system-design/architectures/social-feed.md">social-feed.md</a></li>
            <li><a href="./system-design/architectures/streaming-service.md">streaming-service.md</a></li>
            <li><a href="./system-design/architectures/typeahead.md">typeahead.md</a></li>
            <li><a href="./system-design/architectures/url-shortener.md">url-shortener.md</a></li>
            <li><a href="./system-design/architectures/web-crawler.md">web-crawler.md</a></li>
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

# APIs
- [APIs](#apis)
  - [Paradigms](#paradigms)
    - [`REST`](#rest)
    - [`GraphQL`](#graphql)
    - [`gRPC`](#grpc)
  - [Design](#design)

## Paradigms
### `REST`
> Learn about the REST (Representational State Transfer) paradigm and how rest architecture streamlines communication between web components.

`REST` is a web standard for communication from machine-to-machine. The biggest benefit is that it's human readable and [many] web languages have native support. It is bulky, tho, as it is just a string that is sent over the wire and even when it's compressed it can still be a hefty response. Another drawback is `REST` APIs [can] suffer from unwieldy architecture when the API becomes large. Oftentimes you will see/work with`REST` APIs that have similar responses for different endpoints (not via `HTTP METHOD`) as it will be easier to develop a new endpoint instead of modifying the existing one as it could introduce a breaking change. Many architectures leverage some sort of versioning system to handle breaking changes for the same endpoint.

### `GraphQL`
Is another API standard for making requests from the server but is more targeted and works more like a schema. I will not go further into this one as it is a whole topic on it's own and I haven't really had a change to work with `GraphQL`. The benefit of `GraphQL` is instead of making multiple requests like `REST` one makes a single request for everything required for a request. `GraphQL` also won't "overfetch" as is comming in `REST` as, again, one only requests what is directly needed for any given request.

This can also be done with `REST` but that requires one to develop those options whereas using `GraphQL` is simpler and already built out in order to do just that.

### `gRPC`
Same as `GraphQL` I haven't used this in order to really say anything about it but NeetCode says:
> Introduced by Google `gRPC` is used, typically, in server-to-server communication. It uses Protocol Buffers which is a way to send data as binary across the wire.

## Design
I'm not going to write up an API design section since this is a very broad topic for this document so instead I'll share some links. Maybe in the future (most likely not) i'll update this or add a new document to go over the best pracices.

- [REST API Best Practices and Standards in 2023](https://hevodata.com/learn/rest-api-best-practices/)
- [REST API Best Practices – REST Endpoint Design Examples](https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/)
- [REST API Design Best Practices to Follow](https://document360.com/blog/api-design-best-practices/)
- [Best Practices for Designing a Pragmatic RESTful API | Vinay Sahni](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [Web API design best practices - Azure Architecture Center | Microsoft Learn](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)


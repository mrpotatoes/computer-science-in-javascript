# Networking
- [Networking](#networking)
  - [`TCP/IP`](#tcpip)
  - [Basic Technology](#basic-technology)
    - [`RPC`](#rpc)
    - [`HTTP`](#http)
  - [Domain Name System](#domain-name-system)
    - [Quick Tangent](#quick-tangent)
  - [Protocols](#protocols)
    - [`SSH`](#ssh)
    - [`FTP`](#ftp)
    - [`SMTP`](#smtp)
    - [`Websockets`](#websockets)

Networking is so important as the Internet could not exist without it and all our devices (smart phones, computers, tablets, refrigerators etc) are interconnected via the Internet. Networking is so important to KNOW because if we intend to build application architectures for internet enabled applications we need to understand not only that data travels over the wire but how it does so and how it's deciphered on the other end.

## `TCP/IP`
`TCP/IP` breaks down the data that will be sent over the wire and they are ordered so that they can be reassembled on the requesting machine. It's a powerful and reliable network powerful for those reasons and is why `HTTP` & `Websockets`, for instance, are built on `TCP/IP`. `TCP/IP` also does retransmission. For instance if a packet is lost then the requester can re-request that specific packet because of the packet ID. This makes it hella reliable.

Quick note on `UDP`. It is meant for speed. Used in applications like gaming, music/video streaming and calling. `TCP/IP` is great for data that needs to be in order and consistant but if you use it in something like meda streaming then it'll re-request packets and slow things down. Even worse it can make the audio sound really odd when it is getting back up to speed.

## Basic Technology
### `RPC`
`RPC` translates to Remote Procedure Call. 
> Remote Procedure Call is a software communication protocol that one program can use to request a service from a program located in another computer on a network without having to understand the network's details. RPC is used to call other processes on the remote systems like a local system. - Tech Target [^rpc]

It is a client → server model. This means that a client (your computer, a server et al) makes a request to another machine (server) in order to run a function on the server (procedure). 

### `HTTP`
The Internet protocol. As engineers and architects we primarily use `TCP/IP`. `HTTP` is an application layer that is built on top of `TCP/IP`.  `HTTP` is stateless. `HTTP` uses "METHOD"s to tell the server _what_ behavior the requester wants. 

| Common Methods[^http-methods] | Explaination                                                                                                                 |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `GET`                         | The `GET` method requests a representation of the specified resource. Requests using GET should only retrieve data.          |
| `PUT`                         | The `PUT` method replaces all current representations of the target resource with the request payload                        |
| `POST`                        | The `POST` method submits an entity to the specified resource, often causing a change in state or side effects on the server |
| `DELETE`                      | The `DELETE` method deletes the specified resource                                                                           |

Quick note on security. HTTP on it's own isn't inherently secure so the `SSL` & `TLS` protocols were introduced. It's the `s` at the end of `https://`

## Domain Name System
A `DNS` is a map of `IP`s to a domain name and is spread across the public network. Also used in your router, NAS etc to remember which machine is which when they are being requested.

### Quick Tangent
Q: Why is it important for software engineers to know the networking layers (at least `TCP/IP`)?

Answers:
1. Architecture Design: One must understandthe protocols so architectures can be designed to be performance and durable.
1. Debugging/Bug fixing: There are times, not often, where a bug will surface and it comes down to an edge case in server communication (server-to-server, server-to-client etc)
1. Websockets, REST, 
1. Setting up containers with intercommunication
1. The higher the traffic and application recieves he more important knowing the protocols will be. 

*_NOTE_*: The instances where knowing the networking layers intimately are exceedingly rare but knowing at least the bases is important. Especially for interviews as, for some ungodly reason, people like to ask about the Layers. If so make sure to ask if engineers have to use that knowledge often. I would be annoyed if I have to as I prefer to work _inc deo_ versus being low level often.

## Protocols

There are a few protocols such as `SSH`, `FTP`, `SMTP` and `Websockets`. I will go over these quickly.

### `SSH`
... TODO

### `FTP`
... TODO

### `SMTP`
... TODO

### `Websockets`
`Websockets` is a way to open two-way communication between two machines. It is possible to do this with `HTTP` and polling but polling is an inefficient method of aquiring up-to-date data from a source. For instance with `HTTP` whenver a request is made the application (browser, server) is required to make a new network request each time and if the application being developed is, for instance, a chat app like `Discord` then polling will quickly get out of hand. A better method to achieve the same results is the `Websockets` techology.

`Websockets` creates a "handshake" between the client and server which creates a persistent connection to the server. This allows for bi-direction communication. Think of it as an event pased communication between machines. One could say that `Websockets` are an outdated technology in the presense of `HTTP/2` as that new protocol added streaming.

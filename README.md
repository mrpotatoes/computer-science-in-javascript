<!-- https://stackoverflow.com/questions/11804820/how-can-i-embed-a-youtube-video-on-github-wiki-pages -->
# Computer Science in JavaScript
Who doesn't want to learn Computer Science? It's really easy but the problem is that is is hidden behind many layers of complexity and often abstract math that you may not have time to learn. That can be a problem for different types of learners especially for the self starter. For instance I can grasp concepts in no time but to cement them I need to actually do the work. So, for a reference to myself but a study guide for others I've created this repository.

I use it as both a study guide and a reference.

## What this repo is not
1. A cheat sheet
    * This is just a reference/study guide so use it accordingly.
    * Not meant to accommodate any specific language.
1. A reference guide or how-to for setups of different techs.
1. Production ready code.
    * This is for learning/referencing not to reuse professionally.

## How to use for self learning
You can, instead, use any of the scripts within the `scripts` folder to do this. Click on there and `README` the instructions within there (if these subheaders aren't links I haven't done that yet). 

If you take any of the code paths then you need to have tests included with the code. You don't learn by just reading articles and having code run with tests that you put in `main()`. It must have tests and those tests must cover all the required hot code paths.

* [If you want to just read the articles](https://github.com/mrpotatoes/computer-science-in-javascript/tree/master/scripts#if-you-want-to-just-read-the-articles)
* [If this is a refresher but want the code](https://github.com/mrpotatoes/computer-science-in-javascript/tree/master/scripts#if-this-is-a-refresher-but-want-the-code)
* [If you want to write the code yourself (in JS)](https://github.com/mrpotatoes/computer-science-in-javascript/tree/master/scripts#if-you-want-to-write-the-code-yourself-in-js)
* [If you want to write the code yourself (!in JS)](https://github.com/mrpotatoes/computer-science-in-javascript/tree/master/scripts#if-you-want-to-write-the-code-yourself-in-js-1)

## Credits
Not all of this code is my own. In those cases I will note it within the code and any `README` files referencing said code. Like I said this is just a repo for me to learn, re-learn, or to setup as a reference for myself.

# Table of Contents (`./`)
- Documentation
- Scripts
- Formatting
- Philosophy
- Articles/Blog/Thoughts

# Table of Contents (`./src/`)
This repository is my personal reference and refresher course for computer science. Under the `./src/` directory I have a few different topics and they are all done in JavaScript. More to come eventually when they hit my fancy.

- Bit Shifting
  - Hexadecimal to Decimal
  - RGB to Hex
- Compilers
- Containers
- Cryptography
- Data Structures
  - Array
  - Binary Search Tree
  - Graph
  - Hash Table
  - Doubly Linked List
  - Singly linked List
  - Queue
  - Set
  - Stack
  - Tree
  - Trie
- Design (Software?)
  - Microservices
  - REST
  - HyperMedia
  - DDD
  - CQRS
  - Event Sourcing
  - Microservices
  - Code APIs (naming, organization et al)
- Design Patterns
  - Anti Patterns
  - Functions
  - OOP
  - React
- Functional Programming
  - Algebra
  - Composition
  - Currying
  - First Class Functions
  - Higher Order Functions
  - Immutability
  - Lazy Evaluation
  - Libraries
    - Ramda
  - Pure Functions
- Interview Questions
  - Could easily be it's own repo.
  - Strings
- JavaScript
  - Objects
  - Promises & Async Await
  - Prototypes
  - This
  - Tricks n' bullshit
- Math
- Operating Systems
- Recursion
  - Array
  - Iterable
  - Math
  - String
  - Tail
  - Towers of Hanoi
- Regex
  - General String
  - Internet Shenanigans
  - Misc
  - Numbers & Dates
  - Personal Info
- Sorting
  - Binary
  - Bubble
  - Bucket
  - Cocktail
  - Heap
  - Insertion
  - Merge
  - Pigenhole
  - Quick Sort
  - Radix
  - Selection
  - Shell
- Streams
  - Stream-handbook

### A good way to compare all of them

Unlike the data structures all sorting algorithms have the same goal and they can all take the same input data. So, for every sorting algorithms of the series, we are going sort an `array` of 10 numbers from 1 to 10. This is important for the fixtures as they are all will sort the same array and get the same results.

By doing so we will be able to compare the different sorting algorithms more easily. Sorting algorithms are very sensitive to the input data so we will also try different input data to see how they affect the performances.

# Notes
1. Currently all documentation is in `./docs/` but this isn't ideal. I will move this to each topic instead.
1. Project assumes you have `node` and `npm/yarn` installed. If not go ahead and do that now.
1. I'm using: [Babel Namespace Plugin](https://github.com/yudhasetiawan/babel-plugin-namespace)
    * This is important so I don't need to keep typing `../../`. It isn't 1980 anymore.

# TODO (Temp section)
* Make branches for all the topics.
* Directory for code formatting and reasons.
* https://github.com/jwasham/coding-interview-university

https://able.bio/drenther/javascript-design-patterns--89mv2af

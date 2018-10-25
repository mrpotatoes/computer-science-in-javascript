# [Singly Linked Lists](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_linear_lists_vs._other_lists)
> In computer science, a linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Each pointing to the next node by means of a pointer. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing efficient insertion or removal from arbitrary element references.

Linked lists will be familiar. Stored data in a series. First node points to the next and so on and so forth until there is no more data. The different between a linked list and an array is that nodes aren't stored contiguously. Meaning that any given node can be anywhere in memory. It does manage links between each node, though, so we don't lose any data and can loop through the array.

So, since they're so similar then why would we use one or the other? Generally you'd choose an array but there are advantages over using an array.

## Advantages
1. Dynamic size.

## Drawbacks
1. Cannot randomly access a node; elements need be searched starting from first to found (or last).
1. Extra memory space for a pointer is required with each element of the list.
1. Searching is slow for large lists `Θ(n)`.

------------------------------------------------------------------------------------------------

## Topic Diagram
![placeholder](https://raw.githubusercontent.com/mrpotatoes/computer-science-in-javascript/master/src/data-structures/linked-list-singly/reference-image.png)

# Exercises
Write a class or set of functions to create and manage a singly linked list.

## Required functionality:
Requires a node object.
```
Node {
  data
  next
}
```

Requires these methods:
* Write a function to add data to the end of the linked list: `const add = (data)`
* Write a function to remove specific data from the linked list: `const remove = (data)`
* Write a function to traverse the linked list: `const traverse = (fn)`
* Write a function to return the length of the list: `const length = ()`
* Write a function to print the list: `const print = ()`
* Finally write a function to insert data after a specific node[data]: `const insertAfter = (data, toNodeData)`

## Test your code (Unit tests)
* `Get the length() of the linked list.`
* `add(1...5) to the list`
* `remove() with no arguments should throw an error`
* `add(1...5) then repeatedly remove() front until empty`
* `add(1...5) then repeatedly remove() rear until empty`
* `add(1...5) then repeatedly remove() middle until empty`
* `add(1) and insertAfter() 3 times`
* `add(1...2) and insertAfter() the tail`
* `add(1...5) and apply a callback via the traverse() method`

## Example(s)
All examples will use integers as data.

### Adding 1, 2, 3 nodes
Add node when list doesn't exist.
```
Add: 10
Step 1) null
Step 2) [HEAD: 10]
Step 3) [HEAD: 10] -> [TAIL: null]
```

Adding when there is at least a head
```
Add: 20
[HEAD: 10] -> [20] -> [TAIL: null]
```

Adding when there is a head and at least (1, 2, 3?) nodes.
```
Add: 40
[HEAD: 10] -> [20] -> [30] -> [40] -> [TAIL: null]
```

Removing a node & inserting a node to an arbitrary location within the chain (basically the same)
![](https://raw.githubusercontent.com/mrpotatoes/computer-science-in-javascript/master/src/data-structures/linked-list-singly/reference.insert-after.png)

___
# Bibliography
[1] [Singly Linked Lists](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_linear_lists_vs._other_lists) - Wikipedia, September 2001<br />
[2] [Linked List | Set 1 (Introduction)
](http://www.geeksforgeeks.org/linked-list-set-1-introduction/) - Geeksforgeeks.org, March 8th, 2013<br />

# Resources
[Linked List Data Structure](http://www.geeksforgeeks.org/data-structures/linked-list/) - Geeksforgeeks.org<br />
[Introduction to linked list](https://www.youtube.com/watch?v=NobHlGUjV3g) - mycodeschool, Mar 28, 2013 <br />
[Single Linked List Operations](https://www.youtube.com/watch?v=o1QaGUEi6ew) - Naresh i Technologies, Sep 26, 2016 <br />

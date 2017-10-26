# [Heading](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_linear_lists_vs._other_lists)
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

## Topic Diagram ([From Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort))
![placeholder](https://raw.githubusercontent.com/mrpotatoes/computer-science-in-javascript/master/src/data-structures/linked-list-singly/reference-image.png)

# How it works

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
![](./insert-after.png)

Removing a node
```
```

Inserting a node to an arbitrary location within the chain.
```
```

___
# Bibliography
[1] [Bubble Sort](http://www.geeksforgeeks.org/bubble-sort/) - GeeksforGeeks, Feb 2014<br />
[2] [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort) - Kragen, October 29, 2001<br />

# Resources
...

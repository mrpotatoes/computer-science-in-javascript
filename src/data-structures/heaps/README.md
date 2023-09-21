# Heaps & Priority Queues
![](https://miro.medium.com/v2/resize:fit:750/format:webp/1*XSchy2OiWWwlkPNhhoKVBg.png)

## What
> A heap is a tree-like data structure where each node must be ordered with respect to the value of its children. This ordering must persist throughout the entire heap. Put simply, a parent node’s value must always be greater (or less) than its children’s values. There are two types of heap: max heap and min heap. As you may have guessed, in a max heap, parent node values are greater than those of their children, whereas the opposite is true in a min heap - Mike Peritz

In this implimentation we'll work with a `Binary Heap` where every level of the tree must be complete i.e. no missing nodes. The only exception is the last level which may be incomplete. Secondly I must mention that there are 2 types of heaps that we care about here.
1. `Min Heap` - The smallest value at the root
1. `Max Heap` - Largest value at the root.

Interestingly this means that removing may be tricky but every algo is fun no? We'll figure it out.

## Why, When & What uses a `heap` implimentation
> A priority queue is a set of data where higher or lower valued data points bubble to the front of the queue and are therefore accessed first. - Mike Peritz

## Properties
| Property | Definition |
|---|---|
| `Structure`  | Must be a "complete binary tree" where all levels are completely filled except the lowest level  |
| `Order`  | Depending on which algo is used (`min`/`max`) all nodes in the tree must be in the specified order|

[`Note`]: Whenever a node is removed the heap must maintain not only the structure but also the order.

## Formulas & Algorithm
### Forumlas
Since the `Heap` is represented as an array there we need a formula [3 formulas to be specific] to search for nodes. These formulas work on both `min`and `max`.

| Node | Formula |
|---|---|
| `Left Child`  | `2 * i` |
| `Right Child`  | `2 * i + 1` |
| `Parent`  | `i / 2` |

### `push()`
![](https://cdn.hashnode.com/res/hashnode/image/upload/v1635756963290/eWlfgF5JG.png)

[`Note`]: nothing is inserted at index 0. It makes the above formulas easier.

## `pop()`
The `pop()` function removes the root node (`heap[1]`) from the `heap` and for either `min` or `max` heaps we'll need to reorganize the `priority queue` (array)

The general process of the `pop()` function is thus
1. Swap the root node with last node (first item with last item in the array)
1. Remove the root node by popping the last item out of the array
1. Compare the new root node's `key` with it's children:
    - If `key` is less than both of it's children `key`s then `heap` is stable
    - Else, swap the `key` with the smaller child `key`
1. Repeat step 3 until last child is reached or the `heap` property is established.

[`Personal Note`]: I don't like the name `pop` as it conflicts with the `Array.prototype.pop()` definition. Something like `slice()` or `head()` would be better. Not that this matters right now.

## Exercises
Reading the code helps but I think it's important to, at the very minimum, to draw out your own diagrams for an array that you make up.

1. Rewrite the `push()` function to be immutable.
1. Draw a diagram of how the process to insert items but all values are already in order. i.e. `[1, 2, 3, 4, ...]`
1. Draw a diagram of how the process to insert items but the values are out of order. i.e. `[99, 4, 19, 12, 1, 0, 1, ...]`
1. Write a function to render the graph. Does not need to be fancy. i.e. fig 1 & 2

[`Fig 1`] Easy difficulty
```
3
7 19
13 42 23 21
33
```

[`Fig 2`] Medium difficulty
```
              3
         7        19
      13  42    23  21
    33
``` 

---
## References

- [Implementing a Complete Binary Heap in JavaScript: The Priority Queue, Mike Peritz, Jun 5, 2017](https://codeburst.io/implementing-a-complete-binary-heap-in-javascript-the-priority-queue-7d85bd256ecf)
- [Heaps in JavaScript, Ahish Kumar, Noc 1, 2021](https://stackfull.dev/heaps-in-javascript)

- https://stackoverflow.com/questions/749199/when-would-i-want-to-use-a-heap
- https://medium.com/swlh/data-structures-heaps-b039868a521b
- https://www.youtube.com/watch?v=ndGFKqf-CRc
- https://softwareengineering.stackexchange.com/questions/113289/why-do-we-need-a-heap-if-everything-can-be-done-much-more-efficiently-on-the-sta
- https://www.mimuw.edu.pl/~erykk/algovis/heapsort.html

# [Binary Search Assignment](https://en.wikipedia.org/wiki/Binary_search_algorithm)

![Sorting](./binary-and-linear-search-animations.gif)<br />

## Search Array
In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. If the search ends with the remaining half being empty, the target is not in the array.

Binary search runs in at worst logarithmic time, making `O(log n)` comparisons, where n is the number of elements in the array, the O is Big O notation, and log is the logarithm. Binary search takes constant (`O(1)`) space, meaning that the space taken by the algorithm is the same for any number of elements in the array. Although specialized data structures designed for fast searching—such as hash tables can be searched more efficientl. Binary search applies to a wider range of problems.

Although the idea is simple, implementing binary search correctly requires attention to some subtleties about its exit conditions and midpoint calculation.

There are numerous variations of binary search. In particular, fractional cascading speeds up binary searches for the same value in multiple arrays, efficiently solving a series of search problems in computational geometry and numerous other fields. Exponential search extends binary search to unbounded lists. The `binary search tree` and `B-tree` data structures are based on binary search.

### Code
The function is very straight forward and it's right in the code in the [`./binary.js`](./binary.js) file.

## Search Range
Honestly? The code is basically the same so just give [`./binary.js`](./binary.js) a look.

---
Original Source: https://blog.penjee.com/binary-vs-linear-search-animated-gifs/

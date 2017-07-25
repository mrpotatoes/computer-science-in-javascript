# [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

## Diagram ([From Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort))
![Bubble Sort](./Bubblesort-edited-color.png)

# Exercises
* Write the binary search.
* Test your code (Unit tests)
    * [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
    * [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -10]
    * [1, -10]
    * [10]
* Make sure to draw a multi-step diagram of how the method works.

## Example
First Pass
```
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
```

Second Pass
```
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
```
Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

Third Pass
```
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
```

Source: http://www.geeksforgeeks.org/bubble-sort/

# [Heading](wiki-link)
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

## Topic Diagram ([From Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort))
![placeholder](./logo-placeholder.png)

# How it works
The following is an example for bubble sort.

A traditional bubble sort.
1. You compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.
2. And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.
3. we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.
4. Look at the inner loop in the code below.
5. We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.
6. and then we move backward inside the outer loop.

# Exercises
* Write the binary search.
    * Do not forget to add your comment headers.
* Test your code (Unit tests)
    * [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
    * [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -10]
    * [1, -10]
    * [10]
* Make sure to draw a multi-step diagram of how the method works.

## Example(s)
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
___
# Bibliography
[1] [Bubble Sort](http://www.geeksforgeeks.org/bubble-sort/) - GeeksforGeeks, Feb 2014<br />
[2] [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort) - Kragen, October 29, 2001<br />

# Resources
...

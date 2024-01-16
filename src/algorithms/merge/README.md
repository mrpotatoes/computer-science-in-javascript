# [Merge Sort Assignment](http://www.geeksforgeeks.org/merge-sort/)
Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The `merge(arr, l, m, r)` is key process that assumes that `arr[l..m]` and `arr[m+1..r]` are sorted and merges the two sorted sub-arrays into one.

## Topic Diagram ([From Wikipedia](https://en.wikipedia.org/wiki/Merge_sort))
![placeholder](./merge-sort.png)

# How it works
| Description |  Complexity |
|---|:--------:|
| Worst-case performance | `O(n log n)` |
| Best-case performance | `O(n log n)` typical <br /> `O(n)` natural variant |
| Average performance | `O(n log n)` |
| Worst-case space complexity | `О(n)` total, `O(n)` auxiliary |

```
MergeSort(arr[], l,  r)
If r > l
   1. Find the middle point to divide the array into two halves:  
       middle m = (l+r)/2
   2. Call mergeSort for first half:   
       Call mergeSort(arr, l, m)
   3. Call mergeSort for second half:
       Call mergeSort(arr, m+1, r)
   4. Merge the two halves sorted in step 2 and 3:
       Call merge(arr, l, m, r)
```

## Algorithm
```
// Sort an arr[] of size n
insertionSort(arr, n)
Loop from i = 1 to n-1.
...a) Pick element arr[i] and insert it into sorted sequence arr[0…i-1]
```

# Exercises
* Write the merge search.
    * Do not forget to add your comment headers.
* Test your code (Unit tests)
    * [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
    * [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -10]
    * [1, -10]
    * [10]
* Make sure to draw a multi-step diagram of how the method works.

## Example(s)
*12*, 11, 13, 5, 6

Let us loop for i = 1 (second element of the array) to 5 (Size of input array)

i = 1. Since 11 is smaller than 12, move 12 and insert 11 before 12
*11*, *12*, 13, 5, 6

i = 2. 13 will remain at its position as all elements in A[0..I-1] are smaller than 13
*11*, *12*, *13*, 5, 6

i = 3. 5 will move to the beginning and all other elements from 11 to 13 will move one position ahead of their current position.
*5*, *11*, *12*, *13*, 6

i = 4. 6 will move to position after 5, and elements from 11 to 13 will move one position ahead of their current position.
*5*, *6*, *11*, *12*, *13*,
___
# Bibliography
[1] [Insertion Sort](http://www.geeksforgeeks.org/insertion-sort/) - GeeksforGeeks, March 2013<br />

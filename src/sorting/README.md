<p align="center">
  <img src="https://raw.githubusercontent.com/mrpotatoes/computer-science-in-javascript/master/docs/placeholder.png" alt="Awesome Cryptography">
</p>

- [Algorithms](#algorithms)
  - [Bubble Sort](#bubble-sort)
  - [Selection Sort](#selection-sort)
  - [Insertion Sort](#insertion-sort)
  - [Merge Sort](#merge-sort)
  - [Quick Sort](#quick-sort)
  - [Heap Sort](#heap-sort)
  - [Bucket Sort](#bucket-sort)
  - [Shell Sort](#shell-sort)
  - [PigeonHole Sort](#pigeonhole-sort)
  - [BinaryTree Sort](#binarytree-sort)
  - [Radix Sort](#radix-sort)
  - [Cocktail Sort](#cocktail-sort)
  - [Other Sort](#other-sort)
- [Exercises](#Exercises)
- [Resources](#resources)
  - [Blogs](#blogs)
  - [Mailing lists](#mailing-lists)
  - [Web-tools](#web-tools)
  - [Web-sites](#web-sites)
- [Contributing](#contributing)
- [License](#license)
- - -

# Algorithms
## [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. It can be practical if the input is usually in sorted order but may occasionally have some out-of-order elements nearly in position.

## Selection Sort
In computer science, selection sort is a sorting algorithm, specifically an in-place comparison sort. It has `O(n2)` time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

## Insertion Sort
This Algorithm is aboot ...

## Merge Sort
In computer science, merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output. Mergesort is a divide and conquer algorithm that was invented by John von Neumann in 1945. A detailed description and analysis of bottom-up mergesort appeared in a report by Goldstine and Neumann as early as 1948.

| Description |  Complexity |
|---|:--------:|
| Worst-case performance | `O(n log n)` |
| Best-case performance | `O(n log n)` typical <br /> `O(n)` natural variant |
| Average performance | `O(n log n)` |
| Worst-case space complexity | `О(n)` total, `O(n)` auxiliary |

## Quick Sort
Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm, serving as a systematic method for placing the elements of an array in order. Developed by Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. In efficient implementations it is not a stable sort, meaning that the relative order of equal sort items is not preserved. Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting.

Mathematical analysis of quicksort shows that, on average, the algorithm takes O(n log n) comparisons to sort n items. In the worst case, it makes `O(n2)` comparisons, though this behavior is rare.

## Heap Sort
This Algorithm is aboot ...

## Bucket Sort
Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm. It is a distribution sort, and is a cousin of radix sort in the most to least significant digit flavor. Bucket sort is a generalization of pigeonhole sort. Bucket sort can be implemented with comparisons and therefore can also be considered a comparison sort algorithm. The computational complexity estimates involve the number of buckets.

Bucket sort works as follows
* Set up an array of initially empty "buckets".
* *Scatter*: Go over the original array, putting each object in its bucket.
* Sort each non-empty bucket.
* *Gather*: Visit the buckets in order and put all elements back into the original array.

https://initjs.org/bucket-sort-in-javascript-dc040b8f0058

## Shell Sort
This Algorithm is aboot ...

## PigeonHole Sort
This Algorithm is aboot ...

## BinaryTree Sort
This Algorithm is aboot ...

## Radix Sort
This Algorithm is aboot ...

## Cocktail Sort
This Algorithm is aboot ...

## [Binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm)
In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. If the search ends with the remaining half being empty, the target is not in the array.

Binary search runs in at worst logarithmic time, making O(log n) comparisons, where n is the number of elements in the array, the O is Big O notation, and log is the logarithm. Binary search takes constant (O(1)) space, meaning that the space taken by the algorithm is the same for any number of elements in the array. Although specialized data structures designed for fast searching—such as hash tables—can be searched more efficiently, binary search applies to a wider range of problems.

Although the idea is simple, implementing binary search correctly requires attention to some subtleties about its exit conditions and midpoint calculation.

There are numerous variations of binary search. In particular, fractional cascading speeds up binary searches for the same value in multiple arrays, efficiently solving a series of search problems in computational geometry and numerous other fields. Exponential search extends binary search to unbounded lists. The binary search tree and B-tree data structures are based on binary search.

# Exercises
...

 # Resources
* [JS: Interview Questions - Sorting](https://khan4019.github.io/front-end-Interview-Questions/sort.html)
* [About the #sorting-algorithms series](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript/)
* [Friday Algorithms: JavaScript Bubble Sort( http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/)
* [Stoimen's Slgorithms](https://github.com/stoimen/algorithms)

* http://www.geeksforgeeks.org/bubble-sort/

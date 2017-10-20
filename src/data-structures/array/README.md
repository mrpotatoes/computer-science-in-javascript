# [Array Data Structure](https://www.w3schools.in/data-structures-tutorial/data-structures-arrays/)
> Array is a fixed-size sequenced collection of variables belonging to the same data types. The array has adjacent memory locations to store values. Since the array provides a convenient structure for representing data it falls under the category of the data structures in C. The syntax for declaring array are:
>
> *Element*: Each and every item stored in an array is termed as an element
>
> *Index*: each memory location of an element in an array is denoted by numerical index which is used for identifying the element
>
> — W3 Schools

## Topic Diagram ([From Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort))
![placeholder](./logo-placeholder.png)

# How it works
Explain how the algo works.

# Exercises
Write a class or set of functions to create and manage an array data structure.

## Required functionality:
* Add an item to [the end of] the array: `const add = (data)`
* Remove an item from the array: `const remove = (data)`
* Find the first instance of a match if it exists: `const search = (data)`
* Find all indexes of data: `const findAll = (data)`
* Get the value at given index: `const getAtIndex = (index)`
* Get the length of the array: `const length = ()`
* Get a string representation of the array: `const print = ()`

## Test your code (Unit tests)
  * `add(1...2) find length()`
  * `add(1...4)`
  * `add(1...4) remove() one.`
  * `add(1...4) remove(1) add(1...2) and remove(1).`
  * `add(1...5) and search() invalid`
  * `add(1...5) and findAll()`
  * `add(1...4) and getAtIndex()`

Use the following fixtures for each test scenario:
```
[]
[9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -10]
[1, -10]
[10]
```

# Explanation(s) & Example(s)
## Adding
Add 1 then 2 to `[]`
```
Add 1 -> []
Add 2 -> [1]
[1, 2]
```

## Removing
Remove 5 from `[1, 2, 3, 4, 5, 6]`
```
array = [1, 2, 3, 4, 5, 6]
array2[] = array.length - 1

WHILE array @ index !== 5
  array2.add(array @ index)
ENDFOR

```

## Searching
Find the first instance of the data passed in (as parameter).

```
FOR CURR !== array.length
  IF array[CURR] === DATA
    RETURN array[CURR]
ENDFOR
```

If you wanted all indexes (meh).
```
indexes = []
FOR CURR !== array.length
  IF array[CURR] === DATA
    indexes.push(curr)
ENDFOR
```

## Find All
```
// An ASCII example of how the data will be manipulated
```

## Get Data at Index
```
// An ASCII example of how the data will be manipulated
```

## Length
```
// An ASCII example of how the data will be manipulated
```

## Print
Get a string representation of an array.
```
// An ASCII example of how the data will be manipulated
```
___
# Bibliography
*Yes, I am doubling up Citations & Bibliography. Deal with it however you need to.* <br />
[1] [Redux From Twitter Hype to Production](http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production) - Ievgen Terpil, Feb 2016<br />
[2] [Redux Actions](http://redux.js.org/docs/basics/Actions.html) - Tim Dorr, Sep 4, 2016<br />
[3] [Redux Reducers](http://redux.js.org/docs/basics/Reducers.html) - Facebook, Sep 4, 2016

# Resources
7 Videos that teach the very basics of `redux` in a really concise manner.<br />
[Code Academy `redux` tutorials](https://www.youtube.com/playlist?list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt)

The github link to the code in the playlist<br />
[Code Academy's redux/react code](https://github.com/learncodeacademy/react-js-tutorials/tree/master/4-redux/src/js)

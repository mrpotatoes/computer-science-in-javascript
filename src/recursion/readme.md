# REGEX - Thoughts

Remember these things when writing a recursive method:
1. Base case
1. Recursive case
1. Calls execute once the last recursive call returns from it's base case.

# Exercises
## General
* Implement Ruby's `select` in JavaScript recursively.
    * `arraySelectEven(array, newArray = [])`
    * `arraySelect(array, fn, newArray = [])`
    * `arraySelect(array, fn)`
* Implement Ruby's `dropWhile` in JavaScript
    * `dropWhile(dropBefore, array)`
* Reverse a string
    * `reverseString(string)`
    * `reverseStringTernary(string)`

## Arrays
* Write a function to build a tree from a flattened array
    * `explodeFlatTree(flat)`
* Write a function to flatten an array from a tree
    * `flattenTree(tree)`

## Math
* Get the factorial of a number.
    * `factorial(num)`
* Outputs the range between two positive numbers ie: `(1, 5) => [1, 2, 3, 4, 5]`
    * `range(start, end)`
* Sum an array of integers
    * `sumArray(array)`
* Add one number recursively until there is nothing left.
    * `addition(num)`

## Iterables ... ?
Nothing yet, can't think of anything.

# Links to comb through
* [Understanding Recursion in JavaScript with Confidence](https://www.thecodingdelight.com/understanding-recursion-javascript/)
* http://www.integralist.co.uk/posts/js-recursion.html
* [JavaScript Recursion - Exercises, Practice, Solution](http://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php)
* https://medium.com/functional-javascript/recursion-282a6abbf3c5
* https://www.youtube.com/watch?v=VrrnjYgDBEk
* https://www.youtube.com/watch?v=t4MSwiqfLaY
* https://www.youtube.com/watch?v=beqqGIdabrE
* The Collatz Conjecture: https://youtu.be/VrrnjYgDBEk?t=729
* http://www.cs.utep.edu/vladik/cs2401.10a/Ch_14_Recursion.pdf
* http://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
* http://www.w3resource.com/c-programming-exercises/recursion/index.php
* https://roman01la.github.io/recursion-exercises/
* https://cscircles.cemc.uwaterloo.ca/16-recursion/
* http://www.bowdoin.edu/~ltoma/teaching/cs107/spring05/recursion.html
* http://codingbat.com/java/Recursion-1
* http://www.cse.chalmers.se/edu/year/2016/course/TDA555/ex-week2.html
* https://www.inf.unibz.it/~calvanese/teaching/04-05-ip/exercises/recursion/strings/
* http://www.geeksforgeeks.org/category/algorithm/recursion/
* https://www.hackerrank.com/domains/fp/fp-recursion
* http://www.cs.wustl.edu/~kjg/cse131/modules/recursion/lab.html
* http://anandology.com/python-practice-book/functional-programming.html

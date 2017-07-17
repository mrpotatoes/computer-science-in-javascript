/* eslint-disable max-len, no-else-return */

// the collatz conjecture
// https://youtu.be/VrrnjYgDBEk?t=729
// http://www.cs.utep.edu/vladik/cs2401.10a/Ch_14_Recursion.pdf

// http://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
// http://www.w3resource.com/c-programming-exercises/recursion/index.php
// https://roman01la.github.io/recursion-exercises/
// https://cscircles.cemc.uwaterloo.ca/16-recursion/
// http://www.bowdoin.edu/~ltoma/teaching/cs107/spring05/recursion.html
// http://codingbat.com/java/Recursion-1
// http://www.cse.chalmers.se/edu/year/2016/course/TDA555/ex-week2.html
// https://www.inf.unibz.it/~calvanese/teaching/04-05-ip/exercises/recursion/strings/
// http://www.geeksforgeeks.org/category/algorithm/recursion/
// https://www.hackerrank.com/domains/fp/fp-recursion
// http://www.cs.wustl.edu/~kjg/cse131/modules/recursion/lab.html
// http://anandology.com/python-practice-book/functional-programming.html

// Write a recursive function that outputs the range between two positive numbers
// myFunction(1, 5) #=> [1, 2, 3, 4, 5]
export const range = (array) => (
  array
)

// Write a recursive function that outputs the sum of an array of integers
// myFunction([1, 2, 3, 4, 5, 6]) #=> 21
export const sumArray = (array) => {
  if (array.length === 1) {
    return array[0]
  }

  return array.shift() + sumArray(array)
}

// Implement Ruby's `select` in JavaScript recursively.
// Example: iterating over [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and only returning even numbers.
export const arraySelect = (array) => (
  array
)

// Implement Ruby's `drop_while` in JavaScript recursively.
// Example: iterating over [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and only returning integers greater than 7.
// drop_while: http://ruby-doc.org/core-2.2.3/Enumerable.html#method-i-drop
export const dropWhile = (array) => (
  array
)

/**
 * Reverse a string.
 *
 * The substr() method returns the characters in a string beginning at the specified
 * location through the specified number of characters.
 *
 * The charAt() method returns the specified character from a string.
 *
 * So what's happening is that if we aren't at an empty string we are going to recurse
 * reverseString and pass it the a substring sans the first chracter of our current string.
 * We append the current string's character at the first character as well.
 *
 * For the world hello:
 *    recursionReverse('hello')
 *    (recursionReverse('ello') + 'h')
 *    ((recursionReverse('llo') + 'e') + 'h')
 *    (((recursionReverse('lo') + 'l') + 'e') + 'h')
 *    ((((recursionReverse('o') + 'l') + 'l' ) + 'e') + 'h')
 *    (((('o') + 'l') + 'l' ) + 'e') + 'h')
 *
 * s
 *
 * @see http://bit.ly/2v4XBZE
 * @see http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/ *
 * @param {string} string String to reverse.
 * @return {string}
 */
export const reverseString = (string) => {
  if (string.length <= 1) {
    return string
  }

  console.log(string)

  return reverseString(string.substr(1)) + string.charAt(0)
}

/**
 * Reverse a string using a simpler ternary.
 *
 * The substr() method returns the characters in a string beginning at the specified
 * location through the specified number of characters.
 *
 * The charAt() method returns the specified character from a string.
 *
 * So what's happening is that if we aren't at an empty string we are going to recurse
 * reverseString and pass it the a substring sans the first chracter of our current string.
 * We append the current string's character at the first character as well.
 *
 * For the world hello:
 *    recursionReverse('hello')
 *    (recursionReverse('ello') + 'h')
 *    ((recursionReverse('llo') + 'e') + 'h')
 *    (((recursionReverse('lo') + 'l') + 'e') + 'h')
 *    ((((recursionReverse('o') + 'l') + 'l' ) + 'e') + 'h')
 *    (((('o') + 'l') + 'l' ) + 'e') + 'h')
 *
 * @see http://bit.ly/2v4XBZE
 * @see http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/ *
 * @param {string} string String to reverse.
 * @return {string}
 */
export const reverseStringTernary = (string) => (
  (string.length <= 1)
    ? string
    : reverseStringTernary(string.substr(1)) + string.charAt(0)
)

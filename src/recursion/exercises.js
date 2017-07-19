/* eslint-disable max-len, no-else-return, no-console, no-unreachable */

/**
 * Get the evens from an array.
 *
 * Implement Ruby's `select` in JavaScript recursively.
 *
 * @note Can I do this with a return easier?
 * @example iterating over [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and only returning even numbers.
 *
 * @param {Array} array The array to get the evens out of.
 * @param {Array} [newArray=[]] An array pointer (if none provided use default)
 * @return {Array} A new array with just even numbers.
 */
export const arraySelectEven = (array, newArray = []) => {
  if (array.length === 0) {
    return 0
  }

  const first = array.shift()

  if (first % 2 === 0) {
    newArray.push(first)
  }

  // Recurse dawg.
  arraySelectEven(array, newArray)

  return newArray
}

/**
 * Get the evens from an array.
 *
 * Implement Ruby's `select` in JavaScript recursively. using user prov FN to determine
 * which integers to actually select to actually select. Is applied ONLY on one element at
 * a time. Function must return true or false.
 *
 * @note Can I do this with a return easier?
 * @example iterating over [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and only returning even numbers.
 *
 * @param {Array} array The array to get the evens out of.
 * @param {Function} fn [description]
 * @param {Array} [newArray=[]] An array pointer (if none provided use default)
 * @return {Array} A new array with just even numbers.
 */
export const arraySelect = (array, fn, newArray = []) => {
  if (array.length === 0) {
    return 0
  }

  const first = array.shift()

  // Run user proved method against element.
  if (fn(first)) {
    newArray.push(first)
  }

  // Recurse dawg.
  arraySelect(array, fn, newArray)

  return newArray
}

/**
 * Given an integer remove any items from an array that are less than it.
 *
 * This is clearly a little more complicated looking than it really is. I spearated the
 * return into multiple lines so that the complexity can be shown with greater ease.
 *
 * @note The first parameter in Array.concat() is what we return to the concat. If the first
 * element of the array is equal to or greater than the concat.
 * @note Instead of using array.shift() we use splice this way we can do it inline.
 *
 * @example iterating over [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and only returning integers
 * greater than 7.
 * @param {int} dropBefore Drop everything before.
 * @param {array} array The array to work against.
 * @return {array} The resulting array.
 */
export const dropWhile = (dropBefore, array) => {
  if (array.length === 0) {
    return []
  }

  return Array.concat(
    ((array[0] >= dropBefore) ? [array[0]] : []),
    dropWhile(dropBefore, array.splice(1, array.length))
  )
}

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
 * Another way of doing this specifically for the text 'hello' w/o using recursion.
 *     const helloReverse = () => (get_H())
 *     const get_H = () => (get_E() + 'h')
 *     const get_E = () => (get_L1() + 'e')
 *     const get_L1 = () => (get_L2() + 'l')
 *     const get_L2 = () => (get_O() + 'l')
 *     const get_O = () => ('o')
 *     helloReverse()
 *
 * What is odd is how we're doing the return in the recurisve function. This is often what
 * throws me off. We are passing in a substring for as long as we have a string left and
 * then we call ourself again. What is important here is the string.charAt(0) as this is
 * what we're using to build out the reverse string. until we reach the end. The diagram
 * above explains it best.
 *
 * @see http://bit.ly/2v4XBZE
 * @see http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/ *
 * @param {string} string String to reverse.
 * @return {string}
 */
export const reverseString = (string) => {
  if (string.length === 0) {
    return string
  }

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
 * Another way of doing this specifically for the text 'hello' w/o using recursion.
 *     const helloReverse = () => (get_H())
 *     const get_H = () => (get_E() + 'h')
 *     const get_E = () => (get_L1() + 'e')
 *     const get_L1 = () => (get_L2() + 'l')
 *     const get_L2 = () => (get_O() + 'l')
 *     const get_O = () => ('o')
 *     helloReverse()
 *
 * What is odd is how we're doing the return in the recurisve function. This is often what
 * throws me off. We are passing in a substring for as long as we have a string left and
 * then we call ourself again. What is important here is the string.charAt(0) as this is
 * what we're using to build out the reverse string. until we reach the end. The diagram
 * above explains it best.
 *
 * @see http://bit.ly/2v4XBZE
 * @see http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/ *
 * @param {string} string String to reverse.
 * @return {string}
 */
export const reverseStringTernary = (string) => (
  (string.length === 0)
    ? string
    : reverseStringTernary(string.substr(1)) + string.charAt(0)
)

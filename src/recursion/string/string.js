/* eslint-disable no-else-return */
/**
 * Reverse a string.
 *
 * The substr() method returns the characters in a string beginning at the specified
 * location through the specified number of characters.
 *
 * The charAt() method returns the specified character from a string.
 *
 * So what's happening is that if we aren't at an empty string we are going to recurse
 * reverseString and pass it the a substring sans the first chracter of our current
 * string. We append the current string's character at the first character as well.
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
 * reverseString and pass it the a substring sans the first chracter of our current
 * string. We append the current string's character at the first character as well.
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

// Reduce to concat
export const concat = (...strings) => (
  strings.reduce(
    (acc, curr) => (`${acc} ${curr}`),
    ''
  )
)

// https://davidtang.io/2019-04-11-learning-recursion-in-javascript-part-4/
export const isPalindromeLinear = (string) => {
  const middle = string.length / 2
  let yes = false

  // Single or no character strings are paleidromes for us.
  if (string.length <= 1) {
    return true
  }

  // I'm not even going to bother with odd things.
  if (string.length % 2 !== 0) {
    return false
  }

  // Simple loop
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[(string.length - 1) - i]) {
      // eslint-disable-next-line
      yes = false
      break
    } else {
      yes = true
    }

    // Sloppy, I know.
    if (i - 1 === middle) {
      break
    }
  }

  return yes
}

export const isPalindrome = (string) => {
  if (string.length <= 1) {
    return true
  }

  const [firstLetter] = string
  const lastLetter = string[string.length - 1]

  return (firstLetter === lastLetter)
    ? isPalindrome(string.substring(1, string.length - 1))
    : false
}

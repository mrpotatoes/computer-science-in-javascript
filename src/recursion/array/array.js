/* eslint-disable no-unused-vars, no-undef, arrow-body-style */

// http://oskarhane.com/create-a-nested-array-recursively-in-javascript/
// Create a nested array recursively in Javascript
//
// Take this:
// [
//     {id: 1, title: 'hello', parent: 0},
//     {id: 2, title: 'hello', parent: 0},
//     {id: 3, title: 'hello', parent: 1},
//     {id: 4, title: 'hello', parent: 3},
//     {id: 5, title: 'hello', parent: 4},
//     {id: 6, title: 'hello', parent: 4},
//     {id: 7, title: 'hello', parent: 3},
//     {id: 8, title: 'hello', parent: 2}
// ]
//
// And turn it into this:
// [
//     {id: 1, title: 'hello', parent: 0, children: [
//         {id: 3, title: 'hello', parent: 1, children: [
//             {id: 4, title: 'hello', parent: 3, children: [
//                 {id: 5, title: 'hello', parent: 4},
//                 {id: 6, title: 'hello', parent: 4}
//             ]},
//             {id: 7, title: 'hello', parent: 3}
//         ]}
//     ]},
//     {id: 2, title: 'hello', parent: 0, children: [
//         {id: 8, title: 'hello', parent: 2}
//     ]}
// ]

export const explodeFlatTree = (flat) => {
  return tree
}

export const flattenTree = (tree) => {
  return flat
}


/**
 * Get the evens from an array.
 *
 * Implement Ruby's `select` in JavaScript recursively.
 *
 * @note Can I do this with a return easier?
 * @example iterating over [1, 2, 3, 4, 5, 6, 7, 8,] and only returning even numbers.
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
 * @example iterating over [1, 2, 3, 4, 5, 6, 7, 8] and only returning even numbers.
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
 * @note The first parameter in Array.concat() is what we return to the concat. If the
 *  first element of the array is equal to or greater than the concat.
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

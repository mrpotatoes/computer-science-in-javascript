/**
 * Perform a binary search on the host array.
 *
 * @param {*} array A sorted array of numbers to search against.
 * @param {*} Target The number to search for within the array.
 * @return {Number} The index of the element which defaults to -1 when not found.
 */
export const binarySearchArray = (list, target) => {
  // Set the default low end range
  let low = 0
  // Using -1 here as arrays start at 0
  let high = list.length - 1

  // We loop as we split the array.
  while (low <= high) {
    // Determine the middle of the array. If the array is odd numbered we'll
    // use the floor() function to get an integer to search. We'll go with the
    // lower integer (1.5 → 1).
    const mid = Math.floor((low + high) / 2)

    // The guess variable is the index of the array we want to compare with the
    // target
    const guess = list[mid]

    // If guessed correctly we're done. Yay!
    if (guess === target) {
      return mid
    }

    // We compare the guess to the target. If it's higer we'll go left.
    // Otherwise we will search the right side.
    if (guess > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  // From a functional programming perspective it's better that this returns
  // "left()" monad of some sort which would be typically an Either.
  return null
}

function isCorrect(n) {
  if (n > 10) {
    return 1
  } else if (n < 10) {
    return -1
  } else {
    return 0
  }
}

/**
 * Find a number within a range if it exists
 *
 * @param {int} low
 * @param {int} high
 * @param {int} compare The function that will do the comparison
 * @returns The number within the range or null
 */
export const binarySearchRange = (low, high, compare) => {
  let mid

  while (low <= high) {
    mid = Math.floor((low + high) / 2)

    if (compare(mid) > 0) {
      high = mid - 1
    } else if (compare(mid) < 0) {
      low = mid + 1
    } else {
      return mid
    }
  }

  return null
}

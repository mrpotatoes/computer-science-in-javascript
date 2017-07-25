// Better: https://stackoverflow.com/a/29468199/7933358

/**
 * Performs a binary search on the host array. This method can either be
 * injected into Array.prototype or called with a specified scope like this:
 * binaryIndexOf.call(someArray, searchElement);
 *
 * @param {*} searchElement The item to search for within the array.
 * @return {Number} The index of the element which defaults to -1 when not found.
 */
export const binaryIndexOf = (searchElement) => {
  let minIndex = 0
  let maxIndex = this.length - 1
  let currentIndex
  let currentElement

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0
    currentElement = this[currentIndex]

    if (currentElement < searchElement) {
      minIndex = currentIndex + 1
    } else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1
    } else {
      return currentIndex
    }
  }

  return -1
}

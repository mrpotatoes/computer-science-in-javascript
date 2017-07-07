/* eslint-disable no-param-reassign, no-continue */
// http://www.stoimen.com/blog/2012/03/13/computer-algorithms-quicksort/
// http://www.stoimen.com/blog/2012/03/12/algorithm-cheatsheet-quicksort/
// http://www.stoimen.com/blog/2010/06/11/friday-algorithms-quicksort-difference-between-php-and-javascript/
// https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
// https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort

/**
 * Quicksort in a single function..
 */
export const quicksortSimple = (arr) => {
  // If array is empty ...
  if (arr.length === 0) {
    return []
  }

  const left = []
  const right = []
  const pivot = arr[0]

  // Go through each element in array and either append to the left or right of the pivot.
  //
  // Can also do this as use is a reference to whichever object you're actually using.
  // const use = (arr[i] < pivot) ? left : right
  // use.push(arr[i])
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quicksortSimple(left).concat(pivot, quicksortSimple(right))
}

/**
 * Traditional quicksort.
 *
 * @param {[type]} items [description]
 * @param {[type]} left [description]
 * @param {[type]} right [description]
 *
 * @return {[type]} [description]
 */
export const quicksort = (items, left, right) => {
  let index

  if (items.length > 1) {
    left = typeof left !== 'number' ? 0 : left
    right = typeof right !== 'number' ? items.length - 1 : right

    index = partition(items, left, right)

    if (left < index - 1) {
      quicksort(items, left, index - 1)
    }

    if (index < right) {
      quicksort(items, index, right)
    }
  }

  return items
}

export const partition = (items, left, right) => {
  const pivot = items[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }

    while (items[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }

  return i
}

export const swap = (items, firstIndex, secondIndex) => {
  const temp = items[firstIndex]
  items[firstIndex] = items[secondIndex]
  items[secondIndex] = temp
}

/* eslint-disable no-param-reassign, no-continue */
// http://www.stoimen.com/blog/2012/03/13/computer-algorithms-quicksort/
// http://www.stoimen.com/blog/2012/03/12/algorithm-cheatsheet-quicksort/
// http://www.stoimen.com/blog/2010/06/11/friday-algorithms-quicksort-difference-between-php-and-javascript/

// https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/

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
 * Quicksort using iteration.
 */
export const quicksortIterative = (arr) => {
  const stack = [arr]
  const sorted = []
  const left = []
  const right = []
  // let pivot = null

  while (stack.length) {
    const temp = stack.pop()
    const tl = temp.length

    if (tl === 1) {
      sorted.push(temp[0])
      continue
    }

    const pivot = temp[0]

    for (let i = 1; i < tl; i++) {
      if (temp[i] < pivot) {
        left.push(temp[i])
      } else {
        right.push(temp[i])
      }
    }

    left.push(pivot)

    if (right.length) {
      stack.push(right)
    }

    if (left.length) {
      stack.push(left)
    }
  }

  return stack
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

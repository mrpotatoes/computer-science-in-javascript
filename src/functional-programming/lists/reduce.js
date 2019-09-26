/* eslint-disable no-param-reassign */

const recursive = (fn, acc, [head, ...tail]) => {
  if (head === undefined) {
    return acc
  }

  return recursive(fn, fn(acc, head), tail)
}

// iterable :: ([Number], fn) -> [Number]
const iterable = (fn, acc, arr) => {
  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i])
  }

  return acc
}

export default {
  recursive,
  iterable,
}

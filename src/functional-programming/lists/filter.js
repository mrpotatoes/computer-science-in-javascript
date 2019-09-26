import reduce from './reduce'

// By using reduce.
// iterable :: ([Number], fn) -> [Number]
const filterButWithReduce = (fn, array) => {
  const rfn = (acc, item) => {
    if (!fn(item)) {
      return []
    }

    return [...acc, item]
  }

  return reduce.recursive(rfn, [], array)
}

const recursive = ([head, ...tail], fn) => {
  if (head === undefined) {
    return []
  }

  // do a custom filter here.
  if (fn(head)) {
    return [head, ...recursive(tail, fn)]
  }

  return [...recursive(tail, fn)]
}

// iterable :: ([Number], fn) -> [Number]
const iterable = (arr, fn) => {
  const newArray = []

  arr.forEach((element) => {
    if (fn(element)) {
      newArray.push(element)
    }
  })

  return newArray
}

export default {
  recursive,
  iterable,
  reduce: filterButWithReduce,
}

import reduce from './reduce'

// By using reduce.
// iterable :: ([Number], fn) -> [Number]
const mapButWithReduce = (fn, array) => {
  const rfn = (acc, item) => [...acc, fn(item)]
  return reduce.recursive(rfn, [], array)
}

// iterable :: ([Number], fn) -> [Number]
const recursive = ([head, ...tail], fn) => {
  if (head === undefined) {
    return []
  }

  return [fn(head), ...recursive(tail, fn)]
}

// iterable :: ([Number], fn) -> [Number]
const iterable = (arr, fn) => {
  const newArray = []
  arr.forEach((element) => {
    newArray.push(fn(element))
  })

  return newArray
}

export default {
  recursive,
  iterable,
  reduce: mapButWithReduce,
}

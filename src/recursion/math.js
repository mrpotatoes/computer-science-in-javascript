export const NO_END = 'Gonna need that end param dawg'
export const END_BIGGER = 'Start can\'t be bigger than end, dawg.'

/**
 * Get the factorial of a number.
 *
 * @param {integer} num The number to add
 * @return {integer}
 */
export const factorial = (num) => {
  // If we ever reach 0 then the whole thing would end up being 0.
  if (num === 0) {
    return 1
  }

  return factorial(num - 1) * num
}

/**
 * Add one number recursively until there is nothing left.
 *
 * @param {integer} num The number to add
 * @return {integer}
 */
export const addition = (num) => {
  if (num <= 0) {
    return 0
  }

  return addition(num - 1) + num
}

/**
 * Get the range between two numbers.
 *
 * Write a recursive function that outputs the range between two positive numbers
 * @example myFunction(1, 5) = [1, 2, 3, 4, 5]
 *
 * @param {[type]} start [description]
 * @param {[type]} end [description]
 * @return {[type]} [description]
 */
export const range = (start, end) => {
  rangeValidation(start, end)

  if (start === end) {
    return [end]
  }

  const next = range(start + 1, end)

  // Recursivly move foward.
  return Array.concat([start], next)
}

// To clean up the range method.
const rangeValidation = (start, end) => {
  if (end === undefined) {
    throw new Error(NO_END)
  }

  if (start > end) {
    throw new Error(END_BIGGER)
  }
}

/**
 * Sum an array of integers.
 *
 * @example sumArray([1, 2, 3, 4, 5, 6]) = 21
 *
 * For the example array: [1, 2, 3, 4, 5]
 *    sumArray([1, 2, 3, 4, 5])
 *    (1 + sumArray([2, 3, 4, 5]))
 *    (2 + (1 + sumArray([3, 4, 5])))
 *    (3 + (2 + (1 + sumArray([4, 5]))))
 *    (4 + (3 + (2 + (1 + sumArray([5])))))
 *    (5 + (4 + (3 + (2 + (1 + sumArray([]))))))
 *
 * @note It should be noted that array.shift() is before the recursive call because if not
 * we will pop the stack. We need to mutate the array BEFORE the recursive call.
 *
 * @param {int} array An array to sum
 * @return {int}
 */
export const sumArray = (array) => {
  // Or if length is 0 return 0.
  if (array.length === 1) {
    return array[0]
  }

  return array.shift() + sumArray(array)
}

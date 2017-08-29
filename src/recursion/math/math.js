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
 * Get the range between two numbers.
 *
 * This is a wrapper method to cleanup the actual getRange functionality.
 *
 * Write a recursive function that outputs the range between two positive numbers
 * @example range(1, 5) = [1, 2, 3, 4, 5]
 *
 * @param {[type]} start [description]
 * @param {[type]} end [description]
 * @return {[type]} [description]
 */
export const range = (start, end) => {
  if (end === undefined) {
    throw new Error(NO_END)
  }

  if (start > end) {
    throw new Error(END_BIGGER)
  }

  // Recursivly move foward.
  return getRange(start, end)
}

/**
 * Get the range.
 *
 * Write a recursive function that outputs the range between two positive numbers
 * @example myFunction(1, 5) = [1, 2, 3, 4, 5]
 *
 * 1. Base case is if the start number is the same as the end number then return [end].
 * 2. Recursive case is to add one to the start and call ourselves again.
 * 3. We will now concat all the return statements when we reach the base case and concat.
 *
 * @note This would have been 100x uglier if I didn't have access to Array.concat().
 * Otherwise I would need to either pass in an array object to modify to append each new
 * item in the range or to have a global array variable to use which is even worse.
 *
 * @note The following notation [start] or [end] makes a new array and fill it with the
 * value in start or end. This is important as we need to pass back an array even if a
 * single item. We allow Array.concat() do all the work of making one single array.
 *
 * @note While this wouldn't have been as easy as doing a single loop it is a little
 * cooler and a few lines shorter. Otherwise it would look like:
 *
 *    while (start <= end) {
 *      if (start === end) {
 *        rangeValues.push(end)
 *        break
 *      }
 *
 *      rangeValues.push(start)
 *      start += 1
 *    }
 *
 * @param {[type]} start [description]
 * @param {[type]} end [description]
 * @return {[type]} [description]
 */
export const getRange = (start, end) => {
  if (start === end) {
    return [end]
  }

  // Recursivly move foward.
  return Array.concat([start], getRange(start + 1, end))
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

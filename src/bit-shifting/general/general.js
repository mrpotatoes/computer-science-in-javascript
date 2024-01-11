/**
 * Convert a decimal number (int) to a binary representation
 *
 * From: Yes, I cheated → https://stackoverflow.com/a/16155417
 *
 * Note: Function could possibly be made more __elegant__ but I'm not interested
 * in converting it for an example repo ¯\_(ツ)_/¯
 *
 * @param {int} dec The decimal representation to convert
 * @param {bool} pad Pad with leading 0s filling 32 "bits"
 *
 * @returns The binary representation (as string)
 */
export const asBinary = (dec, pad = false) =>
  pad
    ? (dec >>> 0).toString(2).padStart(32, '0')
    : (dec >>> 0).toString(2)

/**
 * Count the number of 1's in a number's binary representation
 *
 * From: https://www.geeksforgeeks.org/count-set-bits-in-an-integer/
 *
 * @param {int} num The number whose bits (1's) will be counted
 *
 * @return {int} The counted 1's
 */
export const countBits = (num) => {
  let count = 0

  while (num > 0) {
    if ((num & 1) == 1) {
      count++
    }

    num = num >> 1 // same as n / 2
  }

  return count
}

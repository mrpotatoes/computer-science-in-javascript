import * as BS from './binary'

/**
 * The compare function that will be used to search the range.
 *
 * @param {int} num
 *
 * return int
 */
export const compare = (correctNum) => (guess) => {
  if (guess > correctNum) {
    return 1
  } else if (guess < correctNum) {
    return -1
  } else {
    return 0
  }
}

describe('[SORTING] Binary', () => {
  describe('binarySearchArray([...], x])', () => {
    it('target exists', () => {
      const arr = [3, 3, 5, 6, 9, 10, 34]
      expect(BS.binarySearchArray(arr, 3)).toEqual(1)
      expect(BS.binarySearchArray(arr, 10)).toEqual(5)
    })

    it('target does not exist', () => {
      const arr = [3, 3, 5, 6, 9, 10, 34]
      expect(BS.binarySearchArray(arr, -1)).toEqual(null)
    })
  })

  describe('binarySearchRange(low, high, fn])', () => {
    it('target exists', () => {
      expect(BS.binarySearchRange(1, 100, compare(10))).toEqual(10)
    })

    it('target does not exists', () => {
      expect(BS.binarySearchRange(20, 100, compare(10))).toEqual(null)
    })
  })
})

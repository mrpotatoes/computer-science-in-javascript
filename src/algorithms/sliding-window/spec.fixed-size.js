/* eslint-disable no-unused-expressions */
import { sum, maxSums, neighborDuplicates } from './fixed-size'

describe('[Data Structures] Sliding Window → Fixed size', () => {
  describe('utilities', () => {
    it('sums array', () => {
      expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9], 0).sum).toEqual(6)
      expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9], 1).sum).toEqual(9)
      expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9], 5).sum).toEqual(21)

      expect(sum([]).sum).toEqual(0)
      expect(sum([], 2).sum).toEqual(0)
      expect(sum([1, 2, 3], 2).sum).toEqual(3)
      expect(sum([1, 2, 3], 5).sum).toEqual(0)
    })

    it('throws when passing in null', () => {
      const err = "Cannot read properties of null (reading 'slice')"
      expect(() => { sum(null) }).toThrow(err)
    })
  })

  describe('maxSums', () => {
    const arrays = [
      [1, 2, 6, 2, 4, 1],
      [2, 4, 10, 10, 25, 6],
      [10, 10, 3, 1, 1, 2],
      [1, 2, 3, 4, 5, 6], // null
    ]

    it('happy path', () => {
      expect(maxSums(arrays[0]).result).toEqual(12)
      expect(maxSums(arrays[1]).result).toEqual(45)
      expect(maxSums(arrays[2]).result).toEqual(23)
    })

    it('returns null when array param is empty', () => {
      expect(maxSums([], 2)).toBeNull()
      expect(maxSums([])).toBeNull()
    })

    it('returns null because window is too large', () => {
      expect(maxSums(arrays[3], 10)).toBeNull()
      expect(maxSums([1, 2], 3)).toBeNull()
    })
  })

  describe('neighborDuplicates', () => {
    const dupes = [
      [1, 4, 3, 4, 3, 3],
      [1, 1, 2, 2, 3, 3],
      [0, 3, 0, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ]

    it('happy path', () => {
      expect(neighborDuplicates(dupes[0])).toEqual([4, 3])
      expect(neighborDuplicates(dupes[1])).toEqual([1, 2, 3])
      expect(neighborDuplicates(dupes[2])).toEqual([0])
      expect(neighborDuplicates(dupes[3])).toEqual([])
      expect(neighborDuplicates([])).toEqual([])
    })

    it('throws when bad parameters are passed in', () => {
      const err = "Cannot read properties of null (reading 'length')"
      expect(() => { neighborDuplicates(null) }).toThrow(err)
    })
  })
})

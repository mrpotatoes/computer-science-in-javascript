import { validPaths } from './depth-first'

describe('[Data Structure] Graph', () => {
  describe('Depth first search', () => {
    it('has 2 valid paths', () => {
      const matrix = [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 0],
      ]

      expect(validPaths(matrix)).toEqual(2)
    })

    it('has 6 valid paths', () => {
      const matrix = [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 0, 0],
      ]

      expect(validPaths(matrix)).toEqual(6)
    })

    it('has all valid paths in a 4x4', () => {
      const matrix = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]

      expect(validPaths(matrix)).toEqual(184)
    })

    it('has no valid paths 1', () => {
      const matrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]

      expect(validPaths(matrix)).toEqual(0)
    })

    it('has no valid paths 2', () => {
      const matrix = [
        [0, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]

      expect(validPaths(matrix)).toEqual(0)
    })
  })
})

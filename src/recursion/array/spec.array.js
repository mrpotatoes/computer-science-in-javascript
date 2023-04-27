/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { arraySelectEven, arraySelect, dropWhile } from './array'

describe('Recursion', () => {
  describe('Arrays', () => {
    it('arraySelectEven(evens) should get me even numbers', () => {
      expect(arraySelectEven([0, 1, 2, 3, 4, 5, 6])).toEqual([0, 2, 4, 6])
      expect(arraySelectEven([0, 1, 2.4, 3, 4, 5, 6])).toEqual([0, 4, 6])
      expect(arraySelectEven([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2])
    })

    it('arraySelect(evens) should get me even numbers', () => {
      const evens = (int) => (int % 2 === 0)
      expect(arraySelect([0, 1, 2, 3, 4, 5, 6], evens)).toEqual([0, 2, 4, 6])
      expect(arraySelect([0, 1, 2.4, 3, 4, 5, 6], evens)).toEqual([0, 4, 6])
      expect(arraySelect([0, 1, 2.4, 3, 4, 5, 6, 7], evens)).toEqual([0, 4, 6])
    })

    it('arraySelect(odds) should get me odd numbers', () => {
      const odds = (int) => (int % 2 === 1)
      expect(arraySelect([0, 1, 1.1, 2, 3, 4, 5, 6], odds)).toEqual([1, 3, 5])
      expect(arraySelect([0, 1, 2.4, 3, 4, 5, 6, 9], odds)).toEqual([1, 3, 5, 9])
    })

    it.skip('dropWhile({1, 3, 0, 10}, [1, 2, 3, 4, 5])', () => {
      expect(dropWhile(-1, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
      expect(dropWhile(0, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
      expect(dropWhile(1, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
      expect(dropWhile(1, [1, 2, 7, 3, 4, 5])).toEqual([1, 2, 7, 3, 4, 5])
      expect(dropWhile(3, [1, 2, 3, 4, 5])).toEqual([3, 4, 5])
      expect(dropWhile(5, [1, 2, 3, 4, 5])).toEqual([5])
      expect(dropWhile(10, [1, 2, 3, 4, 5])).toEqual([])
    })
  })
})

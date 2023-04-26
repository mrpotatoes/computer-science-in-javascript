import {
  factorial,
  addition,
  range,
  sumArray,
  NO_END,
  END_BIGGER,
} from './math'

describe('Recursion', () => {
  describe('Math', () => {
    it('sumArray([])', () => {
      expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(45)
    })

    it('factorial(1) and factorial(10)', () => {
      // Assertions.
      expect(factorial(0)).toEqual(1)
      expect(factorial(1)).toEqual(1)
      expect(factorial(10)).toEqual(3628800)

    })

    it('addition(1) and addition(10)', () => {
      // Assertions.
      expect(addition(0)).toEqual(0)
      expect(addition(1)).toEqual(1)
      expect(addition(10)).toEqual(55)

    })

    it.skip('range(1), range(10, 1), range(1, 1) should all throw errors', () => {
      // Assertions.
      expect(() => { range(1) }).to.throw(NO_END)
      expect(() => { range(10, 1) }).to.throw(END_BIGGER)
    })

    it.skip('range(1, 1), range(1, 2), range(1, 3), range(1, 10)', () => {
      // Assertions.
      expect(range(1, 1)).toEqual([1])
      expect(range(1, 2)).toEqual([1, 2])
      expect(range(1, 3)).toEqual([1, 2, 3])
      expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })
})

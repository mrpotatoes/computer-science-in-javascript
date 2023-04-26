/* eslint-disable no-unused-vars, no-undef, arrow-body-style no-console */
import reduce from './reduce'

const whole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const integers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const empty = []

const wholeRes = 55
const integersRes = 40
const emptyRes = 0

// Add one
const sum = (acc, curr) => (acc + curr)

describe('reduce :: f a -> ((b, a) -> b, b) -> b', () => {
  describe('imperative', () => {
    it('reduce.imperative(whole, sum)', () => {
      expect(reduce.imperative(sum, 0, whole)).toEqual(wholeRes)
    })

    it('reduce.imperative(integers, sum)', () => {
      expect(reduce.imperative(sum, 0, integers)).toEqual(integersRes)
    })

    it('reduce.imperative(empty, sum)', () => {
      expect(reduce.imperative(sum, 0, empty)).toEqual(emptyRes)
    })
  })

  describe('recursive', () => {
    it('reduce.recursive(whole, sum)', () => {
      expect(reduce.recursive(sum, 0, whole)).toEqual(wholeRes)
    })

    it('reduce.recursive(integers, sum)', () => {
      expect(reduce.recursive(sum, 0, integers)).toEqual(integersRes)
    })

    it('reduce.recursive(empty, sum)', () => {
      expect(reduce.recursive(sum, 0, empty)).toEqual(emptyRes)
    })
  })
})

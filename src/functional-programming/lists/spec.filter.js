/* eslint-disable no-unused-vars, no-undef, arrow-body-style no-console */
import filter from './filter'

const whole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const integers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
const empty = []

const wholeRes = [4, 5, 6, 7, 8, 9, 10]
const integersRes = [4, 5, 6]
const emptyRes = []

// Add one
const lessThan3 = (elm) => (elm > 3)

describe('filter :: f a -> (a -> Boolean) -> f a', () => {
  describe('imperative', () => {
    it('filter.imperative(whole, lessThan3)', () => {
      expect(filter.imperative(whole, lessThan3)).toEqual(wholeRes)
    })

    it('filter.imperative(integers, lessThan3)', () => {
      expect(filter.imperative(integers, lessThan3)).toEqual(integersRes)
    })

    it('filter.imperative(empty, lessThan3)', () => {
      expect(filter.imperative(empty, lessThan3)).toEqual(emptyRes)
    })
  })

  describe('recursive', () => {
    it('filter.recursive(whole, lessThan3)', () => {
      expect(filter.recursive(whole, lessThan3)).toEqual(wholeRes)
    })

    it('filter.recursive(integers, lessThan3)', () => {
      expect(filter.recursive(integers, lessThan3)).toEqual(integersRes)
    })

    it('filter.recursive(empty, lessThan3)', () => {
      expect(filter.recursive(empty, lessThan3)).toEqual(emptyRes)
    })
  })

  describe('reduce', () => {
    it('filter.reduce(whole, lessThan3)', () => {
      expect(filter.reduce(lessThan3, whole)).toEqual(wholeRes)
    })

    it('filter.reduce(lessThan3, integers)', () => {
      expect(filter.reduce(lessThan3, integers)).toEqual(integersRes)
    })

    it('filter.recursive(lessThan3, empty)', () => {
      expect(filter.reduce(lessThan3, empty)).toEqual(emptyRes)
    })
  })
})

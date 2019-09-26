/* eslint-disable no-unused-vars, no-undef, arrow-body-style no-console */
import chai from 'chai'
import filter from './filter'

chai.should()

const whole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const integers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
const empty = []

const wholeRes = [4, 5, 6, 7, 8, 9, 10]
const integersRes = [4, 5, 6]
const emptyRes = []

// Add one
const lessThan3 = (elm) => (elm > 3)

describe('filter :: f a -> (a -> Boolean) -> f a', () => {
  describe('iterable', () => {
    it('filter.iterable(whole, lessThan3)', () => {
      filter.iterable(whole, lessThan3).should.deep.equal(wholeRes)
    })

    it('filter.iterable(integers, lessThan3)', () => {
      filter.iterable(integers, lessThan3).should.deep.equal(integersRes)
    })

    it('filter.iterable(empty, lessThan3)', () => {
      filter.iterable(empty, lessThan3).should.deep.equal(emptyRes)
    })
  })

  describe('recursive', () => {
    it('filter.recursive(whole, lessThan3)', () => {
      filter.recursive(whole, lessThan3).should.deep.equal(wholeRes)
    })

    it('filter.recursive(integers, lessThan3)', () => {
      filter.recursive(integers, lessThan3).should.deep.equal(integersRes)
    })

    it('filter.recursive(empty, lessThan3)', () => {
      filter.recursive(empty, lessThan3).should.deep.equal(emptyRes)
    })
  })

  describe('reduce', () => {
    it('filter.reduce(whole, lessThan3)', () => {
      filter.reduce(lessThan3, whole).should.deep.equal(wholeRes)
    })

    it('filter.reduce(lessThan3, integers)', () => {
      filter.reduce(lessThan3, integers).should.deep.equal(integersRes)
    })

    it('filter.recursive(lessThan3, empty)', () => {
      filter.reduce(lessThan3, empty).should.deep.equal(emptyRes)
    })
  })
})

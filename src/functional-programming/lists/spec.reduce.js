/* eslint-disable no-unused-vars, no-undef, arrow-body-style no-console */
import chai from 'chai'
import reduce from './reduce'

chai.should()

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
      reduce.imperative(sum, 0, whole).should.deep.equal(wholeRes)
    })

    it('reduce.imperative(integers, sum)', () => {
      reduce.imperative(sum, 0, integers).should.deep.equal(integersRes)
    })

    it('reduce.imperative(empty, sum)', () => {
      reduce.imperative(sum, 0, empty).should.deep.equal(emptyRes)
    })
  })

  describe('recursive', () => {
    it('reduce.recursive(whole, sum)', () => {
      reduce.recursive(sum, 0, whole).should.deep.equal(wholeRes)
    })

    it('reduce.recursive(integers, sum)', () => {
      reduce.recursive(sum, 0, integers).should.deep.equal(integersRes)
    })

    it('reduce.recursive(empty, sum)', () => {
      reduce.recursive(sum, 0, empty).should.deep.equal(emptyRes)
    })
  })
})

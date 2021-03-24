/* eslint-disable no-unused-vars, no-undef, arrow-body-style no-console */
import chai from 'chai'
import map from './map'

chai.should()

const whole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const integers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
const empty = []

const wholeRes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const integersRes = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
const emptyRes = []

// Add one
const addOne = (elm) => (elm + 1)

describe('map :: f a -> (a -> b) -> f b', () => {
  describe('imperative', () => {
    it('map.imperative(whole, addOne)', () => {
      map.imperative(whole, addOne).should.deep.equal(wholeRes)
    })

    it('map.imperative(integers, addOne)', () => {
      map.imperative(integers, addOne).should.deep.equal(integersRes)
    })

    it('map.imperative(empty, addOne)', () => {
      map.imperative(empty, addOne).should.deep.equal(emptyRes)
    })
  })

  describe('recursive', () => {
    it('map.recursive(whole, addOne)', () => {
      map.recursive(whole, addOne).should.deep.equal(wholeRes)
    })

    it('map.recursive(integers, addOne)', () => {
      map.recursive(integers, addOne).should.deep.equal(integersRes)
    })

    it('map.recursive(empty, addOne)', () => {
      map.recursive(empty, addOne).should.deep.equal(emptyRes)
    })
  })

  describe('reduce', () => {
    it('map.reduce(addOne, whole)', () => {
      map.reduce(addOne, whole).should.deep.equal(wholeRes)
    })

    it('map.reduce(addOne, integers)', () => {
      map.reduce(addOne, integers).should.deep.equal(integersRes)
    })

    it('map.recursive(addOne, empty)', () => {
      map.reduce(addOne, empty).should.deep.equal(emptyRes)
    })
  })
})

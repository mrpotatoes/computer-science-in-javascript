/* eslint-disable no-unused-vars, no-undef, arrow-body-style no-console */
import map from './map'

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
      expect(map.imperative(whole, addOne)).toEqual(wholeRes)
    })

    it('map.imperative(integers, addOne)', () => {
      expect(map.imperative(integers, addOne)).toEqual(integersRes)
    })

    it('map.imperative(empty, addOne)', () => {
      expect(map.imperative(empty, addOne)).toEqual(emptyRes)
    })
  })

  describe('recursive', () => {
    it('map.recursive(whole, addOne)', () => {
      expect(map.recursive(whole, addOne)).toEqual(wholeRes)
    })

    it('map.recursive(integers, addOne)', () => {
      expect(map.recursive(integers, addOne)).toEqual(integersRes)
    })

    it('map.recursive(empty, addOne)', () => {
      expect(map.recursive(empty, addOne)).toEqual(emptyRes)
    })
  })

  describe('reduce', () => {
    it('map.reduce(addOne, whole)', () => {
      expect(map.reduce(addOne, whole)).toEqual(wholeRes)
    })

    it('map.reduce(addOne, integers)', () => {
      expect(map.reduce(addOne, integers)).toEqual(integersRes)
    })

    it('map.recursive(addOne, empty)', () => {
      expect(map.reduce(addOne, empty)).toEqual(emptyRes)
    })
  })
})

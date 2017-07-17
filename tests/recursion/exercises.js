import chai from 'chai'
import {
  reverseString,
  reverseStringTernary,
} from '../../src/recursion/exercises'

import { sumArray } from '../../src/recursion/math'

chai.should()

describe('Recursion', () => {
  describe('Exercises', () => {
    it('reverseString(hello)', (done) => {
      reverseString('hello world').should.equal('dlrow olleh')
      reverseStringTernary('hello world').should.equal('dlrow olleh')

      done()
    })

    it('reverseString(hello)', (done) => {
      sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).should.equal(45)

      done()
    })
  })
})

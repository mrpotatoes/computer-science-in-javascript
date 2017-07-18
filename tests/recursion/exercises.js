import chai from 'chai'
import {
  reverseString,
  reverseStringTernary,
  arraySelectEven,
  arraySelect,
} from '../../src/recursion/exercises'

chai.should()

describe('Recursion', () => {
  describe('Exercises', () => {
    it('reverseString(hello)', (done) => {
      reverseString('hello world').should.equal('dlrow olleh')
      reverseStringTernary('hello world').should.equal('dlrow olleh')
      done()
    })

    it('arraySelectEven(evens) should get me even numbers', (done) => {
      arraySelectEven([0, 1, 2, 3, 4, 5, 6]).should.deep.equal([0, 2, 4, 6])
      arraySelectEven([0, 1, 2.4, 3, 4, 5, 6]).should.deep.equal([0, 4, 6])
      done()
    })

    it('arraySelect(evens) should get me even numbers', (done) => {
      const evens = (int) => (int % 2 === 0)
      arraySelect([0, 1, 2, 3, 4, 5, 6], evens).should.deep.equal([0, 2, 4, 6])
      arraySelect([0, 1, 2.4, 3, 4, 5, 6], evens).should.deep.equal([0, 4, 6])
      done()
    })

    it('arraySelect(odds) should get me odd numbers', (done) => {
      const odds = (int) => (int % 2 === 1)
      arraySelect([0, 1, 1.1, 2, 3, 4, 5, 6], odds).should.deep.equal([1, 3, 5])
      arraySelect([0, 1, 2.4, 3, 4, 5, 6], odds).should.deep.equal([1, 3, 5])
      done()
    })
  })
})

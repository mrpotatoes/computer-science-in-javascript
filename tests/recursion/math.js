import chai from 'chai'
import {
  factorial,
  addition,
  range,
  sumArray,
  NO_END,
  END_BIGGER,
  PARAMS_EQUAL,
} from '../../src/recursion/math'

chai.should()
const expect = chai.expect

describe('Recursion', () => {
  describe('Math', () => {
    it('sumArray([])', (done) => {
      sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).should.equal(45)
      done()
    })

    it('factorial(1) and factorial(10)', (done) => {
      // Assertions.
      factorial(0).should.equal(1)
      factorial(1).should.equal(1)
      factorial(10).should.equal(3628800)

      done()
    })

    it('addition(1) and addition(10)', (done) => {
      // Assertions.
      addition(0).should.equal(0)
      addition(1).should.equal(1)
      addition(10).should.equal(55)

      done()
    })

    it('range(1), range(10, 1), range(1, 1) should all throw errors', (done) => {
      // Assertions.
      expect(() => { range(1) }).to.throw(NO_END)
      expect(() => { range(10, 1) }).to.throw(END_BIGGER)

      done()
    })

    it('range(1, 1), range(1, 2), range(1, 3), range(1, 10)', (done) => {
      // Assertions.
      range(1, 1).should.deep.equal([1])
      range(1, 2).should.deep.equal([1, 2])
      range(1, 3).should.deep.equal([1, 2, 3])
      range(1, 10).should.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

      done()
    })
  })
})

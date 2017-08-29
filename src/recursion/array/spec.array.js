import chai from 'chai'
import {
  arraySelectEven,
  arraySelect,
  dropWhile,
} from './array'

chai.should()

describe('Recursion', () => {
  describe('Exercises', () => {
    it('arraySelectEven(evens) should get me even numbers', (done) => {
      arraySelectEven([0, 1, 2, 3, 4, 5, 6]).should.deep.equal([0, 2, 4, 6])
      arraySelectEven([0, 1, 2.4, 3, 4, 5, 6]).should.deep.equal([0, 4, 6])
      done()
    })

    it('arraySelect(evens) should get me even numbers', (done) => {
      const evens = (int) => (int % 2 === 0)
      arraySelect([0, 1, 2, 3, 4, 5, 6], evens).should.deep.equal([0, 2, 4, 6])
      arraySelect([0, 1, 2.4, 3, 4, 5, 6], evens).should.deep.equal([0, 4, 6])
      arraySelect([0, 1, 2.4, 3, 4, 5, 6, 7], evens).should.deep.equal([0, 4, 6])
      done()
    })

    it('arraySelect(odds) should get me odd numbers', (done) => {
      const odds = (int) => (int % 2 === 1)
      arraySelect([0, 1, 1.1, 2, 3, 4, 5, 6], odds).should.deep.equal([1, 3, 5])
      arraySelect([0, 1, 2.4, 3, 4, 5, 6, 9], odds).should.deep.equal([1, 3, 5, 9])
      done()
    })

    it('dropWhile({1, 3, 0, 10}, [1, 2, 3, 4, 5])', (done) => {
      dropWhile(-1, [1, 2, 3, 4, 5]).should.deep.equal([1, 2, 3, 4, 5])
      dropWhile(0, [1, 2, 3, 4, 5]).should.deep.equal([1, 2, 3, 4, 5])
      dropWhile(1, [1, 2, 3, 4, 5]).should.deep.equal([1, 2, 3, 4, 5])
      dropWhile(1, [1, 2, 7, 3, 4, 5]).should.deep.equal([1, 2, 7, 3, 4, 5])
      dropWhile(3, [1, 2, 3, 4, 5]).should.deep.equal([3, 4, 5])
      dropWhile(5, [1, 2, 3, 4, 5]).should.deep.equal([5])
      dropWhile(10, [1, 2, 3, 4, 5]).should.deep.equal([])
      done()
    })
  })
})

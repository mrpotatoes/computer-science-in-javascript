import chai from 'chai'
import { reverseString, reverseStringTernary, concat, concatRecursive } from './string'

chai.should()

describe('Recursion', () => {
  describe('Exercises', () => {
    it('reverseString(hello)', (done) => {
      reverseString('hello world').should.equal('dlrow olleh')
      done()
    })

    it('reverseStringTernary(hello)', (done) => {
      reverseStringTernary('hello world').should.equal('dlrow olleh')
      done()
    })

    it('concat(hello, there, friend)', () => {
      concat('hello', 'there', 'friend').should.equal(' hello there friend')
      concat('hello').should.equal(' hello')
      concat().should.equal('')
    })
  })
})

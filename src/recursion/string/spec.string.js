import chai from 'chai'
import { reverseString, reverseStringTernary } from './string'

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
  })
})

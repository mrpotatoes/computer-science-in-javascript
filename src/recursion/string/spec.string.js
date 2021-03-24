import chai from 'chai'
import { reverseString, reverseStringTernary, concat, isPalindromeLinear, isPalindrome } from './string'

chai.should()

describe('Recursion', () => {
  describe('Strings', () => {
    describe('Misc', () => {
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

    describe('Palindromes', () => {
      it('isPalindromeLinear()', () => {
        isPalindromeLinear('').should.equal(true)
        isPalindromeLinear('o').should.equal(true)
        isPalindromeLinear('noon').should.equal(true)
        isPalindromeLinear('evve').should.equal(true)
        isPalindromeLinear('level').should.equal(false)
        isPalindromeLinear('n000000n').should.equal(true)
        isPalindromeLinear('n0000000n').should.equal(false)
        isPalindromeLinear('qqqq').should.equal(true)
      })

      it('isPalindrome() - recursive version', () => {
        isPalindrome('').should.equal(true)
        isPalindrome('o').should.equal(true)
        isPalindrome('noon').should.equal(true)
        isPalindrome('eve').should.equal(true)
        isPalindrome('evve').should.equal(true)
        isPalindrome('level').should.equal(true)
        isPalindrome('n000000n').should.equal(true)
        isPalindrome('n0000000n').should.equal(true)
        isPalindrome('qqqq').should.equal(true)
      })
    })
  })
})

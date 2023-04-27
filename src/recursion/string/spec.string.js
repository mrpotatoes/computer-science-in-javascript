import { reverseString, reverseStringTernary, concat, isPalindromeLinear, isPalindrome } from './string'

describe('Recursion', () => {
  describe('Strings', () => {
    describe('Misc', () => {
      it('reverseString(hello)', () => {
        expect(reverseString('hello world')).toEqual('dlrow olleh')
      })

      it('reverseStringTernary(hello)', () => {
        expect(reverseStringTernary('hello world')).toEqual('dlrow olleh')
      })

      it('concat(hello, there, friend)', () => {
        expect(concat('hello', 'there', 'friend')).toEqual(' hello there friend')
        expect(concat('hello')).toEqual(' hello')
        expect(concat()).toEqual('')
      })
    })

    describe('Palindromes', () => {
      it('isPalindromeLinear()', () => {
        expect(isPalindromeLinear('')).toEqual(true)
        expect(isPalindromeLinear('o')).toEqual(true)
        expect(isPalindromeLinear('noon')).toEqual(true)
        expect(isPalindromeLinear('evve')).toEqual(true)
        expect(isPalindromeLinear('level')).toEqual(false)
        expect(isPalindromeLinear('n000000n')).toEqual(true)
        expect(isPalindromeLinear('n0000000n')).toEqual(false)
        expect(isPalindromeLinear('qqqq')).toEqual(true)
      })

      it('isPalindrome() - recursive version', () => {
        expect(isPalindrome('')).toEqual(true)
        expect(isPalindrome('o')).toEqual(true)
        expect(isPalindrome('noon')).toEqual(true)
        expect(isPalindrome('eve')).toEqual(true)
        expect(isPalindrome('evve')).toEqual(true)
        expect(isPalindrome('level')).toEqual(true)
        expect(isPalindrome('n000000n')).toEqual(true)
        expect(isPalindrome('n0000000n')).toEqual(true)
        expect(isPalindrome('qqqq')).toEqual(true)
      })
    })
  })
})

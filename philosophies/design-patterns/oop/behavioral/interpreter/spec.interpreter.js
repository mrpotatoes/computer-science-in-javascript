/* eslint-disable no-unused-vars */
import chai, { expect } from 'chai'
import spies from 'chai-spies'

import { Context, Expression } from './interpreter'

chai.use(spies)

const roman = (numerals) => {
  const context = new Context(numerals)
  const tree = []

  tree.push(new Expression('thousand', 'M', ' ', ' ', ' ', 1000))
  tree.push(new Expression('hundred', 'C', 'CD', 'D', 'CM', 100))
  tree.push(new Expression('ten', 'X', 'XL', 'L', 'XC', 10))
  tree.push(new Expression('one', 'I', 'IV', 'V', 'IX', 1))

  for (let i = 0, len = tree.length; i < len; i++) {
    tree[i].interpret(context)
  }

  return context.output
}

describe('./src/design-patterns/oop/behavioral/interpreter', () => {
  describe('Class: Context', () => {
    it.skip('startsWith()', () => {
    })
  })

  describe('Class: Expression', () => {
    it.skip('interpret()', () => {
    })
  })

  describe('Complete', () => {
    it('expects actual roman number conversion', () => {
      expect(roman('MCMXXVIII')).to.equal(1928)
      expect(roman('IV')).to.equal(4)
      expect(roman('V')).to.equal(5)
    })

    it('expects bad roman number to convert to 0', () => {
      expect(roman('a')).to.equal(0)
      expect(roman('A')).to.equal(0)
      expect(roman('lorem')).to.equal(0)
      expect(roman('')).to.equal(0)
      expect(roman(';')).to.equal(0)
      expect(roman(' ')).to.equal(9000)
    })
  })
})

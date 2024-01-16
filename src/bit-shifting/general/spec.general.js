import * as core from './general'

describe('[Bit Shifting] General/Core', () => {
  describe('Bit representations', () => {
    it('asBinary(num)', () => {
      expect(core.asBinary(0)).toEqual('0')
      expect(core.asBinary(1)).toEqual('1')
      expect(core.asBinary(165)).toEqual('10100101')
    })

    it('asBinary(num, pad)', () => {
      expect(core.asBinary(0, true)).toEqual('00000000000000000000000000000000')
      expect(core.asBinary(1, true)).toEqual('00000000000000000000000000000001')
      expect(core.asBinary(128, true)).toEqual('00000000000000000000000010000000')
      expect(core.asBinary(165, true)).toEqual('00000000000000000000000010100101')
    })
  })

  describe('Operations', () => {
    it('& - result is only 1 if both operands are 1', () => {
      expect(0 & 0).toEqual(0)
      expect(0 & 1).toEqual(0)
      expect(1 & 0).toEqual(0)
      expect(1 & 1).toEqual(1)
    })

    it('| - result is 1 if any operand is 1', () => {
      expect(0 | 0).toEqual(0)
      expect(0 | 1).toEqual(1)
      expect(1 | 0).toEqual(1)
      expect(1 | 1).toEqual(1)
    })

    it('^ - result is 1 only if the operands are different', () => {
      expect(0 ^ 0).toEqual(0)
      expect(0 ^ 1).toEqual(1)
      expect(1 ^ 0).toEqual(1)
      expect(1 ^ 1).toEqual(0)
    })

    it('~', () => {
      expect(core.asBinary( 5, true)).toEqual('00000000000000000000000000000101')
      expect(core.asBinary(~5, true)).toEqual('11111111111111111111111111111010')
    })
  })

  describe('Bit shifting left (<<)', () => {
    it('0 << (1...4)', () => {
      expect(core.asBinary(0 << 0)).toEqual('0')  // 0
      expect(core.asBinary(0 << 1)).toEqual('0')  // 0
      expect(core.asBinary(0 << 2)).toEqual('0')  // 0
      expect(core.asBinary(0 << 3)).toEqual('0')  // 0
      expect(core.asBinary(0 << 4)).toEqual('0')  // 0
    })

    it('1 << (1...4)', () => {
      expect(core.asBinary(1 << 0)).toEqual('1')      // 1
      expect(core.asBinary(1 << 1)).toEqual('10')     // 2
      expect(core.asBinary(1 << 2)).toEqual('100')    // 4
      expect(core.asBinary(1 << 3)).toEqual('1000')   // 8
      expect(core.asBinary(1 << 4)).toEqual('10000')  // 16
    })

    it('(2 << (1...4))', () => {
      expect(core.asBinary(2 << 0)).toEqual('10')     // 2
      expect(core.asBinary(2 << 1)).toEqual('100')    // 4
      expect(core.asBinary(2 << 2)).toEqual('1000')   // 8
      expect(core.asBinary(2 << 3)).toEqual('10000')  // 16
      expect(core.asBinary(2 << 4)).toEqual('100000') // 32
    })

    it('(149 << (1...4))', () => {
      expect(core.asBinary(149 << 0)).toEqual('10010101')     // 149
      expect(core.asBinary(149 << 1)).toEqual('100101010')    // 298
      expect(core.asBinary(149 << 2)).toEqual('1001010100')   // 596
      expect(core.asBinary(149 << 3)).toEqual('10010101000')  // 1192
      expect(core.asBinary(149 << 4)).toEqual('100101010000') // 2384
    })
  })

  describe('Bit shifting right (>>)', () => {
    it('0 >> (1...4)', () => {
      expect(core.asBinary(0 >> 0)).toEqual('0')  // 0
      expect(core.asBinary(0 >> 1)).toEqual('0')  // 0
      expect(core.asBinary(0 >> 2)).toEqual('0')  // 0
      expect(core.asBinary(0 >> 3)).toEqual('0')  // 0
      expect(core.asBinary(0 >> 4)).toEqual('0')  // 0
    })

    it('1 >> (1...4)', () => {
      expect(core.asBinary(1 >> 0)).toEqual('1')  // 1
      expect(core.asBinary(1 >> 1)).toEqual('0')  // 0
      expect(core.asBinary(1 >> 2)).toEqual('0')  // 0
      expect(core.asBinary(1 >> 3)).toEqual('0')  // 0
      expect(core.asBinary(1 >> 4)).toEqual('0')  // 0
    })

    it('(2 >> (1...4))', () => {
      expect(core.asBinary(2 >> 0)).toEqual('10') // 2
      expect(core.asBinary(2 >> 1)).toEqual('1')  // 1
      expect(core.asBinary(2 >> 2)).toEqual('0')  // 0
      expect(core.asBinary(2 >> 3)).toEqual('0')  // 0
      expect(core.asBinary(2 >> 4)).toEqual('0')  // 0
    })

    it('(149 >> (1...4))', () => {
      expect(core.asBinary(149 >> 0)).toEqual('10010101') // 149
      expect(core.asBinary(149 >> 1)).toEqual('1001010')  // 74
      expect(core.asBinary(149 >> 2)).toEqual('100101')   // 37
      expect(core.asBinary(149 >> 3)).toEqual('10010')    // 18
      expect(core.asBinary(149 >> 4)).toEqual('1001')     // 9
    })
  })

  describe('Bit counting', () => {
    it('countBits(num)', () => {
      expect(core.countBits(0)).toEqual(0)    // 0
      expect(core.countBits(1)).toEqual(1)    // 1
      expect(core.countBits(23)).toEqual(4)   // 10111
      expect(core.countBits(149)).toEqual(4)  // 10010101
      expect(core.countBits(165)).toEqual(4)  // 10100101
    })
  })
})

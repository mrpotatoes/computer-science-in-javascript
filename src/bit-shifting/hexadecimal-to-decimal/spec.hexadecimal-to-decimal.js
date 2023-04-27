import { hexToDecimal  } from './hexadecimal-to-decimal'

const hexToRgb = (hex) => {
  // working through above shift operator procedure backwards
  // we will right-shift the color bits by multiples of 8 as necessary until
  // we get the target component bits as the first 8 bits from the right
  hex = hex.replace(/^#?([0-9a-f]{6})$/i, '$1');
  hex = Number(`0x${hex}`);
  // we need a way to mask out every other bits except the first 8 bits.
  // & operator can be used to ensure that certain bits are turned off.
  return [
    hex >> 16 & 0xff, // red
    hex >> 8 & 0xff,  // green
    hex & 0xff        // blue
  ];
}

describe('hexToDecimal', () => {
  it('should convert a single decimal number', () => {
    const subject = '1'
    // console.log(hexToRgb('ffffff'))
    // console.log(hexToRgb('333333'))
    // expect(hexToDecimal(subject)).toEqual(1)
  })

  it.skip('should convert one letter', () => {
    const subject = 'c'
    expect(hexToDecimal(subject)).toEqual(12)
  })

  it.skip('should convert 10', () => {
    const subject = '10'
    expect(hexToDecimal(subject)).toEqual(16)
  })

  it.skip('should convert multiple letters', () => {
    const subject = 'af'
    expect(hexToDecimal(subject)).toEqual(175)
  })

  it.skip('should convert large numbers', () => {
    const subject = '100'
    expect(hexToDecimal(subject)).toEqual(256)
  })

  it.skip('should convert large numbers and letters', () => {
    const subject = '19ace'
    expect(hexToDecimal(subject)).toEqual(105166)
  })

  it.skip('should return null for an invalid hex code', () => {
    const subject = 'bananarama'
    expect(hexToDecimal(subject)).toEqual(null)
  })

  it.skip('should convert white', () => {
    const subject = 'ffffff'
    expect(hexToDecimal(subject)).toEqual(16777215)
  })

  it.skip('should convert papayawhip', () => {
    const subject = 'ffefd5'
    expect(hexToDecimal(subject)).toEqual(16773077)
  })
})

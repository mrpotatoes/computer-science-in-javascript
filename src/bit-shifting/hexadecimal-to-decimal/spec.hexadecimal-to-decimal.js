import { hexToDecimal  } from './hexadecimal-to-decimal'

describe('hexToDecimal', () => {
  it.skip('should convert a single decimal number', () => {
    const subject = '1'
    expect(hexToDecimal(subject)).toEqual(1)
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

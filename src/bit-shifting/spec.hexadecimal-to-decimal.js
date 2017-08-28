import chai from 'chai'
import hexToDecimal from './hexadecimal-to-decimal'

chai.should()
const expect = chai.expect

describe('hexToDecimal', () => {
  it('should convert a single decimal number', () => {
    const subject = '1'
    expect(hexToDecimal(subject)).to.eq(1)
  })

  it('should convert one letter', () => {
    const subject = 'c'
    expect(hexToDecimal(subject)).to.eq(12)
  })

  it('should convert 10', () => {
    const subject = '10'
    expect(hexToDecimal(subject)).to.eq(16)
  })

  it('should convert multiple letters', () => {
    const subject = 'af'
    expect(hexToDecimal(subject)).to.eq(175)
  })

  it('should convert large numbers', () => {
    const subject = '100'
    expect(hexToDecimal(subject)).to.eq(256)
  })

  it('should convert large numbers and letters', () => {
    const subject = '19ace'
    expect(hexToDecimal(subject)).to.eq(105166)
  })

  it('should return null for an invalid hex code', () => {
    const subject = 'bananarama'
    expect(hexToDecimal(subject)).to.eq(null)
  })

  it('should convert white', () => {
    const subject = 'ffffff'
    expect(hexToDecimal(subject)).to.eq(16777215)
  })

  it('should convert papayawhip', () => {
    const subject = 'ffefd5'
    expect(hexToDecimal(subject)).to.eq(16773077)
  })
})

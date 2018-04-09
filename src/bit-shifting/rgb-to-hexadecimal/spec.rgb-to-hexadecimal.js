import chai from 'chai'
import colorToHex from './rgb-to-hexadecimal'

chai.should()
const expect = chai.expect

describe('colorToHex', () => {
  it('should convert white', () => {
    const white = 'rgb(255, 255, 255)'
    expect(colorToHex(white)).to.eq('#ffffff')
  })

  it('should convert papayawhip (and be able to handle missing rgb)', () => {
    const papayawhip = '(255, 239, 213)'
    expect(colorToHex(papayawhip)).to.eq('#ffefd5')
  })

  it('should convert steelblue (and be able to handle missing spaces)', () => {
    const steelblue = '(70,130,180)'
    expect(colorToHex(steelblue)).to.eq('#4682b4')
  })

  it('should convert magenta', () => {
    const magenta = 'rgb(255, 0, 255)'
    expect(colorToHex(magenta)).to.eq('#ff00ff')
  })

  it('should convert yellow', () => {
    const yellow = 'rgb(255, 255, 0)'
    expect(colorToHex(yellow)).to.eq('#ffff00')
  })

  it('should convert green', () => {
    const green = 'rgb(0, 255, 0)'
    expect(colorToHex(green)).to.eq('#00ff00')
  })

  // It starts getting tricky here!

  it('should convert black', () => {
    const black = 'rgb(0, 0, 0)'
    expect(colorToHex(black)).to.eq('#000000')
  })

  it('should return the hex value if accidently given a hex', () => {
    expect(colorToHex('#ffffff')).to.eq('#ffffff')
  })
})

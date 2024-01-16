import { colorToHex } from './rgb-to-hexadecimal'

describe('colorToHex', () => {
  it('should convert white', () => {
    expect(colorToHex([ 255, 255, 255 ])).toEqual('#ffffff')
  })

  it('should convert black', () => {
    expect(colorToHex([ 0, 0, 0 ])).toEqual('#0')
  })
})

import { hexToRgb } from './hexadecimal-to-rgb'

describe('hexToRgb', () => {
  it('should convert ffffff to [ 255, 255, 255 ]', () => {
    expect(hexToRgb('#ffffff')).toEqual([ 255, 255, 255 ])
  })

  it('should convert ffefd5 to [ 255, 239, 213 ]', () => {
    expect(hexToRgb('#ffefd5')).toEqual([ 255, 239, 213 ])
  })

  it('should convert 000 to [ 0, 0, 0 ]', () => {
    expect(hexToRgb('#000')).toEqual([ 0, 0, 0 ])
  })
})

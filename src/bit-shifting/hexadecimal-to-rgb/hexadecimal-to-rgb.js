/**
 *
 * From: https://blog.logrocket.com/guide-javascript-bitwise-operators/
 *
 * @param {*} hex A hex string. May or may not have a preceding '#'
 *
 * @returns {int[]} An array of size 3 of numbers [ 0...255 ]
 */
export const hexToRgb = (hex) => {
  // working through above shift operator procedure backwards
  // we will right-shift the color bits by multiples of 8 as necessary until
  // we get the target component bits as the first 8 bits from the right
  hex = hex.replace(/^#?([0-9a-f]{6})$/i, '$1')
  hex = Number(`0x${hex}`)
  // we need a way to mask out every other bits except the first 8 bits.
  // & operator can be used to ensure that certain bits are turned off.
  return [
    hex >> 16 & 0xff, // red
    hex >> 8 & 0xff,  // green
    hex & 0xff        // blue
  ]
}

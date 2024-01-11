export const colorToHex = ([red = 0, green = 0, blue = 0] = []) =>
  `#${(red << 16 | green << 8 | blue).toString(16)}`

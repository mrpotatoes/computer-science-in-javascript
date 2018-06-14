/* eslint-disable no-param-reassign */
export class Context {
  constructor (input) {
    this.input = input
    this.output = 0
  }

  startsWith = (str) => (
    this.input.substr(0, str.length) === str
  )
}

export class Expression {
  constructor (name, one, four, five, nine, multiplier) {
    this.name = name
    this.one = one
    this.four = four
    this.five = five
    this.nine = nine
    this.multiplier = multiplier
  }

  interpret (context) {
    if (context.input.length === 0) {
      return
    } else if (context.startsWith(this.nine)) {
      context.output += (9 * this.multiplier)
      context.input = context.input.substr(2)
    } else if (context.startsWith(this.four)) {
      context.output += (4 * this.multiplier)
      context.input = context.input.substr(2)
    } else if (context.startsWith(this.five)) {
      context.output += (5 * this.multiplier)
      context.input = context.input.substr(1)
    }

    while (context.startsWith(this.one)) {
      context.output += (1 * this.multiplier)
      context.input = context.input.substr(1)
    }
  }
}

export const Calculator = {
  // addition function
  add: (num1, num2) => (num1 + num2),

  // subtraction function
  substract: (num1, num2) => (num1 - num2),

  // multiplication function
  multiply: (num1, num2) => (num1 * num2),

  // division function
  divide: (num1, num2) => (num1 / num2),
}

// A curry'd version of the runner.
export const CalculatorRunner = (calc) => (
  (command) => (
    calc[command.type](command.num1, command.num2)
  )
)
/* eslint-disable max-len */
import chai from 'chai'
import { CalculatorRunner, Calculator } from '.'

chai.should()

const execute = CalculatorRunner(Calculator)

describe('[Design Patters] Command Pattern', () => {
  it('Runner(add, ...)', (done) => {
    execute({ type: 'add', num1: 6, num2: 3 }).should.equal(9)
    execute({ type: 'add', num1: 3, num2: 6 }).should.equal(9)
    execute({ type: 'add', num1: 1, num2: 1 }).should.equal(2)
    done()
  })

  it('Runner(subtract, ...)', (done) => {
    execute({ type: 'substract', num1: 4, num2: 7 }).should.equal(-3)
    execute({ type: 'substract', num1: 10, num2: 3 }).should.equal(7)
    done()
  })

  it('Runner(divide, ...)', (done) => {
    execute({ type: 'divide', num1: 10, num2: 2 }).should.equal(5)
    execute({ type: 'divide', num1: 100, num2: 2 }).should.equal(50)
    execute({ type: 'divide', num1: 1, num2: 2 }).should.equal(0.5)
    execute({ type: 'divide', num1: 1, num2: 6 }).should.equal(0.16666666666666666)
    done()
  })

  it('Runner(multiply, ...)', (done) => {
    execute({ type: 'multiply', num1: 3, num2: 5 }).should.equal(15)
    execute({ type: 'multiply', num1: 5, num2: 2 }).should.equal(10)
    execute({ type: 'multiply', num1: 2, num2: 5 }).should.equal(10)
    done()
  })
})

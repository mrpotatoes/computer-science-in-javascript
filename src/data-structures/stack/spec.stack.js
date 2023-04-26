import StackDS from './stack'

describe('[Data Structure] Stack', () => {
  it.skip('add(1...3) find length()', () => {
    const stack = new StackDS()
    stack.push(1).push(2).push(3)

    // Assertions
    stack.length().should.equal(3)
    stack.stack.should.deep.equal([1, 2, 3])
    stack.print().should.equal('1 2 3')
  })

  it.skip('add(1...3) then peek() then add(1) and peek() again', () => {
    const stack = new StackDS()
    stack.push(1).push(2).push(3)

    // Assertions
    stack.peek().should.equal(3)
    stack.push(2).peek().should.equal(2)
  })

  it.skip('add(1...3) and pop()', () => {
    const stack = new StackDS()
    stack.push(1).push(2).push(3).pop()

    // Assertions
    stack.stack.should.deep.equal([1, 2])
    stack.push(1).stack.should.deep.equal([1, 2, 1])
    stack.length().should.equal(3)
  })
})

import StackDS from './stack'

describe('[Data Structure] Stack', () => {
  it('add(1...3) find length()', () => {
    const stack = new StackDS()
    stack.push(1).push(2).push(3)

    // Assertions
    expect(stack.length()).toEqual(3)
    expect(stack.stack).toEqual([1, 2, 3])
    expect(stack.print()).toEqual('1 2 3')
  })

  it('add(1...3) then peek() then add(1) and peek() again', () => {
    const stack = new StackDS()
    stack.push(1).push(2).push(3)

    // Assertions
    expect(stack.peek()).toEqual(3)
    expect(stack.push(2).peek()).toEqual(2)
  })

  it('add(1...3) and pop()', () => {
    const stack = new StackDS()
    stack.push(1).push(2).push(3).pop()

    // Assertions
    expect(stack.stack).toEqual([1, 2])
    expect(stack.push(1).stack).toEqual([1, 2, 1])
    expect(stack.length()).toEqual(3)
  })
})

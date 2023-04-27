/* eslint-disable no-unused-expressions */
import ArrayDS from './array'

describe('[Data Structure] Array', () => {
  it('add(1...2) find length()', () => {
    const array = new ArrayDS()
    array.add(1).add(2)

    // Assertions.
    expect(array.getArray()).toHaveLength(2)
    expect(array.length()).toEqual(2)
  })

  it('add(1...4)', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4)

    // Assertions.
    expect(array.getArray()).toHaveLength(4)
    expect(array.print()).toEqual('1 2 3 4')
    expect(array.getArray()).toEqual([1, 2, 3, 4])
    expect(array.length()).toEqual(4)
  })

  it.skip('add(1...4) remove() one.', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).remove(2)

    // Assertions.
    expect(array.getArray()).toHaveLength(3)
    expect(array.print()).toEqual('1 3 4')
    expect(array.getArray()).toEqual([1, 3, 4])
    expect(array.length()).toEqual(3)
  })

  it('add(1...4) remove(1) add(1...2) and remove(1).', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).remove(2).add(5).add(6).remove(3)

    // Assertions.
    expect(array.getArray()).toHaveLength(4)
    expect(array.length()).toEqual(4)
    expect(array.print()).toEqual('1 4 5 6')
    expect(array.getArray()).toEqual([1, 4, 5, 6])
  })

  it('add(1...5) and search() invalid', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).add(1)

    // Assertions.
    expect(array.getArray()).toHaveLength(5)
    expect(array.search(1)).toEqual(0)
    expect(array.search(10)).toBeNull()
  })

  it('add(1...5) and findAll()', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).add(1)

    // Assertions.
    expect(array.getArray(1)).toHaveLength(5)
    expect(array.findAll(1)).toEqual([0, 4])
    expect(array.findAll(10)).toEqual([])
  })

  it('add(1...4) and getAtIndex()', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4)

    // Assertions.
    expect(array.getArray(1)).toHaveLength(4)
    expect(array.getAtIndex(0)).toEqual(1)
    expect(array.getAtIndex(1)).toEqual(2)
    expect(array.getAtIndex(-1)).toBeUndefined()
  })
})

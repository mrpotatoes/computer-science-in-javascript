/* eslint-disable no-unused-expressions */
import ArrayDS from './array'

describe('[Data Structure] Array', () => {
  it.skip('add(1...2) find length()', () => {
    const array = new ArrayDS()
    array.add(1).add(2)

    // Assertions.
    array.getArray().should.have.lengthOf(2)
    array.length().should.equal(2)
  })

  it.skip('add(1...4)', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4)

    // Assertions.
    array.getArray().should.have.lengthOf(4)
    array.print().should.equal('1 2 3 4')
    array.getArray().should.deep.equal([1, 2, 3, 4])
    array.length().should.equal(4)
  })

  it.skip('add(1...4) remove() one.', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).remove(2)

    // Assertions.
    array.getArray().should.have.lengthOf(3)
    array.print().should.equal('1 3 4')
    array.getArray().should.deep.equal([1, 3, 4])
    array.length().should.equal(3)
  })

  it.skip('add(1...4) remove(1) add(1...2) and remove(1).', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).remove(2).add(5).add(6).remove(3)

    // Assertions.
    array.getArray().should.have.lengthOf(4)
    array.length().should.equal(4)
    array.print().should.equal('1 4 5 6')
    array.getArray().should.deep.equal([1, 4, 5, 6])
  })

  it.skip('add(1...5) and search() invalid', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).add(1)

    // Assertions.
    array.getArray().should.have.lengthOf(5)
    array.search(1).should.equal(0)
    expect(array.search(10)).to.be.null
  })

  it.skip('add(1...5) and findAll()', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).add(1)

    // Assertions.
    array.getArray(1).should.have.lengthOf(5)
    array.findAll(1).should.deep.equal([0, 4])
    expect(array.findAll(10)).to.be.empty
  })

  it.skip('add(1...4) and getAtIndex()', () => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4)

    // Assertions.
    array.getArray(1).should.have.lengthOf(4)
    array.getAtIndex(0).should.equal(1)
    array.getAtIndex(1).should.equal(2)
    expect(array.getAtIndex(-1)).to.be.undefined
  })
})

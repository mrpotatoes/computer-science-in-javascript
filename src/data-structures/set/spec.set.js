/* eslint-disable no-unused-expressions */
import SetDS from './set'

describe('[Data Structure] Set', () => {
  it.skip('add(1...3) find length()', () => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    set.length().should.equal(3)
    set.values.should.deep.equal([1, 2, 3])
    set.add(3).values.should.deep.equal([1, 2, 3])
  })

  it.skip('add(1...3) and remove() 2 items from set', () => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    set.length().should.equal(3)
    set.values.should.deep.equal([1, 2, 3])
    set.remove(3).values.should.deep.equal([1, 2])
    set.remove(1).values.should.deep.equal([2])
  })

  it.skip('add(1...3) and run contains()', () => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    expect(set.contains(3)).to.be.true
    expect(set.contains(4)).to.be.false
  })

  it.skip('add(1...3) and run contains()', () => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    expect(set.contains(3)).to.be.true
    expect(set.contains(4)).to.be.false
  })

  it.skip('Create two sets and find the intersect() between the two', () => {
    const set1 = new SetDS()
    const set2 = new SetDS()

    set1.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(9).add(15)
    set2.add(1).add(2).add(3).add(10).add(11).add(12).add(13).add(14).add(15)

    // Assertions.
    set1.intersect(set2).values.should.deep.equal([1, 2, 3, 15])
  })

  it.skip('Create two sets and find the difference() between the two', () => {
    const set1 = new SetDS()
    const set2 = new SetDS()

    set1.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(9).add(15)
    set2.add(1).add(2).add(3).add(10).add(11).add(12).add(13).add(14).add(15)

    // Assertions.
    set1.difference(set2).values.should.deep.equal([4, 5, 6, 7, 8, 9])
  })

  it.skip('Create 3 new SetDS() and determine which are isSubset()', () => {
    const set1 = new SetDS()
    const set2 = new SetDS()
    const set3 = new SetDS()

    set1.add(1).add(2).add(3).add(4).add(5).add(9).add(15)
    set2.add(1).add(2).add(3).add(15)
    set3.add(1).add(2).add(3).add(20)

    // Assertions
    expect(set1.isSubset(set2)).to.be.true
    expect(set1.isSubset(set3)).to.be.false
  })
})

/* eslint-disable no-unused-expressions */
import SetDS from './set'

describe('[Data Structure] Set', () => {
  it('add(1...3) find length()', () => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    expect(set.length()).toEqual(3)
    expect(set.values).toEqual([1, 2, 3])
    expect(set.add(3).values).toEqual([1, 2, 3])
  })

  it('add(1...3) and remove() 2 items from set', () => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    expect(set.length()).toEqual(3)
    expect(set.values).toEqual([1, 2, 3])
    expect(set.remove(3).values).toEqual([1, 2])
    expect(set.remove(1).values).toEqual([2])
  })

  it('add(1...3) and run contains()', () => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    expect(set.contains(3)).toEqual(true)
    expect(set.contains(4)).toEqual(false)
  })

  it('add(1...3) and run contains()', () => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    expect(set.contains(3)).toEqual(true)
    expect(set.contains(4)).toEqual(false)
  })

  it('Create two sets and find the intersect() between the two', () => {
    const set1 = new SetDS()
    const set2 = new SetDS()

    set1.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(9).add(15)
    set2.add(1).add(2).add(3).add(10).add(11).add(12).add(13).add(14).add(15)

    // Assertions.
    expect(set1.intersect(set2).values).toEqual([1, 2, 3, 15])
  })

  it('Create two sets and find the difference() between the two', () => {
    const set1 = new SetDS()
    const set2 = new SetDS()

    set1.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(9).add(15)
    set2.add(1).add(2).add(3).add(10).add(11).add(12).add(13).add(14).add(15)

    // Assertions.
    expect(set1.difference(set2).values).toEqual([4, 5, 6, 7, 8, 9])
  })

  it('Create 3 new SetDS() and determine which are isSubset()', () => {
    const set1 = new SetDS()
    const set2 = new SetDS()
    const set3 = new SetDS()

    set1.add(1).add(2).add(3).add(4).add(5).add(9).add(15)
    set2.add(1).add(2).add(3).add(15)
    set3.add(1).add(2).add(3).add(20)

    // Assertions
    expect(set1.isSubset(set2)).toEqual(true)
    expect(set1.isSubset(set3)).toEqual(false)
  })
})

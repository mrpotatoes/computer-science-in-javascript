/* eslint-disable no-unused-expressions, no-console */
import SinglyLinkedListDS from './linked-list-singly'

describe('[Data Structure] Singly Linked List', () => {
  it('Get the length() of the linked list.', () => {
    const sll = new SinglyLinkedListDS()
    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    expect(sll.length()).toEqual(5)
  })

  it.skip('add(1...5) to the list', () => {
    const sll = new SinglyLinkedListDS()
    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    sll.length().should.equal(5)
    sll.toArray().should.deep.equal([1, 2, 3, 4, 5])
  })

  it.skip('remove() with no arguments should throw an error', () => {
    const sll = new SinglyLinkedListDS()
    sll.add(1)

    // Assertions
    expect(sll.remove).to.throw(/Requires data ya doof/)
  })

  it.skip('add(1...5) then repeatedly remove() front until empty', () => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    sll.length().should.equal(5)
    sll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    sll.remove(1).toArray().should.deep.equal([2, 3, 4, 5])
    sll.remove(2).toArray().should.deep.equal([3, 4, 5])
    sll.remove(3).toArray().should.deep.equal([4, 5])
    sll.remove(4).toArray().should.deep.equal([5])
    sll.remove(5).toArray().should.deep.equal([])
  })

  it.skip('add(1...5) then repeatedly remove() rear until empty', () => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    sll.length().should.equal(5)
    sll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    sll.remove(5).toArray().should.deep.equal([1, 2, 3, 4])
    sll.remove(4).toArray().should.deep.equal([1, 2, 3])
    sll.remove(3).toArray().should.deep.equal([1, 2])
    sll.remove(2).toArray().should.deep.equal([1])
    sll.remove(1).toArray().should.deep.equal([])
  })

  it.skip('add(1...5) then repeatedly remove() middle until empty', () => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    sll.length().should.equal(5)
    sll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    sll.remove(4).toArray().should.deep.equal([1, 2, 3, 5])
    sll.remove(3).toArray().should.deep.equal([1, 2, 5])
    sll.remove(2).toArray().should.deep.equal([1, 5])
    sll.remove(1).toArray().should.deep.equal([5])
    sll.remove(5).toArray().should.deep.equal([])
  })

  it.skip('add(1) and insertAfter() 3 times', () => {
    const sll = new SinglyLinkedListDS()

    sll.add(1)

    // Assertions.
    sll.insertAfter(2, 1).toArray().should.deep.equal([1, 2])
    sll.insertAfter(3, 2).toArray().should.deep.equal([1, 2, 3])
    sll.insertAfter(4, 3).toArray().should.deep.equal([1, 2, 3, 4])
    sll.length().should.equal(4)
  })

  it.skip('add(1...2) and insertAfter() the tail', () => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2)

    // Assertions.
    sll.length().should.equal(2)
    sll.insertAfter('one', 1).toArray().should.deep.equal([1, 'one', 2])
    sll.insertAfter('two', 2).toArray().should.deep.equal([1, 'one', 2, 'two'])
    sll.length().should.equal(4)
  })

  it.skip('add(1...5) and apply a callback via the traverse() method', () => {
    // eslint-disable-next-line
    const callback = (node) => { node.data += 10 }
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions.
    sll.traverse(callback).toArray().should.deep.equal([11, 12, 13, 14, 15])
  })
})

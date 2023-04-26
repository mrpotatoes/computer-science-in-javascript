/* eslint-disable no-unused-expressions, no-console */
import SinglyLinkedListDS from './linked-list-singly'

describe('[Data Structure] Singly Linked List', () => {
  it('Get the length() of the linked list.', () => {
    const sll = new SinglyLinkedListDS()
    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    expect(sll.length()).toEqual(5)
  })

  it('add(1...5) to the list', () => {
    const sll = new SinglyLinkedListDS()
    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    expect(sll.length()).toEqual(5)
    expect(sll.toArray()).toEqual([1, 2, 3, 4, 5])
  })

  it('remove() with no arguments should throw an error', () => {
    const sll = new SinglyLinkedListDS()
    sll.add(1)

    // Assertions
    expect(sll.remove).toThrow(/Requires data ya doof/)
  })

  it('add(1...5) then repeatedly remove() front until empty', () => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    expect(sll.length()).toEqual(5)
    expect(sll.toArray()).toEqual([1, 2, 3, 4, 5])

    expect(sll.remove(1).toArray()).toEqual([2, 3, 4, 5])
    expect(sll.remove(2).toArray()).toEqual([3, 4, 5])
    expect(sll.remove(3).toArray()).toEqual([4, 5])
    expect(sll.remove(4).toArray()).toEqual([5])
    expect(sll.remove(5).toArray()).toEqual([])
  })

  it('add(1...5) then repeatedly remove() rear until empty', () => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    expect(sll.length()).toEqual(5)
    expect(sll.toArray()).toEqual([1, 2, 3, 4, 5])

    expect(sll.remove(5).toArray()).toEqual([1, 2, 3, 4])
    expect(sll.remove(4).toArray()).toEqual([1, 2, 3])
    expect(sll.remove(3).toArray()).toEqual([1, 2])
    expect(sll.remove(2).toArray()).toEqual([1])
    expect(sll.remove(1).toArray()).toEqual([])
  })

  it('add(1...5) then repeatedly remove() middle until empty', () => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    expect(sll.length()).toEqual(5)
    expect(sll.toArray()).toEqual([1, 2, 3, 4, 5])

    expect(sll.remove(4).toArray()).toEqual([1, 2, 3, 5])
    expect(sll.remove(3).toArray()).toEqual([1, 2, 5])
    expect(sll.remove(2).toArray()).toEqual([1, 5])
    expect(sll.remove(1).toArray()).toEqual([5])
    expect(sll.remove(5).toArray()).toEqual([])
  })

  it('add(1) and insertAfter() 3 times', () => {
    const sll = new SinglyLinkedListDS()

    sll.add(1)

    // Assertions.
    expect(sll.insertAfter(2, 1).toArray()).toEqual([1, 2])
    expect(sll.insertAfter(3, 2).toArray()).toEqual([1, 2, 3])
    expect(sll.insertAfter(4, 3).toArray()).toEqual([1, 2, 3, 4])
    expect(sll.length()).toEqual(4)
  })

  it('add(1...2) and insertAfter() the tail', () => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2)

    // Assertions.
    expect(sll.length()).toEqual(2)
    expect(sll.insertAfter('one', 1).toArray()).toEqual([1, 'one', 2])
    expect(sll.insertAfter('two', 2).toArray()).toEqual([1, 'one', 2, 'two'])
    expect(sll.length()).toEqual(4)
  })

  it('add(1...5) and apply a callback via the traverse() method', () => {
    // eslint-disable-next-line
    const callback = (node) => { node.data += 10 }
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions.
    expect(sll.traverse(callback).toArray()).toEqual([11, 12, 13, 14, 15])
  })
})

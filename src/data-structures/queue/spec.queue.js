import QueueDS from './queue'

describe('[Data Structure] Queue', () => {
  it.skip('Get the length() of the queue', () => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    queue.length().should.equal(3)

    done()
  })

  it.skip('enqueue(1...3) items', () => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    queue.getQueue().should.deep.equal([1, 2, 3])
  })

  it.skip('enqueue(1...3) items and dequeue() 2x', () => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    queue.getQueue().should.deep.equal([1, 2, 3])
    queue.dequeue()
    queue.getQueue().should.deep.equal([2, 3])
    queue.dequeue()
    queue.getQueue().should.deep.equal([3])
  })

  it.skip('enqueue(1...3) items peek() then dequeue() and peek() again.', () => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    queue.getQueue().should.deep.equal([1, 2, 3])
    queue.peek().should.deep.equal(1)
    queue.dequeue()
    queue.peek().should.deep.equal(2)
    queue.dequeue()
    queue.peek().should.deep.equal(3)
  })
})

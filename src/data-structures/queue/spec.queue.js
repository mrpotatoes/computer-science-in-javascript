import QueueDS from './queue'

describe('[Data Structure] Queue', () => {
  it('Get the length() of the queue', () => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    expect(queue.length()).toEqual(3)
  })

  it('enqueue(1...3) items', () => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    expect(queue.getQueue()).toEqual([1, 2, 3])
  })

  it('enqueue(1...3) items and dequeue() 2x', () => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    expect(queue.getQueue()).toEqual([1, 2, 3])
    queue.dequeue()
    expect(queue.getQueue()).toEqual([2, 3])
    queue.dequeue()
    expect(queue.getQueue()).toEqual([3])
  })

  it('enqueue(1...3) items peek() then dequeue() and peek() again.', () => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    expect(queue.getQueue()).toEqual([1, 2, 3])
    expect(queue.peek()).toEqual(1)
    queue.dequeue()
    expect(queue.peek()).toEqual(2)
    queue.dequeue()
    expect(queue.peek()).toEqual(3)
  })
})

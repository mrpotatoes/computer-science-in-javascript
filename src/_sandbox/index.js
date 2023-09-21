console.clear()
console.log('SANDBOX\n-------------------------------------------------')
const YAML = require('json-to-pretty-yaml')

// leftChild = heap[2 * i]
// rightChild = heap[(2 * i) + 1]
// parent = heap[i // 2]

class Heap {
  constructor() {
    // The heap isn't initialized so let's make sure we do so the algo can
    // continue forward with at least one value which should be 0.
    this.heap = new Array()
    this.heap.push(0)
  }

  /**
   * Create a binary heap using a priority queue (array). Min Heap version.
   *
   * An interesting bit is that the children of the parent aren't required to
   * have it's nodes in the same order as a binary search tree and it will also
   * allow duplicates. For instance if the values to be added are [ 19, 16, 26 ]
   * the resulting heap will be [ 0, 16, 19, 26 ]. If the values passed in are
   * slightly different ([ 19, 26, 16 ]) the resulting heap will be thus
   * [ 0, 16, 26, 19 ]. This is okay as we want the levels below the parent node
   * to be greater than the parent but the level order needed be in a specific
   * order and repetitions are allowed.
   *
   * O(log n) → because we need to iterate through the entire array
   *
   * @param {int} val The value to insert into the heap
   *
   * @returns void
   */
  push = (val) => {
    // Now to the main part of the algorithm. We start by pushing the value into
    // the array.
    this.heap.push(val)

    // Get the current index of pushed key.
    //
    // Left, Right & Parent node math will not work if the first element isn't 0
    // so we subtrack one from the length to "ignore" the first index.
    let i = this.heap.length - 1

    // We added the new value to the array at the end but that may or may not be
    // it's correct position. This is a min heap so we'll want to percolate the
    // value in order to find it's correct index in the array.
    //
    // To achieve this we will iterate through the entire array
    //
    // For the conditions
    //    1. Array position is greater than 1
    //    2. The heap position is the parent position and we want to see if the
    //       current value is less than it's parent. Otherwise it'll just skip
    //       loop
    //
    // Note: Logging w/in this loop will only really log when the pushes are out
    // of order because of the second condition. Which is why I made sure that
    // the test array is out of order (in the tests).
    while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
      // Set the temp variable to the current index value. The first iteration
      // will be the last node as that is the one we just pushed above.
      const tmp = this.heap[i]

      // Set the current index to the parent. Reordering the previous parent to
      // it's new position.
      this.heap[i] = this.heap[Math.floor(i / 2)]

      const b = Math.floor(i / 2)

      // Here the new parent is set to the tmp variable, since it's smaller than
      // the previous, into the new position as parent.
      this.heap[Math.floor(i / 2)] = tmp

      // Rest the counter to the current parent.
      i = Math.floor(i / 2)
    }
  }

  /**
   *
   * @returns
   */
  pop() {
    if (this.heap.length == 1) {
      // Normally we would throw an exception if heap is empty.
      return -1
    }
    if (this.heap.length == 2) {
      return this.heap.pop()
    }

    let res = this.heap[1]
    // Move last value to root
    this.heap[1] = this.heap.pop()
    let i = 1
    // Percolate down
    while (2 * i < this.heap.length) {
      if (2 * i + 1 < heap.length &&
        this.heap[2 * i + 1] < this.heap[2 * i] &&
        this.heap[i] > this.heap[2 * i + 1]) {
        // Swap right child
        let tmp = this.heap[i]
        this.heap[i] = this.heap[2 * i + 1]
        this.heap[2 * i + 1] = tmp
        i = 2 * i + 1
      } else if (this.heap[i] > this.heap[2 * i]) {
        // Swap left child
        let tmp = this.heap[i]
        this.heap[i] = this.heap[2 * i]
        this.heap[2 * i] = tmp
        i = 2 * i
      } else {
        break
      }
    }
    return res
  }
}

// const vals = [ 19, 16, 26, 30, 21, 14, 19, 68, 65 ]
const vals = [14, 19, 16, 21, 26, 19, 68, 65, 30]
const heap = new Heap()

for (let i = 0; i < vals.length; i++) {
  heap.push(vals[i])
}

heap.push(17)
console.log('[BEFORE POP]')
console.table([ heap.heap, [0, 14, 17, 16, 21, 19, 19, 68, 65, 30, 26] ])

heap.pop()

console.log('[AFTER POP]')
console.table([
  heap.heap,
  [0, 16, 19, 30, 21, 26, 19, 68, 65]
])


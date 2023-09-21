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
 * @param {int[]} heap The heap to be modified
 * @param {int} val The value to insert into the heap
 *
 * @returns The modified heap.
 */
const push = (heap = [], val) => {
  // The heap to be modified must contain 0 as it's first element. If it isn't 0
  // We'll just create a new heap and set it's first index to 0. If this isn't
  // done the math to add items will be off by 1.
  if (heap[0] !== 0) {
    heap = [0, ...heap]
  }

  // Now to the main part of the algorithm. We start by pushing the value into
  // the array.
  heap.push(val)

  // Get the current index of pushed key.
  //
  // Left, Right & Parent node math will not work if the first element isn't 0
  // so we subtrack one from the length to "ignore" the first index.
  let i = heap.length - 1

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
  while (i > 1 && heap[i] < heap[Math.floor(i / 2)]) {
    // Set the temp variable to the current index value. The first iteration
    // will be the last node as that is the one we just pushed above.
    const tmp = heap[i]

    // Set the current index to the parent. Reordering the previous parent to
    // it's new position.
    heap[i] = heap[Math.floor(i / 2)]

    // Here the new parent is set to the tmp variable, since it's smaller than
    // the previous, into the new position as parent.
    heap[Math.floor(i / 2)] = tmp

    // Rest the counter to the current parent.
    i = Math.floor(i / 2)
  }

  return heap
}

// const vals = [
//   19,
//   16,
//   26,
//   30,
//   21,
//   14,
//   19,
//   68,
//   65,
// ]

// let heap = []

// for (let i = 0; i < vals.length; i++) {
//   heap = push(heap, vals[i])
// }

// console.log(heap)
// // console.log()

// // heap = heappush(heap, 17)
// // heap = push(heap, 17)
// // console.log(heap)

// // Expected output → [ 0, 14, 19, 16, 30, 21, 26, 19, 68, 65 ]

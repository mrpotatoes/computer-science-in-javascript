import { fixture1, fixture2, fixture3, fixture4, fixture5 } from '../_fixtures/sorting'
import { bubbleSort, bubbleSortRecursive } from './bubble'

describe('[Sorting] Bubble', () => {
  it('bubbleSort([...])', () => {
    // Assertions.
    expect(bubbleSort([1])).toEqual([1])
    expect(bubbleSort([1, -10])).toEqual([-10, 1])
    expect(bubbleSort(fixture1().unsorted)).toEqual(fixture1().sorted)
    expect(bubbleSort(fixture2().unsorted)).toEqual(fixture2().sorted)
    expect(bubbleSort(fixture3().unsorted)).toEqual(fixture3().sorted)
  })

  it('bubbleSortRecursive([...])', () => {
    // Assertions.
    expect(bubbleSortRecursive(fixture1().unsorted, 10)).toEqual(fixture1().sorted)
    expect(bubbleSortRecursive(fixture2().unsorted, 12)).toEqual(fixture2().sorted)
    expect(bubbleSortRecursive(fixture3().unsorted, 2)).toEqual(fixture3().sorted)
    expect(bubbleSortRecursive(fixture4().unsorted, 1)).toEqual(fixture4().sorted)
    expect(bubbleSortRecursive(fixture5().unsorted, 2)).toEqual(fixture5().sorted)
  })
})

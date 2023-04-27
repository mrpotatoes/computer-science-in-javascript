import { insertionSort } from './insertion'
import { fixture1, fixture2, fixture3 } from '../_fixtures/sorting'

describe('[Sorting] Insertion', () => {
  it('insertionSort([...])', () => {
    // Assertions.
    expect(insertionSort(fixture1().unsorted)).toEqual(fixture1().sorted)
    expect(insertionSort(fixture2().unsorted)).toEqual(fixture2().sorted)
    expect(insertionSort(fixture3().unsorted)).toEqual(fixture3().sorted)
  })
})

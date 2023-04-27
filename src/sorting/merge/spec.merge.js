import { mergeSort, merge } from './merge'
import { fixture1, fixture2, fixture3, merge1, merge2, merge3 } from '../_fixtures/sorting'

describe('[Sorting] Merge Sort!', () => {
  it('mergeSort([...])', () => {
    // Assertions.
    expect(mergeSort(fixture1().unsorted)).toEqual(fixture1().sorted)
    expect(mergeSort(fixture2().unsorted)).toEqual(fixture2().sorted)
    expect(mergeSort(fixture3().unsorted)).toEqual(fixture3().sorted)
  })

  it('merge([...], [...])', () => {
    // Assertions.
    expect(merge(merge1().unsorted.left, merge1().unsorted.right)).toEqual(merge1().sorted)
    expect(merge(merge2().unsorted.left, merge2().unsorted.right)).toEqual(merge2().sorted)
    expect(merge(merge3().unsorted.left, merge3().unsorted.right)).toEqual(merge3().sorted)
  })
})

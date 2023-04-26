import { fixture1, fixture2, fixture3, fixture4, fixture5 } from '../_fixtures/sorting'
import { quicksort, quicksortSimple, quicksortIterative } from './quicksort'

describe('[Sorting] Quick Sort!', () => {
  it('quickSort([...])', () => {
    // Assertions.
    expect(quicksort([1])).toEqual([1])
    expect(quicksort([1, -10])).toEqual([-10, 1])
    expect(quicksort(fixture1().unsorted)).toEqual(fixture1().sorted)
    expect(quicksort(fixture2().unsorted)).toEqual(fixture2().sorted)
    expect(quicksort(fixture3().unsorted)).toEqual(fixture3().sorted)
  })

  it('quicksortSimple([...])', () => {
    // Assertions.
    expect(quicksortSimple([1])).toEqual([1])
    expect(quicksortSimple([1, -10])).toEqual([-10, 1])
    expect(quicksortSimple(fixture1().unsorted)).toEqual(fixture1().sorted)
    expect(quicksortSimple(fixture2().unsorted)).toEqual(fixture2().sorted)
    expect(quicksortSimple(fixture3().unsorted)).toEqual(fixture3().sorted)
  })

  // @TODO: Oh. I forgot these.
  it.skip('partition([...])', () => { })

  // @TODO: Oh. I forgot these.
  it.skip('swap([...])', () => { })
})

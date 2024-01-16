import { selectionSort } from './selection'
import { fixture1, fixture2, fixture3 } from '../_fixtures/sorting'

describe('[Sorting] Selection', () => {
  it('Selection Sort([...])', () => {
    // Assertions.
    expect(selectionSort(fixture1().unsorted)).toEqual(fixture1().sorted)
    expect(selectionSort(fixture2().unsorted)).toEqual(fixture2().sorted)
    expect(selectionSort(fixture3().unsorted)).toEqual(fixture3().sorted)
  })
})

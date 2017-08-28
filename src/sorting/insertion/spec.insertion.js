import chai from 'chai'
import { insertionSort } from './insertion'
import { fixture1, fixture2, fixture3 } from './tests/fixtures/sorting'

chai.should()

describe('[Sorting] Insertion', () => {
  it('insertionSort([...])', (done) => {
    // Assertions.
    insertionSort(fixture1().unsorted).should.deep.equal(fixture1().sorted)
    insertionSort(fixture2().unsorted).should.deep.equal(fixture2().sorted)
    insertionSort(fixture3().unsorted).should.deep.equal(fixture3().sorted)

    done()
  })
})

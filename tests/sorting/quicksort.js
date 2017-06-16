/* eslint-disable */
import chai from 'chai'
import { fixture1, fixture2, fixture3, fixture4, fixture5 } from '../fixtures/sorting'
import { quicksort, quicksortSimple, quicksortIterative } from '../../src/sorting/quicksort'

chai.should()

describe('[Sorting] Quick Sort!', () => {
  it('quickSort([...])', (done) => {
    // Assertions.
    quicksort(fixture1().unsorted).should.deep.equal(fixture1().sorted)

    done()
  })

  it('quicksortSimple([...])', (done) => {
    // Assertions.
    quicksortSimple(fixture1().unsorted).should.deep.equal(fixture1().sorted)

    done()
  })

  // it('quicksortIterative([...])', (done) => {
  //   // Assertions.
  //   quicksortIterative(fixture1().unsorted).should.deep.equal(fixture1().sorted)
  //   done()
  // })
})

/* eslint-disable */
import chai from 'chai'
import { fixture1, fixture2, fixture3, fixture4, fixture5 } from '../fixtures/sorting'
import { quicksort, quicksortSimple, quicksortIterative } from '../../src/sorting/quicksort'

chai.should()

describe('[Sorting] Quick Sort!', () => {
  it.skip('quickSort([...])', (done) => {
    // Assertions.
    quicksort([1]).should.deep.equal([1])
    quicksort([1, -10]).should.deep.equal([-10, 1])
    quicksort(fixture1().unsorted).should.deep.equal(fixture1().sorted)
    quicksort(fixture2().unsorted).should.deep.equal(fixture2().sorted)
    quicksort(fixture3().unsorted).should.deep.equal(fixture3().sorted)

    done()
  })

  it('quicksortSimple([...])', (done) => {
    // Assertions.
    quicksortSimple([1]).should.deep.equal([1])
    quicksortSimple([1, -10]).should.deep.equal([-10, 1])
    quicksortSimple(fixture1().unsorted).should.deep.equal(fixture1().sorted)
    quicksortSimple(fixture2().unsorted).should.deep.equal(fixture2().sorted)
    quicksortSimple(fixture3().unsorted).should.deep.equal(fixture3().sorted)

    done()
  })

  // @TODO: Oh. I forgot these.
  it.skip('partition([...])', (done) => {
    done()
  })

  // @TODO: Oh. I forgot these.
  it.skip('swap([...])', (done) => {
    done()
  })
})

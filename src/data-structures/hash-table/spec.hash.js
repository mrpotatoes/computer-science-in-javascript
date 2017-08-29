import chai from 'chai'
import values from '../fixtures/hash.fixture.json'
import HashTableDS from '../../src/data-structures/hash-table/hash-table'

const expect = chai.expect

describe('[Hash test] Testing index', () => {
  it('calculateHash() keys are the same', (done) => {
    const hash = new HashTableDS()
    const hashExample = hash.calculateHash('wow')
    const hashExample2 = hash.calculateHash('wow')

    hash.calculateHash('andric here is pretty cool bro')

    expect(hashExample).to.equal(hashExample2)

    done()
  })

  it('[Hash test] insert() 1200 strings and values', (done) => {
    const hash = new HashTableDS()

    // There are 1200 entries to be saved.
    // Note: If the order of the items are changed so it will change in the bucket
    // but the key would be exactly the same.
    Object.keys(values.data).forEach((key) => {
      hash.insert(key, values.data[key])
    })

    // hash.calculateHash(values.sampleNames[1])
    // Now check to make sure that things are where they are supposed to be.

    done()
  })
})

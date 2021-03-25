import chai from 'chai'
import values from './fixture.hash.json'
import HashTableDS from './hash-table'

const expect = chai.expect

describe('[Hashing] Testing index', () => {
  it('calculateHash() keys are the same', (done) => {
    const hash = new HashTableDS()
    const hashExample = hash.calculateHash('wow')
    const hashExample2 = hash.calculateHash('wow')

    expect(hashExample).to.equal(hashExample2)
    done()
  })

  it('calculateHash() keys are different', (done) => {
    const hash = new HashTableDS()
    const hashExample = hash.calculateHash('wow')
    const hashExample2 = hash.calculateHash('wowy')

    expect(hashExample).to.not.equal(hashExample2)
    done()
  })

  it('[Hash test] insert() 1200 strings and values', (done) => {
    const hash = new HashTableDS()

    // There are 1200 entries to be saved.
    // Note: If the order of the items are changed so it will change in the bucket
    // but the key would be exactly the same. Well, better be. Gosh darnnit.
    Object.keys(values.data).forEach((key) => {
      // console.log(key, values.data[key])
      hash.insert(key, values.data[key])
    })

    // Now check to make sure that things are where they are supposed to be.
    expect(hash.get(values.sampleNames[0])).to.equal('3899252939')
    expect(hash.get(values.sampleNames[1])).to.equal('2837007250')
    expect(hash.get(values.sampleNames[2])).to.equal('9912627915')
    expect(hash.get(values.sampleNames[3])).to.equal('5765205274')
    expect(hash.get(values.sampleNames[4])).to.equal('1485017918')
    expect(hash.get(values.sampleNames[5])).to.equal('3368586480')

    done()
  })
})

/* eslint-disable no-unused-expressions, no-console */
import chai from 'chai'
import HashTableDS from './hash-table'

chai.should()
const expect = chai.expect

describe('[Data Structure] Hash Table', () => {
  it('HashTableDS(0...13) then calculateHash(w9n65bqdlkeoc) for each.', (done) => {
    const hash1 = new HashTableDS(1)
    const hash2 = new HashTableDS(2)
    const hash3 = new HashTableDS(10)
    const hash4 = new HashTableDS(20)
    const hash5 = new HashTableDS(300)

    hash1.calculateHash('w9n65bqdlkeoc').should.equal(0)
    hash2.calculateHash('w9n65bqdlkeoc').should.equal(0)
    hash3.calculateHash('w9n65bqdlkeoc').should.equal(2)
    hash4.calculateHash('w9n65bqdlkeoc').should.equal(12)
    hash5.calculateHash('w9n65bqdlkeoc').should.equal(192)

    done()
  })

  it('add(1...5) get length() and test hash keys.', (done) => {
    const hash = new HashTableDS(2)
    const fixture = [
      [
        ['w9n65bq', 3899234552933459],
        ['o0sbwg8fzu3z9p2juhgds4', 3891239252939],
        ['w9n65bqdlkeocdc6v3wel8fr', 3899345252939],
      ],
      [
        ['w9n65bqdlkeo', 3899252939123],
        ['70xdebzx9jqs7roe083u8zolxr', 3899234552939],
      ],
    ]

    hash.insert('w9n65bq', 3899234552933459)
    hash.insert('w9n65bqdlkeo', 3899252939123)
    hash.insert('o0sbwg8fzu3z9p2juhgds4', 3891239252939)
    hash.insert('w9n65bqdlkeocdc6v3wel8fr', 3899345252939)
    hash.insert('70xdebzx9jqs7roe083u8zolxr', 3899234552939)

    // Assertions.
    hash.length().should.equal(5)
    hash.storage.should.deep.equal(fixture)

    done()
  })

  it('add(1) and search()', (done) => {
    const valueToSave = 'This is it yo!'
    const hash = new HashTableDS(2)
    hash.insert('w9n65bq', valueToSave)
    hash.insert('w9n65bqdlkeo', 'second')
    hash.insert('w9n65bq2', 'third')
    hash.insert('w9n65bqdlkeocdc6v3wel8fr', 'fourth')
    hash.insert('70xdebzx9jqs7roe083u8zolxr', 'fifth')

    // Assertions.
    hash.get('w9n65bq').should.equal(valueToSave)
    expect(hash.get('this-key-does-not-exist')).to.be.undefined

    done()
  })

  it('add(1...5) and remove() each.', (done) => {
    const hash = new HashTableDS(2)
    hash.insert('w9n65bq', 'first')
    hash.insert('w9n65bqdlkeo', 'second')
    hash.insert('w9n65bq2', 'third')
    hash.insert('w9n65bqdlkeocdc6v3wel8fr', 'fourth')
    hash.insert('70xdebzx9jqs7roe083u8zolxr', 'fifth')

    // Assertions.
    hash.length().should.equal(5)
    hash.remove('w9n65bq').length().should.equal(4)
    hash.remove('w9n65bqdlkeo').length().should.equal(3)
    hash.remove('w9n65bq2').length().should.equal(2)
    hash.remove('w9n65bqdlkeocdc6v3wel8fr').length().should.equal(1)
    hash.remove('70xdebzx9jqs7roe083u8zolxr').length().should.equal(0)

    done()
  })

  it.skip('add(1...5), remove(1...4), add(1) and lastly remove()', (done) => {
    const hash = new HashTableDS(2)
    hash.insert('w9n65bq', 'first')
    hash.insert('w9n65bqdlkeo', 'second')
    hash.insert('w9n65bq2', 'third')
    hash.insert('w9n65bqdlkeocdc6v3wel8fr', 'fourth')
    hash.insert('70xdebzx9jqs7roe083u8zolxr', 'fifth')

    // Assertions.
    hash.length().should.equal(5)
    hash.remove('w9n65bq').length().should.equal(4)
    hash.remove('w9n65bqdlkeo').length().should.equal(3)
    hash.remove('w9n65bq2').length().should.equal(2)
    hash.remove('w9n65bqdlkeocdc6v3wel8fr').length().should.equal(1)

    // This one breaks it.
    hash.insert('w9 - 0xdebzx9jqs7roe - n65bq', 'another thingy')

    // hash.remove('70xdebzx9jqs7roe083u8zolxr').length().should.equal(1)
    // console.log(JSON.stringify(hash.storage, null, 2))

    done()
  })
})

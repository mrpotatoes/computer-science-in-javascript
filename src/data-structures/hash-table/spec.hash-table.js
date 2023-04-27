/* eslint-disable no-unused-expressions, no-console */
import HashTableDS from './hash-table'

describe('[Data Structure] Hash Table', () => {
  it('HashTableDS(0...13) then calculateHash(w9n65bqdlkeoc) for each.', () => {
    const hash1 = new HashTableDS(1)
    const hash2 = new HashTableDS(2)
    const hash3 = new HashTableDS(10)
    const hash4 = new HashTableDS(20)
    const hash5 = new HashTableDS(300)

    expect(hash1.calculateHash('w9n65bqdlkeoc')).toEqual(0)
    expect(hash2.calculateHash('w9n65bqdlkeoc')).toEqual(0)
    expect(hash3.calculateHash('w9n65bqdlkeoc')).toEqual(2)
    expect(hash4.calculateHash('w9n65bqdlkeoc')).toEqual(12)

    expect(hash5.calculateHash('w9n65bqdlkeoc')).toEqual(192)
  })

  it('add(1...5) get length() and test hash keys.', () => {
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
    expect(hash.length()).toEqual(5)
    expect(hash.storage).toEqual(fixture)
  })

  it('add(1) and search()', () => {
    const valueToSave = 'This is it yo!'
    const hash = new HashTableDS(2)
    hash.insert('w9n65bq', valueToSave)
    hash.insert('w9n65bqdlkeo', 'second')
    hash.insert('w9n65bq2', 'third')
    hash.insert('w9n65bqdlkeocdc6v3wel8fr', 'fourth')
    hash.insert('70xdebzx9jqs7roe083u8zolxr', 'fifth')

    // Assertions.
    expect(hash.get('w9n65bq')).toEqual(valueToSave)
    expect(hash.get('this-key-does-not-exist')).toBeUndefined()
  })

  it('add(1...5) and remove() each.', () => {
    const hash = new HashTableDS(2)
    hash.insert('w9n65bq', 'first')
    hash.insert('w9n65bqdlkeo', 'second')
    hash.insert('w9n65bq2', 'third')
    hash.insert('w9n65bqdlkeocdc6v3wel8fr', 'fourth')
    hash.insert('70xdebzx9jqs7roe083u8zolxr', 'fifth')

    // Assertions.
    expect(hash.length()).toEqual(5)
    expect(hash.remove('w9n65bq').length()).toEqual(4)
    expect(hash.remove('w9n65bqdlkeo').length()).toEqual(3)
    expect(hash.remove('w9n65bq2').length()).toEqual(2)
    expect(hash.remove('w9n65bqdlkeocdc6v3wel8fr').length()).toEqual(1)
    expect(hash.remove('70xdebzx9jqs7roe083u8zolxr').length()).toEqual(0)
  })

  it.skip('add(1...5), remove(1...4), add(1) and lastly remove()', () => {
    const hash = new HashTableDS(2)
    hash.insert('w9n65bq', 'first')
    hash.insert('w9n65bqdlkeo', 'second')
    hash.insert('w9n65bq2', 'third')
    hash.insert('w9n65bqdlkeocdc6v3wel8fr', 'fourth')
    hash.insert('70xdebzx9jqs7roe083u8zolxr', 'fifth')

    // Assertions.
    expect(hash.length()).toEqual(5)
    expect(hash.remove('w9n65bq').length()).toEqual(4)
    expect(hash.remove('w9n65bqdlkeo').length()).toEqual(3)
    expect(hash.remove('w9n65bq2').length()).toEqual(2)
    expect(hash.remove('w9n65bqdlkeocdc6v3wel8fr').length()).toEqual(1)

    // This one breaks it.
    hash.insert('w9 - 0xdebzx9jqs7roe - n65bq', 'another thingy')

    // hash.remove('70xdebzx9jqs7roe083u8zolxr').length().toEqual(1)
    // console.log(JSON.stringify(hash.storage, null, 2))
  })
})

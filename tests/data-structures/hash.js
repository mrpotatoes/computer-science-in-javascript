/* eslint-disable func-names, consistent-return */
/* const HashTable = function () {
  this.storage = []
  this.count = 0
  this.limit = 8
}

HashTable.prototype.insert = function (key, value) {
  // create an index for our storage location by passing it through our hashing function
  const index = this.hashFunc(key, this.limit)
  // retrieve the bucket at this particular index in our storage, if one exists
  // [[ [k,v], [k,v], [k,v] ] , [ [k,v], [k,v] ]  [ [k,v] ] ]
  var bucket = this.storage[index]
    // does a bucket exist or do we get undefined when trying to retrieve said index?
  if (!bucket) {
    // create the bucket
    var bucket = []
    // insert the bucket into our hashTable
    this.storage[index] = bucket
  }

  let override = false
  // now iterate through our bucket to see if there are any conflicting
  // key value pairs within our bucket. If there are any, override them.
  for (let i = 0; i < bucket.length; i++) {
    const tuple = bucket[i]
    if (tuple[0] === key) {
      // overide value stored at this key
      tuple[1] = value
      override = true
    }
  }

  if (!override) {
    // create a new tuple in our bucket
    // note that this could either be the new empty bucket we created above
    // or a bucket with other tupules with keys that are different than
    // the key of the tuple we are inserting. These tupules are in the same
    // bucket because their keys all equate to the same numeric index when
    // passing through our hash function.
    bucket.push([key, value])
    this.count++
      // now that we've added our new key/val pair to our storage
      // let's check to see if we need to resize our storage
    if (this.count > this.limit * 0.75) {
      this.resize(this.limit * 2)
    }
  }
  return this
}

HashTable.prototype.remove = function (key) {
  const index = this.hashFunc(key, this.limit)
  const bucket = this.storage[index]
  if (!bucket) {
    return null
  }
  // iterate over the bucket
  for (let i = 0; i < bucket.length; i++) {
    const tuple = bucket[i]
    // check to see if key is inside bucket
    if (tuple[0] === key) {
      // if it is, get rid of this tuple
      bucket.splice(i, 1)
      this.count--
      if (this.count < this.limit * 0.25) {
        this._resize(this.limit / 2)
      }
      return tuple[1]
    }
  }
}

HashTable.prototype.retrieve = function (key) {
  const index = this.hashFunc(key, this.limit)
  const bucket = this.storage[index]

  if (!bucket) {
    return null
  }

  for (let i = 0; i < bucket.length; i++) {
    const tuple = bucket[i]
    if (tuple[0] === key) {
      return tuple[1]
    }
  }

  return null
}

HashTable.prototype.hashFunc = function (str, max) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    hash = (hash << 5) + letter.charCodeAt(0)
    hash = (hash & hash) % max
  }
  return hash
}

HashTable.prototype.resize = function (newLimit) {
  const oldStorage = this.storage

  this.limit = newLimit
  this.count = 0
  this.storage = []

  oldStorage.forEach((bucket) => {
    if (!bucket) {
      return
    }
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      this.insert(tuple[0], tuple[1])
    }
  })
}

// HashTable.prototype.retrieveAll = () => (
//   this.storage
// )

HashTable.prototype.retrieveAll = function () {
  return this.storage
}
//*/

import chai from 'chai'
// import fs from 'fs'

const expect = chai.expect

// http://www.willvillanueva.com/javascript-hash-tables/
function HashTable () {
  this.storage = []
  this.storageLimit = 300
}

const getIndexBelowMaxForKey = (str, tableSize) => {
  let hash = 0

  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i)
    hash &= hash // Convert to 32bit integer
    hash = Math.abs(hash)
  }

  return hash % tableSize
}

HashTable.prototype.insert = function (key, value) {
  const index = getIndexBelowMaxForKey(key, this.storageLimit)

  if (this.storage[index] === undefined) {
    this.storage[index] = [[key, value]]
  } else {
    let inserted = false
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        this.storage[index][i][1] = value
        inserted = true
      }
    }
    if (inserted === false) {
      this.storage[index].push([key, value])
    }
  }
}

HashTable.prototype.retrieve = function (key) {
  const index = getIndexBelowMaxForKey(key, this.storageLimit)
  if (this.storage[index] === undefined) {
    return undefined
  }
  for (let i = 0; i < this.storage[index].length; i++) {
    if (this.storage[index][i][0] === key) {
      return this.storage[index][i][1]
    }
  }
}

HashTable.prototype.remove = function (key) {
  const index = getIndexBelowMaxForKey(key, this.storageLimit)
  if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
    delete this.storage[index]
  } else {
    for (let i = 0; i < this.storage[index]; i++) {
      if (this.storage[index][i][0] === key) {
        delete this.storage[index][i]
      }
    }
  }
}

/**
 * RANDOM STRING GENERATOR
 *
 * Info:      http://stackoverflow.com/a/27872144/383904
 * Use:       randomString(length [,"A"] [,"N"] );
 * Default:   return a random alpha-numeric string
 * Arguments: If you use the optional "A", "N" flags:
 *            "A" (Alpha flag)   return random a-Z string
 *            "N" (Numeric flag) return random 0-9 string
 */
function randomString (len, an) {
  // eslint-disable-next-line
  an = an && an.toLowerCase()
  let str = ''
  let i = 0
  const min = an === 'a' ? 10 : 0
  const max = an === 'n' ? 10 : 62

  for (;i++ < len;) {
    // eslint-disable-next-line
    let r = Math.random() * (max - min) + min << 0
    // eslint-disable-next-line no-nested-ternary
    str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48)
  }
  return str
}


describe('[Hash test]', () => {
  it('getIndexBelowMaxForKey() keys are the same', (done) => {
    const hashExample = getIndexBelowMaxForKey('wow', 12)
    const hashExample2 = getIndexBelowMaxForKey('wow', 12)

    expect(hashExample).to.equal(hashExample2)

    done()
  })

  it('Insert()', (done) => {
    const hash = new HashTable()

    for (let i = 1; i < 1200; i++) {
      hash.insert(randomString(50), randomString(10, 'n'))
    }

    // fs.writeFileSync('/tmp/hash.js', JSON.stringify(hash.storage, null, 2))
    // const contents = fs.readFileSync('/tmp/hash.js').toString()
    // console.log(contents)
    // hash.insert('Alex Hawkins', '510-599-1930')
    // hash.insert('Boo Radley', '520-589-1970')
    // hash.insert('Vance Carter', '120-589-1970')
    // console.log('hash', hash.storage)

    done()
  })

  it.skip('something', (done) => {
    const hashT = new HashTable()

    hashT.insert('Alex Hawkins', '510-599-1930')
    hashT.insert('Boo Radley', '520-589-1970')
    hashT.insert('Vance Carter', '120-589-1970')
    hashT.insert('Rick Mires', '520-589-1970')
    hashT.insert('Tom Bradey', '520-589-1970')
    hashT.insert('Biff Tanin', '520-589-1970')

    hashT.insert('Rick Mires', '650-589-1970')
    hashT.insert('Tom Bradey', '818-589-1970')
    hashT.insert('Biff Tanin', '987-589-1970')
    hashT.insert('Dick Mires', '650-589-1970')
    hashT.insert('Lam James', '818-589-1970')
    hashT.insert('Ricky Ticky Tavi', '987-589-1970')

    // hashT.remove('Rick Mires')
    // hashT.remove('Tom Bradey')
    // console.log('hashT', hashT.storage)
    console.log('hashT', JSON.stringify(hashT.retrieveAll(), null, 2))
    console.log(hashT.retrieve('Lam James'))  // 818-589-1970
    console.log(hashT.retrieve('Dick Mires')) // 650-589-1970
    console.log(hashT.retrieve('Ricky Ticky Tavi')) // 987-589-1970
    console.log(hashT.retrieve('Alex Hawkins')) // 510-599-1930
    console.log(hashT.retrieve('Lebron James')) // null

    // console.log('hashT.retrieveAll()', hashT.retrieveAll())
    done()
  })
})

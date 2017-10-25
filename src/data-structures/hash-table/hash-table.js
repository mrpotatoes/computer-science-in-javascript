/* eslint-disable consistent-return, no-console */

// Converted from: http://www.willvillanueva.com/javascript-hash-tables/
export default class HashTableDS {
  constructor (size = 300) {
    this.storage = []
    this.storageLimit = size
    this.numberOfValues = 0
  }

  /**
   * Calculate the hash for our table.
   *
   * Hashing is a technique to convert a range of key values into a range of indexes of an
   * array. We're going to use modulo operator and a more complex algo to get a range of
   * key values. Consider an example of hash table of size 20, and the following items are
   * to be stored. Item are  in the (key,value) format.
   *
   * @see https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm
   *
   * @param {string} key The key to hash.
   * @return {integer} The hash index.
   */
  calculateHash = (str) => {
    // Alternate and simpler version (faster but not as efficient):
    // str.length % tableSize
    let hash = 0

    for (let i = 0; i < str.length; i++) {
      // Go ahead and re-learn this awful, awful stuff.
      // https://code.tutsplus.com/articles/understanding-bitwise-operators--active-11301
      hash = (hash << 5) + hash + str.charCodeAt(i)
      hash &= hash // Convert to 32bit integer
      hash = Math.abs(hash)
    }

    return hash % this.storageLimit
  }

  /**
   * Save a key and value to our quick search table.
   *
   * @param {string} key The key for the value to save.
   * @param {mixed} value Anything you wanna save.
   */
  insert = (key, value) => {
    const index = this.calculateHash(key)

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

    this.numberOfValues++
  }

  /**
   * Search the hash table and get the value.
   *
   * @param {string} key The string
   * @return {mixed}
   */
  get = (key) => {
    const index = this.calculateHash(key)

    if (this.storage[index] === undefined) {
      return undefined
    }

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        return this.storage[index][i][1]
      }
    }
  }

  /**
   * Remove data/value from the table by key.
   *
   * Check if the hash and then the key exist THEN delete not before. Make sure to
   * decrement the count.
   *
   * @param {string} key The key used to hash.
   * @return {HashTableDS}
   */
  remove = (key) => {
    const index = this.calculateHash(key)

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index]
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (!this.storage[index][i]) {
          // eslint-disable-next-line
          continue
        }

        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i]
        }
      }
    }

    this.numberOfValues--

    // If the last one was cleared out let's set the array back to nill.
    if (this.numberOfValues === 0) {
      this.storage = []
    }

    return this
  }

  /**
   * Get the length of the table.
   *
   * @return {integer}
   */
  length = () => (
    this.numberOfValues
  )
}

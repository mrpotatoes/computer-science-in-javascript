import fs from 'fs'

/**
 * RANDOM STRING GENERATOR
 *
 * Info:      http://stackoverflow.com/a/27872144/383904
 * Use:       randomString(length [,"A"] [,"N"] );
 * Default:   return a random alpha-numeric string
 * Arguments: If you use the optional "A", "N" flags:
 *            "A" (Alpha flag)   return random a-Z string
 *            "N" (Numeric flag) return random 0-9 string
 *
 * Some examples to try out.
 * generateFixture()
 * console.log(('some string' << 5) + 0)
 * console.log(('some string' << 5) + 1)
 * console.log(('some string' << 5) + 2)
 */
export function randomString (len, an) {
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

// eslint-disable-next-line
const generateFixture = () => {
  const filename = './tests/fixtures/hash.fixture.json'
  const randoKeys = [1, 30, 400, 500, 838, 999]
  const hashFixture = {
    sampleNames: [],
    data: {},
  }

  for (let i = 1; i < 1200; i++) {
    const key = randomString(50)
    const value = randomString(10, 'n')

    if (randoKeys.includes(i)) {
      hashFixture.sampleNames.push(key)
    }

    hashFixture.data[key] = value
  }

  fs.writeFileSync(filename, JSON.stringify(hashFixture, null, 2))
}

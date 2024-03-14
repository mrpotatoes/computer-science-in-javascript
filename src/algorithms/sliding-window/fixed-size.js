export const sum = (arr, start, size = 3) => ({
  slice: arr.slice(start, start + size),
  sum: arr.slice(start, start + size).reduce((a, b) => a + b, 0),
})

/**
 *
 * Time complexity: O(n)
 *
 * @see https://www.freecodecamp.org/news/sliding-window-technique/
 * @param {*} arr
 * @param {*} window
 * @returns
 */
export const maxSums = (arr, window = 3) => {
  if (arr.length < window) {
    return null
  }

  const output = []
  let max = 0 // Our history

  // Entire array
  for (let i = 0; i <= arr.length - window; i++) {
    const result = sum(arr, i, window)

    max = Math.max(max, result.sum)

    output.push({
      slide: result.slice.toString().replaceAll(',', ' + '),
      total: result.sum,
    })
  }

  return {
    result: max,
    operations: output,
  }
}

export const maxSums2 = (arr, window = 3) => {
  if (arr.length < window) {
    return null
  }

  // Initial sum
  let curr = sum(arr, 0).sum
  let max = curr

  // Start the index at the window size as to not have to calculate everything, I guess.
  for (let i = window; i < arr.length; i++) {
    curr += (arr[i] - arr[i - window])
    max = Math.max(curr, max)
  }

  return max
}

/**
 * Find duplicates that are within the array window (3)
 *
 * @param {[]} nums
 * @param {int} size
 * @returns An array of duplicates found
 */
export const neighborDuplicates = (nums, size = 3) => {
  let window = new Set()
  let dupes = new Set()
  let left = 0

  for (let right = 0; right < nums.length; right++) {
    if (right - left + 1 > size) {
      window.delete(nums[left])
      left++
    }

    // Found a duplicate within the window
    if (window.has(nums[right])) {
      dupes.add(nums[right])
    }

    // Add the current number to our window
    window.add(nums[right])
  }

  return Array.from(dupes)
}

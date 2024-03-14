# [Fixed Size](https://logicmojo.com/sliding-window-algorithm)

![sliding window example diagram](https://logicmojo.com/assets/dist/new_pages/images/slidingwindow1.png)

> It is an algorithm that allows us to quickly compute things that have a fixed calculation window and retrieve the results in a more efficient way than nested loops (naive approach). This algorithm's primary goal is to reuse the result of one window to compute the result of the next window.


The `maxSums()` code that I have in [the source code](./fixed-size.js) is lengthier than the below example but essentially the same. I've only cut out a few bits. 

This naive example does two loops. It goes through each index in the array and adds the following 3 items until we reach the end of the array.

```js
export const maxSums = (arr, window = 3) => {
  // Bounds checking
  if (arr.length < window) {
    return null
  }

  let max = 0

  // T
  for (let i = 0; i <= arr.length - window; i++) {
    max = Math.max(max, sum(arr, i, window))
  }

  return max
}
```

A more clever way that substitues the dual arrays is to make a single array and do "a bit of maths". Instead of recalculating the sum in an inner loop let's, instead, subtract & add. So, because I will forget this algorithm in about 2 hours after writing this I need to make sure that I have it here fully explained. Will be heavily taking from the LogicMogo link above.

Process
1. Bounds check
1. Calculate the initial value within the window (first loop)
1. Start at the [sliding] window position 
    1. Substract the first value of the array from the previous sum
    1. Add new starting position
    1. This is new sum

The simplified code
```js
export const maxSums2 = (arr, window = 3) => {
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
```

In image[^imgs] form given this array `[20, 10, 30, 40, 20, 10]` and a window size of `3` we would do:

The initial max sum would be `20 + 10 + 30 = 60`
![](https://logicmojo.com/assets/dist/new_pages/images/slidingwindow3.png)

Setup the new state
![](https://logicmojo.com/assets/dist/new_pages/images/slidingwindow4.png)
  - Next window position => `40`
  - `40 - 20` (subtract the first index)
  - Add it to the previous `curr`
  - Check if it's bigger than previous. 

Go through all, complete loop, return thing back

## Footnotes
[^imgs]: All coming from Logicmojo's [Sliding Window Algorithm](https://logicmojo.com/sliding-window-algorithm) article

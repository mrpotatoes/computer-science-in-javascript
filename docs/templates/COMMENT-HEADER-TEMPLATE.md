# Template

This is the template for comment blocks. These should be used to explain away how a method or class works.

```
/**
 * One line short description that does not exceed 80 chars.
 *
 * The actual description goes here and will be the brunt of your explanation. Does not exceed
 * 100 characters (pref 80) and must include an example with sample data.
 *
 * A quick explanation of the idea here. You should explain the theory to yourself here and
 * so that you can understand what you're trying to accomplish.
 *
 * An example using sample data here.
 *
 * For the example array: [1, 2, 3, 4, 5]
 *    sumArray([1, 2, 3, 4, 5])
 *    (1 + sumArray([2, 3, 4, 5]))
 *    (2 + (1 + sumArray([3, 4, 5])))
 *    (3 + (2 + (1 + sumArray([4, 5]))))
 *    (4 + (3 + (2 + (1 + sumArray([5])))))
 *    (5 + (4 + (3 + (2 + (1 + sumArray([]))))))
 *
 * @see http://a-link-that-could-give-more-insight.com
 * @see http://another-link-that-could-give-more-insight.com
 * @see some-image.png
 *
 * @bigO O(log(n))
 *
 * @param {array} The first parameter
 * @param {array} The second parameter
 * @return {array}
 */
```

Actual example:
```
/**
 * Given an unsorted array: [34, 203, 3, 746, 200, 984, 198, 764, 9]
 * We want to see this sorted array: [3, 9, 34, 198, 200, 203, 746, 764, 984]
 *
 * If we output the left and right as we go to the console we'll see this:
 * [34, 203, 3, 746] [200, 984, 198, 764, 9]
 * [34, 203] [3, 746]
 * [34] [203]
 * [3] [746]
 * [200, 984] [198, 764, 9]
 * [200] [984]
 * [198] [764, 9]
 * [764] [9]
 *
 * This is why recursion is difficult to understand. What it outputs is not what we expect
 * so let us go ahead and make this easier to read and understand. We will use the above
 * fixture as an example.
 *
 * First the method will split the array in two. To note we choose right side smaller in
 * our method in the happenstance of an odd list.
 * LEFT: [34, 203, 3, 746] ----- RIGHT: [200, 984, 198, 764, 9]
 *
 * This is where things get a bit weird. In the method below you'll notice that we pass
 * the left side first and then the right side into the merge method. Since we are calling
 * mergeSort again (recursion) as we pass it into merge we'll keep doing the left side in
 * the stack as it keeps going in. Then the right side will have it's chance and then
 * it'll all bubble up. Enough of that let's go ahead and continue.
 *
 * We take the left side and we cut that up to it's own left and right and pass that into
 * the merge method again.
 *
 * LEFT: [34, 203] ----- RIGHT: [3, 746]
 * LEFT: [34]----- RIGHT: [203]
 *
 * For more information:
 * @see https://www.youtube.com/watch?v=sWtYJv_YXbo
 */

/**
 * Sort an array using the merge sort algorithm.
 *
 * Code is a simplified version of:
 * @see http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
 *
 * @param {array} The array to sort.
 * @return {array}
 */
```

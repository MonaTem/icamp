/* Pseudo code
  Use Kadane’s algorithm
  max sum of contiguous subarray at i is
  max(0, max sum of contiguous subarray at i-1 plus a[i])
  keep track of begin & end indices of subarray
  use constant space, that is do not allocate a second subarray for storage
  of results
*/

const maxSumSubArray =(a) => {
  let maxSumHere = 0;
  let maxSum = 0;
  let idx1 = 0;
  let idx2 = 0;

  for (let i = 0; i < a.length; i++) {
    maxSumHere = Math.max(0, maxSumHere + a[i]);
    if (maxSumHere === 0) {
      idx1 = i+1;
    }
    if (maxSumHere > maxSum) {
      maxSum = maxSumHere;
      idx2 = i;
    }
  }
  (idx2 > 0) ? idx1 : idx1 = 0;
  return {maxSum, idx1, idx2}
}
// maxSumSubArray([-2, -3, 4, -1, -2, 1, 5, -1]);
// maxSumSubArray([-1, -8, -2, 9, -2, 7, -2]);

// maxSumSubArray([8, 2, -8, 17, -3, 26, -5]);

/* Test cases:

Regular cases:

Array of negative and positive numbers

Max subarray begins at index 0

All positive numbers

All negative numbers

Some zeroes intersperesed

Base cases:

Array of 1 positive number

Array of 1 negative number

Array of 1 zero

Array of 2 numbers, 1 neg, 1 pos

Array of 3 numbers--neg, pos, zero

Edge cases: empty array, null

Sanity check: pass in nothing

*/

// maxSumSubArray([1, 2, 0, -7, 8, 0, 9]);
// maxSumSubArray([27, 2, 3, 62]);
// maxSumSubArray([-33, -28, -505]);

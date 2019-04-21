/* Pseudo code
  Use Kadane’s algorithm
  max sum of contiguous subarray at i is
  max(0, max sum of contiguous subarray at i-1 plus a[i])
  keep track of begin & end indices of subarray
  use constant space, that is do not allocate a second subarray for storage
  of results
*/

const maxSum =(a) => {
  let maxSumHere = 0;
  let maxSum = 0;
  let idx1 = null;
  let idx2 = 0;

  for (let i = 0; i < a.length; i++) {
   // idx1 = i;
    maxSumHere = Math.max(0, maxSumHere + a[i]);
    if (maxSumHere > maxSum) {
      maxSum = maxSumHere;
      idx2 = i;
      if (idx1 === null) idx1 = i;

      console.log(maxSum, i, idx1, idx2);

    }
  }
  return {maxSum, idx1, idx2}
}

// maxSum([-2, -3, 4, -1, -2, 1, 5, -1]);

maxSum([-1, -8, -2, 9, -2, 7, -2]);

// maxSum([8, 2, -8, 17, -3, 26, -5]);

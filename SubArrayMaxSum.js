/* Pseudo code
  Use Kadane’s algorithm
  max sum of contiguous subarray at i is
  max(0, max sum of contiguous subarray at i-1 plus a[i])
*/

const maxSum =(a) => {
  let maxSumHere = 0;
  let maxSum = 0;

  for (let i = 0; i < a.length; i++) {
    maxSumHere = Math.max(0, maxSumHere + a[i]);
    if (maxSumHere > maxSum) maxSum = maxSumHere;
  }
  return Math.max(maxSum);
}

maxSum([-2, -3, 4, -1, -2, 1, 5, -1]);

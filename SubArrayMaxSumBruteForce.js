/* Problem Description:
Find the subarray with
the maximum sum in an array of positive and negative numbers.

Questions to clarify:

Q. Can we have both negative and positive numbers in the array?
A. Yes

Q. What to return?
A. Return maximum possible sum

Q. Does an empty suarray count as a subarray?
A. No.

Q. If input empty or null what to do?
A. Throw an exception.


Solution:

Brute force solution:
Use 2 nested for loops to calculate the subarray
sums.  Save the sum if it's the max sum so far.

Time complexity: O(2^n)
Space complexity: O(1)

Pseudocode:

Outer loop: beginning of subarray (i)
Inner loop: calculate each subarray ending with j
Check if sum > max.  If so, save the sum

let maxSum = 0;

for (i = 0; i < a.length; i++)
  sum = 0
  for (j = i; j < a.length; j++)
    add a[j] to sum
    if sum > maxSum then maxSum = sum

 return sum.

Test cases:

Edge cases: input array empty or null
Base cases: 1 element (negative, positive, 0), 2 elements
Regular cases: Mixed neg and pos, all neg, all pos, all 0s

*/

const subArrayMaxSumBruteForce = (a) => {

  if (!a || a.length === 0)
     throw new Error("Input is empty or null");

  let maxSum = a[0];

  for (let i = 0; i < a.length; i++){
    sum = 0;
    // console.log(i);
    for (j = i; j < a.length; j++) {
      sum = sum + a[j];
      // console.log(sum);

      switch (true) {
         case (sum > 0):
           maxSum = Math.max(maxSum, sum);
           break;
         case (sum < 0 && maxSum === 0):
           maxSum = sum;
           break;
         case (sum < 0 && maxSum !== 0 && sum > maxSum):
           maxSum = sum;
           break;
      }
    }
    // sum = 0;
  }
return maxSum;
};

// Regular cases:
subArrayMaxSumBruteForce([1,2,-1,2,-3,2,-5]);
// subArrayMaxSumBruteForce([0, 0, 0, 0, 0, 0]);
// subArrayMaxSumBruteForce([1, 5, 4, 3, 7, 8, 91, 2]);
// subArrayMaxSumBruteForce([-3, -55, -666, -2])

// Edge cases:
// subArrayMaxSumBruteForce();
// subArrayMaxSumBruteForce([]);
// subArrayMaxSumBruteForce(null);

// Base cases:
  //  subArrayMaxSumBruteForce([11]);
  // subArrayMaxSumBruteForce([-203]);
  // subArrayMaxSumBruteForce([0]);
  // subArrayMaxSumBruteForce([-44, 2]);
  // subArrayMaxSumBruteForce([2, -44]);
  // subArrayMaxSumBruteForce([0, 0]);
  // subArrayMaxSumBruteForce([3, 99]);
  // subArrayMaxSumBruteForce([-55, -17]);

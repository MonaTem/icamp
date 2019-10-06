/* Given an array of integers both -ve and +ve (negative and positive) find a contiguous subarray that sums to zero.

Questions to clarify:

Q.  What to return?
A.  Return the begin and end indices of the subarray we found

Q.  What to return if no subarray found?
A.  Return null

Q.  What to return if input null, undefined, or empty?
A.  Return null

Q.  What if there are multiple subarrays that meet the condition?
A.  Return any one

Solution:

The brute force solution (nested loop) will have a time complexity of O(n^2) and space complexity of O(1).

The solutions using the prefix sum (cum sum) technique will have a time complexit of O(n) and O(n) space.  So better time, but takes up more space (because we store the sums in a map)

Calculate sum s[i] is zero, then a[0] through a[i] is the answer, so return 0, 1;

If no such sum exists, then see if there is a duplicate sum already in our map.

If so, for any j and k, then sum[j+1]..sum[k] is our answer.

Test cases:

Edge cases: input array empty, null, undefined

Base cases: 1 element (-ve, +ve, 0);

Regular cases: has sum, does not have sum, has sum at beginning/middle/end
*/

const ZeroSumSubarray = (a) => {
  if (!a || a.length === 0) return null;

  let sum = 0;
  let sumMap = new Map();

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (sum === 0) {
      let start = 0;
      let end = i;
      return {start, end};
    }
    if (sumMap.has(sum)) {
      let start = sumMap.get(sum) + 1;
      let end = i;
      return {start, end};
    }
    sumMap.set(sum, i);
  }
  return null;  //notfound
};

// Test cases:

// Regular cases

// Sum in middle:

// ZeroSumSubarray([2,4,-2,1,-3,5,-3]);

ZeroSumSubarray([3, 77, 82, -80, -2, 222, 333]);

// Sum at Beginning:

// ZeroSumSubarray([6, 7, -5, -1, -7, 10, 99]);

// Sum at End:

// ZeroSumSubarray([5, 7, 8, -33, 101, 45, -77, 70, 7]);

// Base cases:

// ZeroSumSubarray([0]);

// ZeroSumSubarray([-895]);

// ZeroSumSubarray([778899]);

// Edge cases:

// ZeroSumSubarray();

// ZeroSumSubarray([]);
// ZeroSumSubarray(null);

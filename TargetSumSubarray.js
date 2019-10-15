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

The solutions using the prefix sum (cumulative sum) technique will have a time complexity of O(n) and O(n) space.  So better time, but takes up more space (because we store the sums in a map)

Calculate sum s[i] (sum of the entire subarray so far, starting from index zero).  If it is zero, then a[0] through a[i] is the answer, so return 0, 1;

If no such sum exists, then see if there is a duplicate sum already in our map.

If so, for any j and k, then sum[j+1]..sum[k] is our answer.

Test cases:

Edge cases: input array empty, null, undefined

Base cases: 1 element (-ve, +ve, 0);

Regular cases: has sum, does not have sum, has sum at beginning/middle/end
*/

const TargetSumSubarray = (a, target) => {
  if (!a || a.length === 0) return null;

  let sum = 0;
  let sumMap = new Map();

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (sum === target) {
      let start = 0;
      let end = i;
      return {start, end};
    }
    if (sumMap.has(sum - target)) {
      let start = sumMap.get(sum - target) + 1;
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

// TargetSumSubarray([2, 3, 5, 9], 8);

// TargetSumSubarray([-28, 2, -3, 67, 8, -122], 64);

// Sum at Beginning:

// TargetSumSubarray([-88, 2, 405, -9128, 83], -86);

// Sum at End:

TargetSumSubarray([-345, 27, 888, 666, -97, 302], 205);

// Base cases:

// TargetSumSubarray([0], 0);

// TargetSumSubarray([0], 1);

// TargetSumSubarray([-895], -895);

// TargetSumSubarray([-895], -26);

// TargetSumSubarray([778899], 778899);

// TargetSumSubarray([778899], 923);

// Edge cases:

// TargetSumSubarray();

// TargetSumSubarray([]);
// TargetSumSubarray(null);
// TargetSumSubarray([-2, 2]);

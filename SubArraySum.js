/* Problem description:  given an array of positive
numbers, find a subarray that sums to a specific value, X

Questions to clarify:

Q.  What to return?
A.  Return the start and end indices of the subarray

Q.  What if multiple subarrays sum to target?
A.  Return any one

Q.  What if no subarrays found?
A.  Return null

Q.  What if array empty or null?
A.  Return null

Solution:

Brute force algorithm (nested loop) solves problem in O(2^n) time and O(1) space.

Using the sliding window technique, we can solve problem in O(n) time and O(1) space.

Use a start and end pointer.  Keep track of sum of subarray[start, end]

If sum < target, add 1 to end, add a[end] to sum

If sum > target, add 1 to start, subtract a[start -1] from sum

start must always be less than or equal to end

Test cases
Edge cases: empty or null array
Base cases: 1 element (equal to/less/more than target)
Regular cases: 2 elements, no subarray = target, etc.

*/

const SubArraySum = (a, target) => {

if (!a || a.length === 0) return null;

let start = 0;
let end = 0;
let sum = a[0];

while (start < a.length && end < a.length) {

  if (start > end) // start inched forward; bring end back to start
  {  end = start;
     sum = a[start];
  }

  if (sum < target) {  // expand to right
    ++end;
    sum = sum + a[end];
  } else if (sum > target) {
    ++start;
    sum = sum - a[start - 1]; // contract from left
  } else return {start, end};
}
return null;

};


// Test cases:
//
// Regular cases:

// SubArraySum([1,2,3,5,2],8);
// SubArraySum([1, 2, 3, 5, 2], 1771);
// SubArraySum([4, 5], 9);
// SubArraySum([99, 2], 99);
// SubArraySum([201, 2033], 2033);
SubArraySum([66, 10], 76);
//
// Edge cases:
//  SubArraySum();
// SubArraySum(null);
// SubArraySum([], 3);
//
// Base cases:

// SubArraySum([8], 8);
// SubArraySum([7], 8);
// SubArraySum([166], 92);

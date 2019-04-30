/* Pseudo code:
Function to find continuous sub array that adds up
to sum passed in as parameter.
Uses cumulative sum technique.
At each index i, keep track of cumulative sum. If we encounter sum X at i,
return (begin,i) as answer (where those are begin and
end indices of continuous sub array).
We also keep an array of old sums. If we find a sum again, we return that subarray.
Return first subarray that sums to the sum we seek.
Used array to store old sums instead of hash map
Because not easy to implement hash map in Javascript
Note: this doesn't work for all test cases
Sum in contiguous subarray in the middle doesn't always show correctly.
*/

const SubArrayCumSum = (a, X) => {
  if (!a) return null;
  let sumArr = [];
  let sum = 0;
  let begin = 0;
  let size = a.length;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
    if (sum === X) {
      return {begin, i};
    } else if (sumArr.includes(sum)) {
      begin = sumArr.indexOf(sum) + 1;
      return {begin, i};
           } else sumArr.push(sum);
   }
  return null;
}
// Regular case: has sum
// SubArrayCumSum([1, -2, 3, 4], 2);
// Regular case: has sum
// SubArrayCumSum([2,4,-2,1,-3,5,-3], 0);
// Regular case: does not have sum
// SubArrayCumSum([1, -2, 3, 4], 707);
// Regular case: sum at beginning:
// SubArrayCumSum([1, -2, 3, 4, 5], 1);
// Regular case: sum at end
// SubArrayCumSum([8, 10, 7, -20], 5);
// Regular case: sum in middle:
// NOTE: this test case does not work!
// SubArrayCumSum([3, -3, 8, 7, -3, 27], 15);
// Base case: single positive number in array with sum
// SubArrayCumSum([77], 77);
// Base case: single positive number in array without sum
// SubArrayCumSum([77], -88);
// Base case:  Single negative number, sith sum
// SubArrayCumSum([-707], -707);
// Base case:  negative number w no matching sum
// SubArrayCumSum([-898],-5);
// Base case: zero with sum
// SubArrayCumSum([0],0);
// Base case: zero without sum
// SubArrayCumSum([0], 7);
// Edge case: empty array
// SubArrayCumSum([]);
// Edge case: null
// SubArrayCumSum(null);
// Edge case: null array
// SubArrayCumSum([null]);
// Sanity check: pass in nothing
SubArrayCumSum();


/* Test cases:
Regular cases:

Has sum
Does not have sum
Has sum at beginning
Has sum at middle
Has sum at end

Base cases:
Single element (positive, negative, or zero);

Edge cases:  empty array, null
Sanity check: pass in nothing
*/

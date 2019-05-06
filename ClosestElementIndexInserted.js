/* Questions to ask:

1.  What to return if 2 elements are equidistant from target?  Answer: return either one
2.  How do you want to return the output?
Answer: Return the index of the closest element
3.  What to return if array null or empty?
Answer: Return -1.
/* Pseudo code
Use the record and move on technique.
Do a binary search.
Have a helper function called record.
Pass it the array, the current midpoint, the result,
and the target.
If this midpoint is closer than the last one replace
result with the current midpoint.
*/
const record = (a, mid, result, target) => {
 if (result === -1
   || Math.abs(a[mid] - target) < Math.abs(a[result] - target))
   return mid;
return result;

}

const closestElementIndexInserted = (a, target) => {
  if (!a) return -1;
  let start = 0;
  let end = a.length - 1;
  let result = -1;
  while (start <= end) {
     let mid = Math.ceil(start + (end - start)/2);
     result = record(a, mid, result, target);
  // let mid = start + ((end - start) >> 1)
    if (a[mid] > target) {
      end = mid - 1;
    } else if (a[mid] < target) {
           start = mid + 1;
           } else return mid;
  }
  console.log(a[result]);
  if (a[result] < target) {
    return result+1;
  } else return result;
};


// Test cases
// Regular case: array w/ no target match, return closest
// closestElementIndexInserted([1,2,4,5,7,8,9], 6);
closestElementIndexInserted([1, 5, 7, 8, 9], 10);
// closestElementIndexInserted([-77, -55, 8, 203, 417], -66);
// Regular case: array of positive numbers, contains target
// closestElementIndexInserted([1,2,4,7,9],2);
// Regular case: array of positive numbers, does not contain target
// closestElementIndexInserted([1,2,4,7,9], 3);
// Regular case: array of positive numbers, target at end
// closestElementIndexInserted([1,2,4,7,9], 9);
// Regular case: array of positive and negative numbers, // contains target
// closestElementIndexInserted([-77, -50, -2, -1, 5], -1);
// Regular case: array of positive and negative numbers,
// no target
// closestElementIndexInserted([-1, 8],-8);
// Regular case: array of negative numbers, contains target
// closestElementIndexInserted([-8, -6, -3], -6);
// Regular case: array of negative numbers, no target
// closestElementIndexInserted([-88, -77, -44], -5);
// Base case: array of one positive number, contains target
// closestElementIndexInserted([7],7);
// Base case: array of one positive number, no target
// closestElementIndexInserted([77], 707);
// Base case: array of one negative number, contains target
// closestElementIndexInserted([-88], -88);
// Base case: array of one negative number, no target
// closestElementIndexInserted([-7889],-578);
// Base case: array of a zero, contains target
// closestElementIndexInserted([0], 0);
// Base case: array of a zero, no target
// closestElementIndexInserted([0], -88);
// Edge case: empty array
// closestElementIndexInserted([]);
// Edge case: null
// closestElementIndexInserted(null);
// Sanity check: pass in nothing
// closestElementIndexInserted();

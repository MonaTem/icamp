/* Pseudo code:
For an array with positive numbers only
Pass in a specific value, X
Find the first subarray that sums to that value
Return the start and end indexes of the subarray or
If no result found, return -1, -1
*/


const subArraySumtoSpecificValue = (a, X) => {
  let start = 0;
  let end = -1;
  let sum = 0;

  if (!a) return [-1, -1];

  while (start < a.length && end < a.length) {
    if (sum < X){
       end++;
       if (end < a.length) sum = sum + a[end];
       // console.log(sum, end);
    } else if (sum > X)  {
       start++;
       if (start < a.length) sum = sum - a[start];
    } else return ({start, end});
  }
  return [-1, -1];

}

// subArraySumtoSpecificValue([2,1,4,5,3,5,1,2,4], 12);

// subArraySumtoSpecificValue([2,1,4,5,3,5,1,2,4], 13);

// subArraySumtoSpecificValue([1, 6, 7], 2007);

// subArraySumtoSpecificValue([2003], 2003);

// subArraySumtoSpecificValue([2003], 77);

// subArraySumtoSpecificValue([],0);

// subArraySumtoSpecificValue([]);

// subArraySumtoSpecificValue(null);

subArraySumtoSpecificValue();

/* Test cases:
Regular cases:

An array of positive numbers with a subarray that will sum to X

An array of positive numbers with a subarray beginning in index 0 that will sum to X

An array of positive numbers with no subarray that sums to X

Base cases:

An array with 1 number that sums to X

An array with 1 number that doesn’t sum to X

Edge cases:

Empty array with zero sum

Empty array, no sum

Null

Sanity check:  Pass in nothing

*/

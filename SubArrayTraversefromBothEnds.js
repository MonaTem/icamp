/* Pseudo code:

Pseudo code for SubArrayTraversefromBothEnds:

Check for null or empty array.  If so, return null.

Starting from beginning, find first dip.

Starting from end, find first bump.

If no dip or bump, then array is already sorted, so return null.

Create subarray to be sorted.

Look for max and min in subarray.

Go to the left from beginning of subarray.  If find a number greater than or equal to min, extend subarray to the left.

Go to the right from end of subarray.  If find a number less than or equal to max, extend subarray to the right.

Return the beginning index i and ending index j of subarray.


*/

subArrayTraversefromBothEnds = (arr) => {
  let i = 0;
  let j = 0;
  let subArray = [];

 if (!arr) return null;

 // find first dip from beginning

 for (i = 0; i <= arr.length - 1; i++) {
   if (arr[i+1] < arr[i]) {
      break;
   }
 }

// find first bump from end

 for (j = arr.length - 1; j >= 0; j--) {
  if (arr[j -1]  > arr[j]) {
     break;
  }
 }



  // no dip or bump

  if (i >= arr.length - 1 && j <= 0) {
    return null;
  }

  for (k = i; k <=j; k++) {
    subArray.push(arr[k]);

  }


  let min = Math.min(...subArray);
  let max = Math.max(...subArray);

  while (arr[i-1] >= min) {
    i--;
  }

  while (arr[j+1] <= max) {
    j++;
  }

  return {i: i, j: j};

}

/* Test cases */

// Regular case: array with unsorted subarray in middle

// subArrayTraversefromBothEnds([1,3,5,2,6,4,7,8,9]);

// Regular case: array already sorted

// subArrayTraversefromBothEnds([1,2,3,4,5,6,7,8,9]);

// Regular case: sorted portion at beginning:

// subArrayTraversefromBothEnds([1,2,3,4,5,8,6,9,7]);

// Regular case: sorted portion at end:

// subArrayTraversefromBothEnds([3,1,5,2,4,6,7,8,9])

// Edge case: null array

// subArrayTraversefromBothEnds(null);

// Edge case: empty array

// subArrayTraversefromBothEnds([]);

// Base case: one element:

// subArrayTraversefromBothEnds([7]);

// Base case: two elements, unsorted:

// subArrayTraversefromBothEnds([88, 52]);

// Base case: two elements, sorted:

// subArrayTraversefromBothEnds([77, 903]);

// Oddball case:  more than one unsorted portion separated by sorted ones:

// subArrayTraversefromBothEnds([1, 2, 8, 5, 7, 9, 10, 3, 4]);

// Oddball case: duplicate numbers

subArrayTraversefromBothEnds([1, 1, 3, 3, 2, 2, 7, 7, 5, 5]);

// Sanity check--pass in nothing

subArrayTraversefromBothEnds();

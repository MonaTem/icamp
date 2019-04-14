/* Pseudo code for Dutch National Flag problem

Check for null array or X out of bounds.

Set low & mid to -1;

Set high to array length.

pivot = a[X];

Loop through array until mid & high boundaries meet.

If mid + 1  > pivot, then swap high-1 with mid +1  ; decrease high;

If mid+1  = pivot, increase mid.

If  mid+1  < pivot,  swap low+1 & mid+1 then increase low, mid;

When loop is done, return array.

*/

const dutchNationalFlag = (a, X) => {

  if (a == null || X < 0 || X > a.length) return a;
  let low = -1;
  let mid = -1;
  let high = a.length;
  let pivot = a[X];

  while (mid+1 < high) {
    switch (true) {
      case a[mid+1] > pivot:
        let temp2 = a[high-1];
        a[high-1] = a[mid+1];
        a[mid+1] = temp2;
        high--;
        break;

      case a[mid+1] === pivot:
        mid++;
        break;

      case a[mid+1] < pivot:
        let temp = a[mid+1];
        a[mid+1] = a[low+1];
        a[mid+1] = temp;
        low++;
        mid++;
        break;

    }
  }

return a;
}

// Regular case..multiple elements in pivot
// Expected result:  [3, 2, 3, 4, 4, 4, 4, 5, 6, 8, 6]

dutchNationalFlag([3, 5, 2, 6, 8, 4, 4, 6, 4, 4, 3], 5)

/* Test cases:
Regular case: single element in pivot, duplicate pivots, array with no elements less than pivot, array with no elements > pivot
Base case: single element less, equal, greater; 2 elements less equal greater
Edge cases: null array, X < 0, X > array length, empty array, array with 1 element
Sanity check: pass in nothing
*/

// Regular case: 1 pivot element
//  dutchNationalFlag([1, 3, 55, 7, 89, 2], 2);

// Regular case: array with no elements < pivot
// dutchNationalFlag([99, 88, 44, 11, 101], 3);

// Regular case: array with no elements > pivot
// dutchNationalFlag([ 55, 66, 77, 27, 8], 2);

// Base case: single element less than, greater than, equal
// dutchNationalFlag([222, 2700, 1013], 2);

// Base case: two elements less than, greater than, equal
// dutchNationalFlag([333, 4406, 17, 2501, 8899, 2501], 3)

// Edge case: null array
// dutchNationalFlag(null, 0);

// Edge case: empty array
// dutchNationalFlag([], 0);

// Edge case: array with 1 element:
// dutchNationalFlag([7], 0);

// Edge case: X < 0
// dutchNationalFlag([2, 5, 8], -3);

// Edge case: X > array.length
//

// Sanity check: pass in nothing
// dutchNationalFlag();

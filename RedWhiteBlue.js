/* Description
Given an array with n objects colored Red, White or Blue, sort them so that objects of the same color are adjacent, with the colors in the order Red, White and Blue. Assume the colors are given as numbers - 0 (Red), 1 (White) and 2 (Blue). For example, if A = [1,0,1,2,1,0,1,2], Output = [0,0,1,1,1,1,2,2].
Similar to Dutch National Flag problem, but with no index
passed in.
*/

/* Pseudo code
Check if null array passed in.  If so pass back array.

If not:

low = -1
mid = -1
high = A.length

Loop through array while mid + 1 < high
If A[mid+1] = 0
  swap A[mid+1] with A[low+1];
  increase low
If A[mid+1] = 1
  increase mid
If A[mid+1] = 2
   swap A[mid+1] with A[high-1]
   decrease high

Return updated array A.
*/

const RedWhiteBlue = (A) => {
  if (!A) return null;

  let low = -1;
  let mid = -1;
  let high = A.length;

  while (mid + 1 < high) {
    switch(A[mid+1]) {
      case 0:
        let temp = A[low+1];
        A[low+1] = A[mid+1];
        A[mid+1] = temp;
        low++;
        mid++;
        break;
      case 1:
         mid++;
         break;
      case 2:
         let temp2 = A[high-1];
         A[high-1] = A[mid+1];
         A[mid+1] = temp2;
         high--;
         break;
    }
  }
  return A;
}

/* Test cases
   Regular case: Array with 1s, 0s, and 2s interspersed
   Regular case: Array with 0s, 1s, 2s already sorted
   Regular case: Array with no 0s, sorted and unsorted
   Regular case: array with no 1s, sorted and unsorted
   Regular case: array with no 2s, sorted and unsorted

   Base case:  Array with 1 each of 0, 1, 2 unsorted
   Base case:  Array with one each of 0, 1, 2 sorted
   Base case:  Array with 2 each of 0, 1, 2 unsorted
   Base case:  Array with 2 each of 0, 1, 2 sorted

   Edge cases: null array,empty array, array with just 0, just 1, just 2, pass in number instead of array

   Sanity check: pass in nothing

*/
// Regular case: Array with 1s, 0s, and 2s interspersed
RedWhiteBlue([1,0,1,2,1,0,1,2]);
// Regular case: Array with 0s, 1s, 2s already sorted
// RedWhiteBlue([0, 0, 0, 1, 1, 2, 2, 2, 2]);
// Regular case: Array with no 0s, unsorted
// RedWhiteBlue([1, 2, 1, 1, 1, 2, 1]);
// Regular case: Array with no 0s, sorted:
// RedWhiteBlue([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]);
// Base case: Array with 1 each of 0, 1, 2 unsorted
// RedWhiteBlue([2, 0, 1]);
// Base case:  Array with 2 each of 0, 1, 2 unsorted
// RedWhiteBlue([1, 2, 0, 0, 2, 1]);
// Edge case: pass in null
//RedWhiteBlue(null);
// Edge case: empty array:
// RedWhiteBlue([]);
// Edge case: array with just 1
// RedWhiteBlue([1]);
// Edge case: pass in number instead of array:
// RedWhiteBlue(778);
// Sanity check: pass in nothing
// RedWhiteBlue();

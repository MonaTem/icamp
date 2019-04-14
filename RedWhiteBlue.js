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

Loop through array
If A[i] = 0
  swap A[i] with A[low+1];
  increase low
If A[i] = 1
  increase mid
If A[i] = 2
   swap A[i] with A[high-1]
   decrease high

Return updated array A.
*/

const RedWhiteBlue = (A) => {
  if (A === null) return A;

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

RedWhiteBlue([1,0,1,2,1,0,1,2]);

/* Search for a peak in an unsorted array of positive numbers.  A peak is an element of the array such that for a[i], if a[i - 1] is < a[i] and a[i+1] is < a[i], a[i] is a peak.

Also assume that a[-1] and a[length] are negative infinity (-∞). So A[0] can be a peak if A[1] < A[0].

A = [1,3,4,5,2] => Peak = 5
A = [5,3,1] => Peak = 5
A = [1,3,5] => Peak = 5

We can possibly use recursion to do this.  Use Divide and Conquer Algorithm.

Q.  What to return if input array is empty or null?

A.  -1

Q.  How to return output?

A.  Return peak element (not index, actual element)

Q.  Are negative numbers allowed?

A.  No.

*/

const SearchforPeak = (a, low, high) => {
  if (!a || a.length < 1 || low == undefined || high == undefined) return -1;
  let mid = Math.floor(low + (high - low)/2);
  if ((mid === 0 && a[1] < a[0]) || (a[mid-1] < a[mid ] && a[mid+1] < a[mid]) || (mid > 0 && mid === high && a[mid-1] < a[mid])) {
    return a[mid];
  } else if (mid > 0 && (a[mid] < a[mid-1])) {
    return SearchforPeak(a, low, mid-1);
    } else if (mid > 0 && (a[mid] < a[mid+1])) {
        return SearchforPeak(a, mid+1, high);
      }
return -1;
};

// SearchforPeak([1,3,4,5,2], 0, 4);
// SearchforPeak([1, 3, 20, 4, 1, 0], 0, 5);
// SearchforPeak([5,3,1], 0, 2);
// SearchforPeak([1,3,5], 0, 2);
// SearchforPeak([1,2,3], 0, 2);
// SearchforPeak([1,2,3]);
// SearchforPeak([1, 2, 3], 0);
// SearchforPeak([1, 2, 3], 0, 4);
// SearchforPeak([], 0, 0);
SearchforPeak([3, 4, 6, 7, 8, 19, 22], 0, 6);

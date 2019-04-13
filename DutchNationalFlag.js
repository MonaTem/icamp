/* Pseudo code for Dutch National Flag problem

Set low & mid to -1;

Set high to array length.

Current element  = mid + 1;

Loop through array until mid & high boundaries meet.

If  current element  < pivot,  swap low+1 & current element then increase low, mid;

If current  element  > pivot, then swap high-1 with current element ; decrease high;

If current element  = pivot, increase mid:

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
        let temp = a[low+1];
        a[low+1] = a[mid+1];
        a[mid+1] = temp;
        low++;
        mid++;
        break;

    }
  }

return a;
}

// Regular case
// Expected result:  [3, 2, 3, 4, 4, 4, 4, 5, 6, 8, 6]

dutchNationalFlag([3, 5, 2, 6, 8, 4, 4, 6, 4, 4, 3], 5)

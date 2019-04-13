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
  let low = -1;
  let mid = -1;
  let high = a.length;
  let pivot = a[X];

  while (mid+1 < high) {
    let currentElement = a[mid+1];
    console.log(currentElement);
    switch (true) {
      case currentElement > pivot:
        let temp2 = a[high-1];
        a[high-1] = currentElement;
        a[mid+1] = temp2;
        high--;
        break;

      case currentElement === pivot:
        mid++;
        break;

      case currentElement < pivot:
        let temp = a[low+1];
        a[low+1] = currentElement;
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

subArrayTraversefromBothEnds = (arr) => {
  let i = 0;
  let j = 0;
  let subArray = [];

 if (!arr) return null;

 for (i = 0; i <= arr.length - 1; i++) {
   if (arr[i+1] < arr[i]) {
      break;
   }
 }


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

subArrayTraversefromBothEnds([77, 903]);

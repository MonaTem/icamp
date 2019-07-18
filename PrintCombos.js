/* Problem description: Given an array of integers, print all combinations of size x

Q.  Will there be any duplicates?
A.  No.

Q.  What to print if X greater than length of array?
A.  Print nothing, as there will be no valid combos

Q.  What to print if the array is empty or undefined?
A.  Print nothing, as there will be no valid combinations.

Q.  What to print if X undefined or not a positive number?
A.  Print nothing, as there will be no valid combos.

Pseudocode:

There will be a driver function PrintCombos, and a recursive helper function, PrintCombosHelper.

If the buffer is full, then the helper function prints the contents of the buffer.  Otherwise, the helper function finds candidates for the buffer.


Test cases:

Regular cases:

X is equal to a.length;  X is less than a.length

Base cases:

a is size 1 or 2, X is 1

Edge cases:

Nothing passed in, a is empty or undefined, X is undefined or negative, X is 0, X is greater than a.length

*/

const PrintCombosHelper = (a, buffer, startIndex, bufferIndex) => {

  // termination cases: buffer full, startindex out of bounds


  if (bufferIndex === buffer.length) {
    console.log(buffer);
    return;
  }

  if (startIndex === a.length) {
    return;
  }
  // find candidates to place into buffer

  for (let i = startIndex; i < a.length; i++) {
    buffer[bufferIndex] = (a[i]);

  // recurse to next buffer index
  PrintCombosHelper(a, buffer, i+1,  bufferIndex+1);
  }

};

const PrintCombos = (a, X) => {

  if (!a || a.length <= 0 || X === undefined || X <= 0) return;

  let buffer = new Array(X);

  PrintCombosHelper(a, buffer, 0, 0);

};

// Test cases
// Regular cases:
// X less than a.length
// PrintCombos([1, 2, 3, 4, 5, 6], 3);
// PrintCombos([2,3,4,5],3);
PrintCombos([1,2,3,4,5,6,7],3);
// X Equal to a.length
// PrintCombos([1,2,3,4,5,6,7],7);
//
// Base cases
// X is 1
// PrintCombos([1,2,3],1);
// a is size 1
// PrintCombos([22],1);
// a is size 2
// PrintCombos([11, 37], 1);
//
// Edge cases:
// Nothing passed in:
// PrintCombos();
// a is empty
// PrintCombos([], 2);
// a is undefined
// PrintCombos(7);
// X is undefined
// PrintCombos([22, 44, 55]);
// X is negative
//PrintCombos([22,45], -8);
// X is zero
//PrintCombos([22,45,67],0);
// X greater than array length
// PrintCombos([1,2,3,4,5,6,7], 23);

/* Problem description:
   Given array a, print all permutations of size x.

   Questions and answers:

   Q.  Will there be any duplicates in the input array?
   A.  No.

   Q.  If the input is an empty array or just empty,
       should we throw an exception or just print nothing?
   A.  Print nothing.

   Q.  If x is bigger than the length of a, what to do?
   A.  Print nothing

   Solution:

   Place candidates in the buffer and print the buffer when it is full.

   Use a recursive helper function to find candidates.
   Keep track of whether the candidate digit is already in the array.

   Pseudocode:

   PrintPermsHelper(a, buffer, bufferIndex, isInBuffer)

   If buffer is full, print buffer & return.

   for i from 0 to length of a:
      if isInBuffer[i] is false, place a[i] in buffer[bufferIndex]
      set isInBuffer[i] to true
      // recurse to next slot in buffer
      PrintPermsHelper(a, buffer, bufferIndex+1, isInBuffer)
      set isInBuffer[i] to false


   Test cases:

   Regular case:  x less than or equal to length of a

   Base cases: a length 1 or 2, x is 1

   Edge cases: a empty, or empty array or null; x undefined

   Big O:

   Time complexity: exponential O(2^n)
   Space complexity: O(X) for both buffer allocation and recursion stack

*/

const printPermsHelper = (a, buffer, bufferIndex, isInBuffer) => {

  if (bufferIndex === buffer.length) {
    console.log(buffer);
    return;
  }

  for (i = 0; i < a.length; i++) {
    if (isInBuffer[i] === false) {
      buffer[bufferIndex] = a[i];
      isInBuffer[i] = true;
    }
    printPermsHelper(a, buffer, bufferIndex+1, isInBuffer);

    isInBuffer[i] = false;

  }


};

const printPerms = (a, x) => {
      if (!a || !x) return;
      if (x > a.length) return;
      let buffer = new Array(x);
      let isInBuffer = new Array(a.length);
      printPermsHelper(a, buffer, 0, isInBuffer);
};

printPerms([1,2,3], 3);

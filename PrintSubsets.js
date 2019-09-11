/*
Problem description:
Given an array a, print all possible subsets of the array

Questions and Answers:

Q.  Do the printed subsets include the empty set?
A.  Yes

Q.  Will the input have any duplicates?
A.  No

Q.  If the input is an empty array, do we print the empty
    array as its subset?
A.  Yes

Q.  If the input is empty, do we print anything?
A.  Just print nothing.

Solution:

Modify the print all combinations of array size X code.
Move the print statement outside of the if statement...so don't just print when the buffer is full...print on each recursion (at beginning of helper function).

Pseudocode:

Function printSubsets(a)

buffer is length of a
printSubsetsHelper(a, buffer, 0, 0)

Function printSubsetsHelper(a, buffer, aIndex, bufferIndex)

Print buffer

buffer full: return

startIndex out of bounds: return

for i: startIndex to a.length - 1
place a[i] into buffer(bufferIndex)
printSubsetsHelper(a, buffer, aIndex+1, bufferIndex+1)

Also there will be another helper function printArray.
This mimics the PrintArray in Java and will print the array regardless of its length (the array length varies)

Test:

Edge cases: a empty or null
Base cases: a size 1 or 2
Regular case: a size greater than 2

*/

const printArray = (buffer, bufferIndex) =>
{
  console.log(buffer.slice(0, bufferIndex));
  return;
};

const printSubsetsHelper =
(a, buffer, startIndex, bufferIndex) => {
  // Print on every recursion
  printArray(buffer, bufferIndex);

  // termination cases: buffer full, startindex out of bounds
  if (bufferIndex === buffer.length)
    return;

  if (startIndex === a.length) {
    return;
  }
  // find candidates to place into buffer

  for (let i = startIndex; i < a.length; i++) {

    buffer[bufferIndex] = a[i];

    printSubsetsHelper(a, buffer, i+1, bufferIndex+1);
  }
};

const printSubsets = (a) => {

  if (!a) return;

  let buffer = new Array(a.length);

  printSubsetsHelper(a, buffer, 0, 0);

};
// Regular cases:
printSubsets([1, 2, 3]);
// printSubsets([4,6,77,909]);

// Base cases:

// printSubsets([512]);
// printSubsets([2, 403]);

// Edge cases:
// printSubsets();
// printSubsets(null);

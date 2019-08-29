/*  Problem description: Move all zeroes to the beginning of an array in place (do not allocate a second array).  Use the array partitioning technique.

Questions:

Q. What to return if nothing passed in or empty array?

A.: Zeroes

Q.  Can array contain negative numbers?

A.  In theory yes.  For purposes of this exercise, no.

Q.  Do non zero elements need to be in the same order as before the rearrangement?

A.  No.

Pseudocode:

Boundary = 0
i = 0
loop:

if a[i] === 0, swap a[i] and a[boundary]
add 1 to boundary

Test cases:

Regular case:  some zeroes interspersed with other numbers in array

Base cases: 1 number in array, no zeroes
            1 element in array, zeroes
            2 elements in array, 1 zero, 1 non zero

Edge cases: No zeroes
            all zeroes
            Zeroes already at bottom of array
            Nothing passed in
            Empty array

*/

const MoveZeroesToArrayBeginning = (a) => {

  if (!a || a.length <= 0) return -1;

  let boundary = 0;

  for (let i = 0;  i < a.length; i++) {
    if (a[i] === 0) {
      a[i] = a[boundary];
      a[boundary] = 0;
      boundary++;
    }
  }
  console.log(a);
}

// Regular cases

//MoveZeroesToArrayBeginning([1, 2, 0, 4, 5, 0]);
// MoveZeroesToArrayBeginning([4,2,0,1,0,3,0]);

// Base cases:

// MoveZeroesToArrayBeginning([1]);
// MoveZeroesToArrayBeginning([0]);

// Edge cases:

// MoveZeroesToArrayBeginning();
// MoveZeroesToArrayBeginning([]);
// MoveZeroesToArrayBeginning([4,2,1,3]);
// MoveZeroesToArrayBeginning([0, 0, 0, 0, 0, 0]);
// MoveZeroesToArrayBeginning([[0,0,0,4,2,1,3] ])

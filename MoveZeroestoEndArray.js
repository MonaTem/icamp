/* Pseudo code
   Maintain count of non zero elements in array A.  Move
   each non zero element to A[count-1].  When
   done counting non zero elements (loop until
   A.length - 1), then make the rest of the array
  (from count until arr.length - 1) zeroes;
  Return updated array.
  */

  const moveZeroestoEndArray = (A) => {
    let count = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] !== 0) {
        count++;
        A[count-1] = A[i];
      }
    }

    for (let i = count; i < A.length; i++) {
      A[i] = 0;
    }

    return A;
  }

  moveZeroestoEndArray([2,3,0,3,0,1,0]);

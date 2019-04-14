/* Pseudo code
   Maintain count of non zero elements in array A.  Move
   each non zero element to A[count-1].  When
   done counting non zero elements (loop until
   A.length - 1), then make the rest of the array
  (from count until arr.length - 1) zeroes;
  Return updated array.
  */

  const moveZeroestoEndArray = (A) => {

    if (!A) return null;

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



  /* Test cases:
  Regular cases: zeroes interspersed thoughout array,
  all zeroes already at end of array, all zeroes at beginning of array, no zeroes
  Base case: 2 element array with zero at beginning, 2 element array with zero at end
  Edge cases: null array, empty array, 1 element array,
  non array number
  Sanity check: pass in nothing
  */
  // Regular case: zeroes interspersed through array
  moveZeroestoEndArray([2,3,0,3,0,1,0]);
  // Regular case: all zeroes already at end:
  // moveZeroestoEndArray([2,3,1,7,0,0,0]);
  // Regular case: all zeroes at beginning of array:
  // moveZeroestoEndArray([0, 0, 0, 55, 101, 1347, 98]);
  // Regular case: no zeroes
  // moveZeroestoEndArray([778, 32, 99778, 5, 10, 223]);
  // Base case: 2 element array with zero at beginning
  // moveZeroestoEndArray([0, 96504]);
  // Base case: 2 element array with zero at end
  // moveZeroestoEndArray([882, 0]);
  // Edge case: null array
  // moveZeroestoEndArray(null);
  // Edge case: empty array
  // moveZeroestoEndArray([]);
  // Edge case: 1 element
  // moveZeroestoEndArray([632]);
  // // Edge case: non array number
  // moveZeroestoEndArray(632);
  // Sanity check: pass in nothing
  // moveZeroestoEndArray();

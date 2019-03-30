/* Using reverse traversal, do the following:
   For an array of numbers, if the number is
   even, add that number twice to the end of the
   array.  If the number is odd, just add the
   number once to the end of the array.  */

/* Test cases:
   Regular cases: mixed (odd and even numbers), all odd numbers, all even numbers
   Base cases: 1 odd number, 1 even number
   Corner or edge cases: null, empty array, array with only blanks */


//Regular case: mixed odd and even numbers:
const arr = [1, 2, 5, 6, 8, -1, -1, -1];
//Regular case: all odd numbers:
// const arr = [1, 3, 7, 9, 5];
//Regular case: all even numbers:
// const arr = [6, 10, 12, 14, 0, -1, -1, -1, -1, -1];
//Base case: 1 even number:
// const arr = [4, -1];
//Base case: 1 odd number:
// const arr = [3];
//Corner case: null:
// const arr = null;
//Corner case: empty array:
// const arr = Array(10);
//Corner case: empty array:
// const arr = [];
//Corner case: array with only blanks:
// const arr = ['','',''];
//Sanity check: nothing passed in:
// cloneEvenNumbers();

const getLastNumber = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
     if (arr[i] !== -1) return i;
  }
  return -1;
}

const cloneEvenNumbers = (arr) => {
  if (arr) {
    let end = getLastNumber(arr);
    let i = arr.length - 1;
    if (end >= 0) {
      while (i >= 0) {
        if (arr[end] !== "" && arr[end] % 2 === 0) {
          arr[i] = arr[end];
          i--;
          arr[i] = arr[end];
          i--;
          end--;
        } else {
          arr[i] = arr[end];
          i--;
          end--;
          }
      }
    }
  }
 return arr;
}

cloneEvenNumbers(arr);

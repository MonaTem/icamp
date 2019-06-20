
/* Problem description:

Find the target element in an array of unknown length.

Solution: To find the array's length, start with high of 1 and keep doubling it until the index is invalid and therefore throws an exception.

So then we know that the last index exists between high/2 (the last value of index before we doubled it) and the high point (the current value of the index which threw the exception).

We then do a binary search between index zero and the last index  to find the target.

This performs in O(log n) time complexity.

Q.  What happens if we access an index that's out of bounds?

A. We throw an exception

Q. How to return the output?

A. Return the index of the target

Q. What if the target isn't found?

A. Return -1.

Functions:

There will be 3 functions:

The main one will be findwithUnknownLength.

The first helper function will be binarySearchforLastIndex.

The second helper function will be binarySeachWithinRange.

Pseudocode:

If array or target empty or null or nothing passed in, return -1.

high = 1;

Multiply high by 2.
keep checking until  a[i] is undefined (use a try/catch block to check this);

Then...do a binary search for the last index in range defined by high = a[i] where undefined and low = high/2.

Once the last index is found, do a binary search between index zero and the last index to find the target.

If target found, return target
Otherwise return -1

Test cases:

Regular cases: target exists in array, array does not have target

Base cases: 1 element with target, without target;  ditto for 2 elements;

Edge cases:  nothing passed in, aray null or undefined or empty, target null or empty

*/

const binarySearchforLastIndex = (a, low, high) => {

  while (low <= high) {
     let mid = Math.floor(low + (high - low)/2);

     try {
      let temp = a[mid];
      if (!temp)
        throw new Error("array index is out of bounds");
     }
     catch(error) { // mid is out of bounds go to lower half
      high = mid - 1;
      continue;
     }
     try {
      let temp = a[mid+1];
      if (!temp)
        throw new Error("array index is out of bounds");
     }
     catch(error) { // mid + 1 is out of bounds.  mid is last index

       return mid;
     }
     low = mid + 1; //both mid and mid + 1 are in array,  so mid  is not the last index
  }
  return -1;  // this array has no last index
};


const binarySearchWithinRange = (a, target, low, high) => {

  while (low <= high) {
     let mid = Math.floor(low + (high - low)/2);


    if (a[mid] > target) {
      high = mid - 1;

    } else if (a[mid] < target) {
           low = mid + 1;

           } else {


             return mid;
             }
  }
  return -1;
};


const findWithUnknownLength = (a, target) => {
   if (!a || a.length < 1 || !target || target.length < 1)    return -1;
  let high = 1;
  let lastIndex = -1;
  while (true) {
    try {
      let temp = a[high];
      if (!temp)
        throw new Error("array index is out of   bounds");
    }
    catch(error) {
      lastIndex =
      binarySearchforLastIndex(a, Math.floor(high/2),high);

      break;
    }
  high *=2;

  }

  return binarySearchWithinRange(a, target, 0, lastIndex);
};
// findWithUnknownLength([-202, -101, 2, 4, 27, 31, 55, 237, 345, 2020, 6780, 52078], 2020);

// findWithUnknownLength([-202, -101, 2, 4, 27, 31, 55, 237, 345, 2020, 6780, 52078], 2023);

// findWithUnknownLength([-202], -202);

// findWithUnknownLength([-2078], -33);

// findWithUnknownLength([-9999, 2780], -9999);

// findWithUnknownLength([-278, 22], 22);

// findWithUnknownLength([233, 6020], 67);

// findWithUnknownLength();

// findWithUnknownLength([], 3);

// findWithUnknownLength(3);

//  findWithUnknownLength(a = null, 4);

// findWithUnknownLength([22, 55, 77]);

// findWithUnknownLength([22, 33, 88], null);

// findWithUnknownLength([22, 66], target = null);

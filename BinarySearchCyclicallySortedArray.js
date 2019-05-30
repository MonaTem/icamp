/*
Problem description:

Given an array that is cyclically sorted, find the minimum element. A cyclically sorted array is a sorted array rotated by some number of elements. Assume all elements are unique. For example: A = [4,5,1,2,3], which is just [1,2,3,4,5] rotated by 2 Result = index 2

Q. How do you want the output returned?
A. Return the index of the minimum item.

Q. Can the array be rotated by 0 elements? i.e, be a normal sorted array?

A. Yes

Minimum element can be:

1.  If the array is cyclically sorted the minimum element will be:

    a. Only element with element to left greater than it
    b. Less than or equal to the rightmost element

2.  The left most element (index 0) if the array is normally sorted (that is, not cyclically sorted)


Duplicates:  Won't work with dups.  Can't do it in O(log n )  time if there are duplicates.

Pseudocode:

right = a[a.length - 1]
while (start <= end)
   find mid
   if no left (that is, index of mid = 0) OR
      a[mid] < a[mid - 1] and a[mid] <= right
      return mid
   else if mid > right
      start = mid + 1
   else end = mid - 1

Test cases:

Regular cases: rotated array, not rotated
Base cases 1 element, 2 elements (rotated and not rotated)
Edge cases: empty array, null array, null, nothing passed in

*/

const BinarySearchCyclicallySortedArray = (a) => {
  if (!a || a.length < 1) return 'nothing passed in, try again';
  let right = a[a.length - 1];
  let start = 0;
  let end = a.length - 1;
  while (start <= end) {
    let mid = Math.ceil(start + (end-start)/2);
  if (a[mid] <= right && (mid === 0 || a[mid] < a[mid-1]))   {
     // console.log(mid);
     return mid;
     } else if (mid > right)
       start = mid + 1;
            else end = mid - 1;
  }
};

BinarySearchCyclicallySortedArray([4,5,1,2,3]);
// BinarySearchCyclicallySortedArray([1, 2, 3, 4, 5]);
// BinarySearchCyclicallySortedArray([68]);
// BinarySearchCyclicallySortedArray([77, 8]);
// BinarySearchCyclicallySortedArray([909, 90909]);
// BinarySearchCyclicallySortedArray(null);
// BinarySearchCyclicallySortedArray([]);
// BinarySearchCyclicallySortedArray(a = null);
// BinarySearchCyclicallySortedArray();

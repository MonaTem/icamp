/* Two Sum Solved by Traversal from Both Ends */
const twoSum = (arr, sum) => {
  let start = 0;

  if (arr && arr != null) {
    let end = arr.length - 1;
    while (start < end && sum) {
       if (arr[start] + arr[end] === sum) {
         let indexStart = arr[start];
         let indexEnd = arr[end];
         return {indexStart: indexStart, indexEnd: indexEnd};
       } else if (arr[start] + arr[end] < sum) {
         start++;
              } else if (arr[start] + arr[end] > sum){
                end--;
                     }
    }
    return null;
  }
  return null;
}

// twoSum([1, 3, 4, 5, 6, 7, 8, 9, 10], 15);

// Test Cases
// Empty array without sum:
// twoSum([]);
// Empty array with sum:
// twoSum([], 3);
// Single element without sum:
// twoSum([77]);
// Single element with sum:
// twoSum([77], 77);
// Base case: 2 elements with sum:
// twoSum([2, 7], 9);
// Base case: 2 elements with sum, but they don't equal sum
// twoSum([2, 7], 10);
// Regular case: 3 elements with sum:
// twoSum([1, 33, 55], 88);
// Regular case: 3 elements, but none equal sum
// twoSum([1, 33, 55], 77);
// Regular case: 3 elements, no sum
// twoSum([1, 33, 55]);
// Regular case: 5 elements, sum
// twoSum([1, 33, 27, 55, 81], 88);
// Regular case: 5 elements, no sum
// twoSum([1, 27, 33, 55, 88]);
// Regular case: 5 elements, sum, duplicates:
twoSum([1, 3, 5, 22, 24], 27);

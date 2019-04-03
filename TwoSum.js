/* Two Sum Solved by Traversal from Both Ends */

  let index1 = 0;
  let index2 = 0;
  if (arr && arr != null) {
    let end = arr.length - 1;
    while (start < end) {
       if (arr[start] + arr[end] === sum) {
         index1 = arr[start];
         index2 = arr[end];
         return {index1: index1, index2: index2};
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

twoSum([1, 3, 4, 6, 7, 8, 9, 10], 15);

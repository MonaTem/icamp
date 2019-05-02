const binarySearch = (a, target) => {
  let start = 0;
  let end = a.length - 1;
  while (start <= end) {
    let mid = start + (end - start)/2;
    if (a[mid] > target) {
      end = mid - 1;
    } else if (a[mid] < target) {
           start = mid + 1;
           } else return mid;
  }
  return -1;
};  

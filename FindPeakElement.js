// Simpler version of SearchForPeak.  Not tested for as many cases.

const FindPeakElement = (arr) => {
  if (arr === null || arr.length === 0) return -1;

  let low = 0;
  let high = arr.length - 1;
  let peak = -1;

  while(low <= high) {
    let mid = Math.floor(low + (high - low)/2);

    if (mid === arr.length -1 || arr[mid] > arr[mid+1]) {
      peak = mid;
      high = --mid;
    } else low = ++mid;
  }
  return arr[peak];
};

// FindPeakElement([3, 4, 5, 88, 7, 12]);
FindPeakElement([1,3,4,5,2]);

const subArraySumtoSpecificValue = (a, X) => {
  let start = 0;
  let end = -1;
  let sum = 0;

  while (start < a.length) {
    if (sum < X){
       end++;
       if (end < a.length) sum = sum + a[end];
    } else if (sum > X)  {
       start++;
       if (start < a.length) sum = sum - a[start];
    } else return ({start, end});
  }
  return [-1, -1];

}

subArraySumtoSpecificValue([2,1,4,5,3,5,1,2,4], 12);

// subArraySumtoSpecificValue([2,1,4,5,3,5,1,2,4], 13);

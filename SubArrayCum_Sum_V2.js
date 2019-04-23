const SubArrayCumSum = (a, X) => {
  if (!a) return null;
  let SumMap = new Map();
  let sum = 0;
  let firstI = 0;
  let size = a.length;
  for (let i = 0; i < a.length; i++) {
    sum = sum +a[i];
    if (sum === X) {
      return {firstI, i};
    } else if (SumMap.get(i)) {
      firstI = SumMap.get(i)-1;
      return {firstI, i};
           } else SumMap.set(sum, i);
   }
  return null;
}


SubArrayCumSum([1, -2, 3, 4], 2);
// SubArrayCumSum([2,4,-2,1,-3,5,-3], 0);

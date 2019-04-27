/* Pseudo code:
Function to find continuous sub array that adds up
to sum passed in as parameter.
Uses cumulative sum technique.
At each index i, keep track of cumulative sum. If we encounter sum X at i,
return (begin,i) as answer (where those are begin and
end indices of continuous sub array).
We also keep a map of old sums. If we find a sum again, we return that subarray.
Return first subarray that sums to the sum we seek.
*/

const SubArrayCumSum = (a, X) => {
  if (!a) return null;
  let SumArray = [];
  let sum = 0;
  let begin = 0;
  let size = a.length;
  for (let i = 0; i < a.length; i++) {
    sum = sum +a[i];
    // console.log("sum is ", sum);
    // console.log("i is ", i);
    if (sum === X) {
      return {begin, i};
    } else if (SumMap.get(sum)) {
      console.log("we just got ");
      console.log("SumMap.get(sum) ",SumMap.get(sum));
      console.log("i is ",i);
      console.log(SumMap);
      begin = SumMap.get(sum)+1;
      return {begin, i};
           } else SumMap.set(sum, i);
             console.log("we just set ", SumMap);
   }
  return null;
}


// SubArrayCumSum([1, -2, 3, 4], 2);
SubArrayCumSum([2,4,-2,1,-3,5,-3], 0);

/* Test cases:
Regular cases:

Has sum
Does not have sum
Has sum at beginning
Has sum at middle
Has sum at end

Base cases:
Single element (positive, negative, or zero);

Edge cases:  empty array, null
Sanity check: pass in nothing
*/

// Square root of positive integers using Binary Search
// Time complexity O(log n)
const SquareRootInteger = (X, ans=0) => {
   // edge cases
  if (!X || X.length < 1) return ans;
  // base cases
  if (X === 0 || X === 1) return X;
  low = 0;
  high = X/2;
  while (low <= high) {
    let mid = Math.floor(low + (high - low)/2);
    if (mid*mid === X) return mid;
    if (mid*mid > X) {
      high = ++mid;
    } else {
    // if (mid*mid < X)
      if (mid === ans) {
        return ans;
      } else
        ans = mid;
        low = --mid;
     }
  }
return ans;
}

SquareRootInteger(3000);
// SquareRootInteger(0);
// SquareRootInteger(1);
// SquareRootInteger();
// SquareRootInteger(null);

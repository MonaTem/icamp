const reverseArrayInPlace = (arr) => {
  let start = 0;
  if (arr && arr != null) {
    let end = arr.length - 1;
    while (start < end) {
      var tempVar = arr[start];
      arr[start] = arr[end];
      arr[end] = tempVar;
      start++;
      end--;
    }
  }
  return arr;
}
// Test cases
// Regular case: 5 elements
// reverseArrayInPlace(['1', '2', '3', '4', '5']);
// Regular case: 3 elements:
// reverseArrayInPlace([3, 5, 7]);
// Regular case: 2 elements:
// reverseArrayInPlace(["hello", "world"]);
// Base case: 1 element
// reverseArrayInPlace(["This is an array with 1 element"]);
// Edge case: null
// reverseArrayInPlace(null);
// Edge case: empty array
// reverseArrayInPlace([]);
// Sanity check: pass in nothing
reverseArrayInPlace();

// Fibonacci numbers using recursion and memoization
const FibonacciWithMemo = (n, map) =>
{ if (n === 1 || n === 2) return 1;
  if (map.has(n)) return map.get(n);
  let result = FibonacciWithMemo(n-1, map)
             + FibonacciWithMemo(n-2, map);
  map.set(n, result);
  return result;
};
let map = new Map();
FibonacciWithMemo(20, map);

/* Problem definition:

Given a set of coins with certain denominations, what combinations of coins with those denominations are there that add up to the target?

We can use any number of coins of one of the given denominations in the set.

Q.  Do we care about permutations, or just combinations?

For example are 1, 2, 2, and 2, 2, 1 different or the same?

A.  The same.  Combinations only.

Q.  Are coins positive integers only?

A.  Yes.

Pseudo code:

There will be two functions

CoinChange is the driver function
PrintCoins is the helper function, invoked from
CoinChange.

If target or coins not entered or undefined or target negative, return without processing.

Otherwis invoked PrintCoins to do most of the heavy lifiting.

In PrintCoins:

1.  Termination cases

    a. If sum > target, return
    b. If sum = target, print buffer & return

Otherwise:

2.  Find candidates that go into the buffer

3.  Place candidates in the buffer

4.  Recurse to next buffer index

Time complexity:  Exponential time, that is O(2^n)

Test cases:

Regular cases:  target equal to a coin, target greater than all coins
Base cases: 1 coin in array
Edge cases: coin array empty or null, target negative or 0


*/

const PrintCoins = (coins, target, startindex, buffer, sum)=> {

 if (sum > target) return;

 if (sum === target) {
   console.log(buffer);
   return;
 }

 for (let i = startindex; i < coins.length; i++) {
   buffer.push(coins[i]);
   PrintCoins(coins, target, i, buffer, sum + coins[i]);
   buffer.pop();
 }

};

const CoinChange = (coins, target) => {

  if (!coins || coins.length <= 0 || target === undefined)
     return;

  let buffer = [];

  PrintCoins(coins, target, 0, buffer,  0);

};

// CoinChange([1, 2, 5], 5);
CoinChange([1, 2, 3, 4], 10);

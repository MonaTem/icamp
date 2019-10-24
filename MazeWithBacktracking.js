/*
Problem description:

For a maze or matrix -- get to the end of the maze (that is to A[length - 1][length - 1];

Each element in the maze can have one of two values:
0 means there is a path
1 means there is a wall

The objective is to get to the end of the maze.

The ending element can be a path or a wall.  Doesn't matter, just get there.

Questions to Clarify:

Q. What to return?
A. Return true if there's a path to the end; false otherwise

Q. What to return in the input array is empty or null?
A. Return false because there is no path

Q. Does the ending element have to be a path?
A. No.  The ending element can be a wall or a path.
Just get there.

Q. What if the array has just one element?
A. Return true because we're already at the last element

Solution:

We will use recursion, memoization, and backtracking.

If we hit a wall, we backtrack..that is, if we hit a wall we go back and try another path

For each element a[i][j] we try all 4 directions, that is, up,down, left, and right.

We look for a path.

We follow the path until we hit:

1. A wall
2. The array boundary
3. The end of the maze (a[i]a[j])

If we hit 1 or 2 we return false (unless the wall happens to the be at the end of the maze)

Our memoization is used to avoid cycles (i.e., repetition).
We will set each element to one of 3 states: unvisited (the initial default), visiting, or no_path_found.
If we see no_path_found, we needn't revisit the element.

Converge/collect: if any of the checks returns true, return true

Test cases:

Edge cases: matrix empty or null, 1 element (0 or 1)
Base cases: matrix w 1 row/column (same as second edge case above)
Regular cases: matrix with/without path to end, matrix with all 0s (paths), with all 1s (walls), square matrix, rectangular matrix

Time complexity:

Where n is number of elements in the matrix:

Brute force solution: O(4^n)

With memoization: O(n)

Space complexity: O(n^2)

O(n^2) on both memo and recursion stack


*/


const Oob = (a, i, j) =>
{
return i < 0 || i >= a.length || j < 0 || j >= a[0].length;
};


const PathExists = (a, i, j, State) => {
  // out of bounds
  //
  if (Oob(a, i, j) || a[i][j] == 1) {
      var oob = true;
      return false;
  }

  // end of maze

    if (i === a.length - 1 && j === a[0].length - 1) {
      State[i][j] = 'PATH_FOUND';
      console.log(State[i][j]);
      return true;
    }


  // no path found or visiting
  if (State[i][j] === 'NO_PATH_FOUND' || State[i][j] === 'VISITING') {
    if (State[i][j] === 'NO_PATH_FOUND')
       console.log(State[i][j]);
    return false;
  }

  State[i][j] = 'VISITING';

  let Points = [
    [i+1, j],
    [i-1, j],
    [i, j+1],
    [i, j-1]
  ];


  for (let i = 0; i < Points.length; i++) {

      if (oob) {
        console.log(NO_PATH_FOUND);
        return false;
    }

    let firstPoint = Points[i][0];
    let secondPoint = Points[i][1];

    if (PathExists(a, firstPoint, secondPoint, State)) {
         return true;
    }

  }

State[i][j] = 'NO_PATH_FOUND';
console.log(State[i][j]);
return false;

};


const Maze = (a) => {

  if (!a || a.length === 0) {
    console.log('NO_PATH_FOUND');
    return false;
  }

  if (a[0].length === 1 || a[0].length === undefined) {
    if (a[0] == 1) {
      console.log('NO_PATH_FOUND');
      return false
    } else {
      console.log('PATH_FOUND');
      return true;
      }
  }

  let arrlen = a.length
  let nextdim = a[0].length;

  const State = a.map(() => Array(nextdim).fill('UNVISITED'));

  PathExists(a, 0, 0, State);

 };

// Test cases

// Edge cases

// Maze();
// Maze([]);
// Maze(null);
// Maze([0]);
// Maze([1]);

// Base cases
// Maze([0, 1]);
// Maze([[0], [0]]);
// Maze([[0], [1]]);
// Maze([[1], [0]]);


// Regular cases
// Rectangular matrix
// Maze([[0, 1], [0, 0], [1, 0], [0, 0]]);
// Square matrix
// Maze([[0,1,1,1], [0,1,1,1], [0,0,0,0], [1,1,1,0]]);
// Rectangular
// Maze([[0,1], [1, 1], [1, 1]]);
// Maze([0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]);
// Maze([1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]);

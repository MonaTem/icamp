/* Given a string of characters, find the longest substring with unique characters.   For example:
for string "whatwhywhen" the longest substring is either "what" or "when".  for ""whatwhywhere", the longest substring is "atwhy".

Questions to clarify:

Q.  Are the string characters alphabetic only?
A.  No, there can be any character?

Q.  How to return the result?
A.  Return the start and end indices of the substring?

Q.  What if there are multiple substrings of the same
    length with unique characters?
A.  Return any one of them.

Q.  Is the empty string a valid substring?
A.  No

Q.  So the smallest acceptable substring is one character?
A.  Yes.

Q.  What to return if the input array is empty or null?
A.  Return null.

Solution:

Use the sliding window technique.

Attempt to store the next character in a Map.

If it's already there, we have a duplicate.  Set start to start +1 and begin counting again.

Keep track of the length of longest substring with unique characters.

If a new substring is > stored length, update store length and update start and end indices (in an object called "result");

Return result at the end or null if input is empty.

Test cases:

Edge cases: no input
            empty string input

Base cases: string has 1 character.
            string has 2 chars (same, different)

Regular cases: multiple chars (with/without dups)

*/

const AllUnique = (input) => {

  if (!input || input.length === 0) return null;

  let dupsMap = new Map();

  let result = {start: 0, end: 0};

  let start = 0;

  let end = 0;

  let longest = 0;

  // result.end = 1;

  // console.log(result);

  while (end < input.length) {
    let toAdd = input.charAt(end);
    if (dupsMap.has(toAdd) && dupsMap.get(toAdd) >= start) {
      start = dupsMap.get(toAdd) + 1;
      }
    dupsMap.set(toAdd, end);

   // update result;
   if (end - start +1 > longest){
     longest = end - start + 1;
     result.end = end;
     result.start = start;
   }
  ++end;
  }
  return result;
};

// Test cases:

// Regular cases:
// AllUnique('whatwhywhere');
AllUnique('whatwhenwhy');
// AllUnique('supercal');

// Edge cases:
// AllUnique();
// AllUnique('');

// Base case:

// AllUnique('g');
// AllUnique('gg');
// AllUnique('3y');

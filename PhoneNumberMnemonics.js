/* Problem description.

Given a phone number of any length, print all possible
alphabetic strings that can be created from that phone number.  Since 0 and 1 correspond to no letters, ignore them.

Questions and answers:

Q.  Do the strings have to be actual English words?
A.  No.

Q.  Can we assume that input will be only digits?
A.  Yes.

Q.  How to handle if phone number empty or null?
A.  Print nothing.

Pseudo code:

There will be two functions, a PrintWords function to kick things off and set up the buffer, and a recursive PrintWordsHelper function to do most of the actual work.

The PrintWordsHelper function will search for candidates for the buffer (using a for loop) and use recursion to go to the next buffer index once a candidate is found.

It will print the buffer once it is full (i.e., equal to the length of the phone number minus any ones or zeroes.)

Test cases:

Regular cases:  phone number without 1s and 0s, phone number with 1s and 0s

Base cases:  phone number has 1 digit, phone number has only 1s and 0s

Edge cases: phone number empty or null

Time complexity: exponential complexity.  O(2^N)

Space complexity:  O(N) where N is the size of the phone number. O(N) space is taken by both the buffer and the call stack.

*/

const getLetters = (digit) => {
  switch(digit) {
  case '0': return [];
  case '1': return [];
  case '2': return ['a', 'b', 'c'];
  case '3': return ['d', 'e', 'f'];
  case '4': return ['g', 'h', 'i'];
  case '5': return ['j', 'k', 'l'];
  case '6': return ['m', 'n', 'o'];
  case '7': return ['p', 'q','r', 's'];
  case '8': return ['t', 'u', 'v'];
  case '9': return ['w', 'x', 'y', 'z'];
  default: throw new Error("Invalid Digit " + digit);
  }

};


const PrintWordsHelper = (a, buffer, aIndex, bufferIndex) => {


   if (bufferIndex >= buffer.length || aIndex  >= a.length) {
     console.log(buffer);
     return;
   }


   let letters = getLetters(a[aIndex]);


   if (letters.length === 0) {

      PrintWordsHelper(a, buffer, aIndex + 1, bufferIndex);
   }


   for (let letter = 0; letter < letters.length; letter++) {
     buffer[bufferIndex] = letters[letter];
     PrintWordsHelper(a, buffer, aIndex + 1, bufferIndex + 1);
   }
};

const PrintWords = (phoneNumber) => {
  if (!phoneNumber) return;

  let N = phoneNumber.length;

  for(let x = 0; x < phoneNumber.length; x++){
    if (phoneNumber[x] === '0' || phoneNumber[x] === '1') N--;
  }
  let buffer = new Array(N);

  PrintWordsHelper(phoneNumber, buffer, 0, 0);

};

// Regular test cases:

// PrintWords('245');
PrintWords('213');
// PrintWords('900');
// PrintWords('456');
// PrintWords('9177447452');

// Base cases:

// PrintWords('7');
// PrintWords('101');

// Edge cases:

// PrintWords();
// PrintWords(null);

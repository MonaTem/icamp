const reverseSentence = (str) => {
  console.time('timing');
  let reverseString = "";
  if (str && str != null) {
    let wordEnd = str.length;
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === " ") {
        if (reverseString.length > 0) {
        // not empty add a space
          reverseString = reverseString + " ";
        }
      reverseString = reverseString +
         str.substring(i+1, wordEnd);
      wordEnd = i;
      }
    }
    let firstWord = str.substring(0, wordEnd);
    // always good to check for null
    if ((firstWord != null && firstWord.length > 0)) {
      if (reverseString.length > 0) {
        reverseString = reverseString + " ";
      }
      reverseString = reverseString + firstWord;
    }
  }

  console.log(reverseString);
  console.timeEnd('timing');
  return reverseString;
}
/* Test cases:
Regular case:  A sentence with several words separated by spaces.

Base case or corner case:  1 word sentence

Corner case: empty string;
Corner case: a string with several spaces in it:
Corner case: a string with one space in it;
Sanity check: Pass in nothing;
*/
//Regular case: a sentence with several words:
// const str = "I live in an apartment";
// Base case: 1 word sentence
// const str = "Yes"
// corner case: empty string
// const str = "";
// corner case: string with one space:
// const str = " ";
// corner case:  string with several spaces:
// const str = "   ";
// corner case: null string;
  //  const str = null;
// corner case: sentence begin with space:
const str = " The rain in Spain falls mainly on the plain";
// corner case: sentence ends with space:
// const str = "Ask not what your country can do for you "
// corner case: pass in nothing:
// reverseSentence();
reverseSentence(str);

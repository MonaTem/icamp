const reverseSentence = (str) => {
  let reversed = "";
  if (str && str != null) {
    let previousSpace = str.length - 1;
    let sliced = "";
    for (i = str.length-1; i >= 0; i--) {
       if (str[i] === " ") {
         sliced = str.slice(i + 1, previousSpace+1);
         reversed = reversed + sliced + " ";
         previousSpace = i;
       }
       if (i === 0) {
         if (previousSpace === str.length - 1) {
           sliced = str.slice(0, previousSpace + 1);
         } else sliced = str.slice(0, previousSpace);
         reversed = reversed + sliced;
       }
   }
  }
  return reversed;
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
// corner case: sentence begin with space:
const str = " The rain in Spain falls mainly on the plain";
// corner case: sentence ends with space:
// const str = "Ask not what your country can do for you "
// corner case: pass in nothing:
// reverseSentence();
reverseSentence(str);

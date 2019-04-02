/ const reverseSentence = (str) => {
//   let reversed = "";
//   let i = str.length - 1;
//   let previousSpace = str.length - 1;
//   while (i >= 0) {
//     if (i = " ") {
//       // console.log(str[i-1, previousSpace-1]);
//       reversed = reversed + str.slice(i-1, previousSpace);
//       previousSpace = i;
//       i--;
//     }
//   }
// return reversed;
// }

const reverseSentence = (str) => {
  let reverseStr = "";
  if (str & str != null) {
    let strArray = str.split(" ");
    let newArray = [];
    for (let i = strArray.length - 1; i >= 0; i--) {
      newArray.push(strArray.pop());
    }
    reverseStr = newArray.join(" ");
  }
  return reverseStr;
}

// reverseSentence("I live in an apartment");
reverseSentence();

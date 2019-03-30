const reverseSentence = (str) => {
  let strArray = str.split(" ");
  let newArray = [];
  let reverseStr = "";
  for (i = strArray.length - 1; i >= 0; i--) {
    newArray.push(strArray.pop());
  }
  reverseStr = newArray.join(" ");
  return reverseStr;
}

reverseSentence("I live in an apartment");

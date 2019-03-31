const reverseSentence = (str) => {
  console.time('timing');
  let strArray = str.split(" ");
  let newArray = [];
  let reverseStr = "";
  for (i = strArray.length - 1; i >= 0; i--) {
    newArray.push(strArray.pop());
  }
  reverseStr = newArray.join(" ");
  console.log(reverseStr);
  console.timeEnd('timing');
  return reverseStr;
}

reverseSentence(" The rain in Spain falls mainly on the plain");

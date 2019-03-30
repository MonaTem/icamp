const reverseSentence = (str) => {
  let reversed = "";
  let previousSpace = str.length - 1;
  for (i = str.length-1; i >= 0; i--) {
    if (str[i] === " ") {
      let sliced = str.slice(i + 1, previousSpace+1);
      console.log(sliced);
      reversed = reversed + sliced + " ";
      previousSpace = i;
    }
    if (i === 0) {
      let sliced = str.slice(0, previousSpace);
      reversed = reversed + sliced;
    }
  }
return reversed;
}


reverseSentence("I live in an apartment");

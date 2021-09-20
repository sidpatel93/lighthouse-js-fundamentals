const camelCase = function (input) {
  // Your code here
  let outputString = "";
  let st = input.split(" ");
  //console.log(st);
  for (let i = 0; i < st.length; i++) {
    if (i != 0) {
      let newWord = st[i][0].toUpperCase() + st[i].substring(1);
      //console.log(newWord);
      outputString = outputString + newWord;
    } else {
      //console.log(st[i]);
      outputString = outputString + st[i];
    }
  }
  return outputString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

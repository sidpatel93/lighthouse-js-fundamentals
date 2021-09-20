const multiplicationTable = function (maxValue) {
  // Your code here
  let outputString = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      outputString = outputString + " " + i * j;
    }
    outputString = outputString + "\n";
  }
  return outputString;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

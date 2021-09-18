const urlEncode = function (text) {
  // Put your solution here
  var newString = "";
  for (i of text) {
    if (i == " ") {
      newString = newString + "%20";
    } else {
      newString = newString + i;
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

const numberOfVowels = function (data) {
  // Put your solution here
  const vowels = ["a", "e", "i", "o", "u"];
  var numOfvowels = 0;
  for (i of data) {
    if (vowels.includes(i)) {
      numOfvowels++;
    }
  }
  return numOfvowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

const conditionalSum = function (values, condition) {
  // Your code here
  var sum = 0;
  if (condition === "even") {
    for (i of values) {
      if (i % 2 == 0) {
        sum = sum + i;
      }
    }
  } else {
    for (i of values) {
      if (i % 2 != 0) {
        sum = sum + i;
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

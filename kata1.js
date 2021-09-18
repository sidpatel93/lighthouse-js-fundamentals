const sumLargestNumbers = function (data) {
  // Put your solution here
  a = Math.max(...data);
  data.splice(data.indexOf(a), 1);
  //console.log(data);
  b = Math.max(...data);
  return a + b;

  console.log(` a is ${a} and b is ${b}`);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

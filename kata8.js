const repeatNumbers = function (data) {
  // Put your solution here
  let output = "";
  //console.log(data);
  for (let e = 0; e < data.length; e++) {
    //console.log(data[e]);
    for (let i = 0; i < data[e][1]; i++) {
      output = output + data[e][0];
      //console.log(data[e][0]);
      //console.log(output);
    }
    if (e < data.length - 1) {
      output = output + ", ";
    }
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

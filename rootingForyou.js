const judgeVegetable = function (vegetables, metric) {
  let high = 0;
  let name = "";
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > high) {
      high = vegetables[i][metric];
      name = vegetables[i]["submitter"];
    }
  }
  return name;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));

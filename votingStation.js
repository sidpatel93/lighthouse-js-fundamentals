const chooseStations = function (stations) {
  //initialize an empty array to store the good stations.
  let goodStations = [];
  // loop through the given array to check the capacity and the centre type
  for (let station of stations) {
    if (
      station[1] >= 20 &&
      (station[2] === "school" || station[2] === "community centre")
    ) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
};

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

console.log(chooseStations(stations));

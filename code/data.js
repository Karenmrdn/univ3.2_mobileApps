let cars = localStorage.getItem("cars_data");
if (localStorage.getItem("cars_data") === null) {
  cars = [
    {
      name: "Saint Petersburg",
      country: "Russia",
    },
    {
      name: "Stockholm",
      country: "Sweden",
    },
  ];
  localStorage.setItem("cars_data", JSON.stringify(cars));
} else {
  cars = JSON.parse(cars);
}

function saveCars(cars) {
  localStorage.setItem("cars_data", JSON.stringify(cars));
}

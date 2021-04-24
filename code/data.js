let cars = localStorage.getItem("cars_data");
if (localStorage.getItem("cars_data") === null) {
  cars = [
    {
      name: "Toyota",
      country: "Japan",
    },
    {
      name: "BMW",
      country: "Germany",
    },
  ];
  localStorage.setItem("cars_data", JSON.stringify(cars));
} else {
  cars = JSON.parse(cars);
}

function saveCars(cars) {
  localStorage.setItem("cars_data", JSON.stringify(cars));
}

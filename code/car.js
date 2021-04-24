$("document").ready(function () {
  let searchParams = new URLSearchParams(window.location.search);
  let name = null;
  if (searchParams.has("name")) {
    name = searchParams.get("name");
    let car = cars.find((c) => c.name == name);
    $("#name").val(car.name);
    $("#country").val(car.country);
  }

  $("#save").click(function () {
    if (name === null) {
      cars.push({
        name: $("#name").val(),
        country: $("#country").val(),
      });
    } else {
      let car = cars.find((c) => c.name === name);
      car.name = $("#name").val();
      car.country = $("#country").val();
    }
    saveCars(cars);
    $(location).attr("href", "index.html");
  });
});

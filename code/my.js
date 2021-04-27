let editType = "";
let nameCar = "";
document.addEventListener("DOMContentLoaded", function (event) {
  let list = document.getElementById("list");

  for (let row of cars) {
    let rowText = document.createElement("ion-item");
    rowText.innerHTML = `<ion-label>${row.name}</ion-label>
    <ion-button class="edit" color="primary" size="medium" rowid=${row.name}>
    <ion-icon name="create"></ion-icon>
    </ion-button>
    <ion-button class="delete" color="danger" size="medium" rowid="${row.name}">
    <ion-icon name="trash"></ion-icon>
    </ion-button>`;
    list.appendChild(rowText);
  }

  document.querySelector("#main").style.display = "";
  document.querySelector("#edit").style.display = "none";

  document.querySelectorAll(".edit").forEach((input) =>
    input.addEventListener("click", ({ target }) => {
      editType = "edit";
      carName = target.getAttribute("rowid");
      let car = cars.find((c) => c.name == carName);

      document.getElementById("car").value = car.name;
      document.getElementById("country").value = car.country;
      document.querySelector("#main").style.display = "none";
      document.querySelector("#edit").style.display = "";
    })
  );

  document.querySelectorAll(".delete").forEach((input) =>
    input.addEventListener("click", ({ target }) => {
      carName = target.getAttribute("rowid");
      saveCars(cars.filter((c) => c.name != carName));
      location.reload();
    })
  );

  document.querySelector("#save").addEventListener("click", () => {
    if (editType === "add") {
      cars.push({
        name: document.getElementById("car").value,
        country: document.getElementById("country").value,
      });
    } else {
      let car = cars.find((c) => c.name == carName);
      car.name = document.getElementById("car").value;
      car.country = document.getElementById("country").value;
    }
    saveCars(cars);
    location.reload();
  });

  document.querySelector("#add").addEventListener("click", () => {
    document.getElementById("car").value = "";
    document.getElementById("country").value = "";
    document.querySelector("#main").style.display = "none";
    document.querySelector("#edit").style.display = "";
    editType = "add";
  });
});

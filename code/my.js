$("document").ready(function () {
  let rowText;
  let content = $("#cars");
  for (let row of cars) {
    rowText = `<tr>
    <td>${row.name}</td>
    <td class="text-right">
    <a class="btn btn-outline-secondary" href="car.html?name=${row.name}">
    <i class="fa fa-fw fa-edit"></i>
    </a>
    <button type="button" class="btn btn-outline-danger rem-row"
    rowid="${row.name}">
    <i class="fa fa-fw fa-trash"></i>
    </td>
    </tr>`;
    content.append(rowText);
  }
  $(".rem-row").click(function () {
    let name = $(this).attr("rowid");
    saveCars(cars.filter((c) => c.name !== name));
    location.reload();
  });
});

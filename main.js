let FilterByTollName = document.getElementById("tollfilter");
let tableBody = document.getElementById("tableBody");
let tableBodyChildren = Array.from(tableBody.children);
let filterVehicleByNumber = document.getElementById("filterVehicleByNumber");

FilterByTollName.addEventListener("change", (e) => {
  let filterValue = e.target.value;
  console.log(filterValue);
  switch (filterValue) {
    case "All":
      tableBodyChildren.map((elem) => {
        elem.style.display = "block";
      });
      break;

    default:
      // code block
      // code block

      console.log(tableBodyChildren);
      tableBodyChildren.map((elem, index) => {
        console.log(elem);
        if (elem.getAttribute("data-tollName") !== filterValue) {
          tableBody.children[index].style.display = "none";
        } else {
          tableBody.children[index].style.display = "block";
        }
      });
  }
});
filterVehicleByNumber.addEventListener("keyup", (e) => {
  console.log(e);
  let filterValue = e.target.value.toUpperCase();

  for (var i = 0; i < tableBodyChildren.length; i++) {
    td = tableBodyChildren[i].getElementsByTagName("td")[0];
    console.log(tableBodyChildren);
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filterValue) > -1) {
        tableBodyChildren[i].style.display = "";
      } else {
        tableBodyChildren[i].style.display = "none";
      }
    }
  }
});

document.getElementById("addvehicle").addEventListener("click", (e) => {
  console.log(e);
  document.getElementById("popupformToll").style.display = "none";
  document.getElementById("popupformVehicle").style.display = "block";
});
document.getElementById("closepopup").addEventListener("click", (e) => {
  document.getElementById("popupformVehicle").style.display = "none";
});

document.getElementById("addnewentry").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);

  let selectvehicle = document.getElementById("selectVehicle").value;
  console.log(selectvehicle);
  let vehicleNumber = document.getElementById("vehicleNumber").value;
  console.log(vehicleNumber);
  let Tariff = document.getElementById("Tariff").value;
  console.log(Tariff);
  let date = new Date();
  let tr = document.createElement("tr");
  tr.innerHTML = `
 <th scope="row">${selectvehicle}</th>
 <td>${vehicleNumber}</td>
 <td>${date}</td>
 <td>Chengalpattu</td>
 <td>${Tariff}</td>
`;
  document.getElementById("tableBody").append(tr);
});

document.getElementById("addtoll").addEventListener("click", (e) => {
  document.getElementById("popupformVehicle").style.display = "none";
  console.log(e);
  document.getElementById("popupformToll").style.display = "block";
});
document.getElementById("closepopuptoll").addEventListener("click", (e) => {
  document.getElementById("popupformToll").style.display = "none";
});

document.getElementById("addnewtoll").addEventListener("submit", (e) => {
  e.preventDefault();
  var formdata = new FormData(e.target);
  var title = document.getElementById("tollName").value;

  const value = Object.fromEntries(formdata.entries());
  console.log(value);
  localStorage.setItem(title, JSON.stringify(value));
});

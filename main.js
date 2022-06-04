// Defining Images

let img = document.createElement("img");
img.src = "./assets/vectorkey.svg";
img.classList.add("keyimg");

new gridjs.Grid({
  columns: [
    "Sənəd Nömrəsi",
    "Tarix",
    "Partnyor",
    "Müştəri",
    "Ümumi Məbləğ",
    "Miqdar",
    "Qeyd",
    "Səbəb",
  ],
  pagination: {
    limit: 3,
  },
  data: () => {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve([
            [
              "M00091313",
              "10.04.2021",
              "aberdam",
              "Lorem Ipsum",
              "103",
              "1",
              img,
              "Səbəb",
            ],
            [
              "M00091314",
              "11.04.2021",
              "yurim",
              "Lorem Ipsum",
              "45",
              "5",
              img,
              "nothing",
            ],
            [
              "M00091315",
              "10.04.2021",
              "aberdam",
              "Lorem Ipsum",
              "103",
              "1",
              img,
              "Səbəb",
            ],
            [
              "M00091316",
              "10.04.2021",
              "aberdam",
              "Lorem Ipsum",
              "103",
              "1",
              img,
              "Səbəb",
            ],
            [
              "M00091317",
              "10.04.2021",
              "aberdam",
              "Lorem Ipsum",
              "103",
              "1",
              img,
              "Səbəb",
            ],
            [
              "M00091318",
              "10.04.2021",
              "aberdam",
              "Lorem Ipsum",
              "103",
              "1",
              img,
              "Səbəb",
            ],
            [
              "M00091318",
              "10.04.2021",
              "aberdam",
              "Lorem Ipsum",
              "103",
              "1",
              img,
              "Səbəb",
            ],
            [
              "M00091318",
              "10.04.2021",
              "aberdam",
              "Lorem Ipsum",
              "103",
              "1",
              img,
              "Səbəb",
            ],
            [
              "M00091318",
              "10.04.2021",
              "aberdam",
              "Lorem Ipsum",
              "103",
              "1",
              img,
              "Səbəb",
            ],
            [
              "M00091318",
              "10.04.2021",
              "aberdam",
              "Lorem Ipsum",
              "103",
              "1",
              img,
              "Səbəb",
            ],
          ]),
        1000
      );
    });
  },
  className: {
    table: "table-body",
    tr: "table-tr",
    button: "pagesbutton",
  },
  language: {
    pagination: {
      previous: "<",
      next: ">",
    },
  },
}).render(document.getElementById("table"));

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterfunction(text) {
  var table, tr, td, i, txtValue;
  console.log(text);
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(text) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function datefilter(dateValue) {
  var table, tr, td, i, txtValue;
  formatValue = dateValue.split('-').reverse().join('.');
  console.log(typeof dateValue)
  console.log(dateValue)
  console.log(formatValue)
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(dateValue) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
datefilter();

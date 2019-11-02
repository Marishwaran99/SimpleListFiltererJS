const search = document.getElementById("search");

search.addEventListener("keyup", filtername);

function filtername() {
  var val = search.value.toUpperCase();
  let list_items = document.querySelector(".list-items");
  let list_item = document.querySelectorAll(".list-item");

  list_item.forEach((item, i) => {
    if (item.innerHTML.toUpperCase().indexOf(val) > -1) {
      list_item[i].style.display = "";
    } else {
      list_item[i].style.display = "none";
    }
  });
}

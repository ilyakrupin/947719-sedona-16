var menu = document.querySelector(".menu");
var button = menu.querySelector(".menu__toggle");

menu.classList.remove("menu--nojs");

button.addEventListener("click", function (evt) {
  if (menu.classList.contains("menu--closed")) {
    menu.classList.remove("menu--closed");
    menu.classList.add("menu--opened");
  } else {
    menu.classList.remove("menu--opened");
    menu.classList.add("menu--closed");
  }
});

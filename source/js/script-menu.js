var menu = document.querySelector(".menu");
var button = menu.querySelector(".menu__toggle");

menu.classList.remove("menu--nojs");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("menu--closed");
  menu.classList.toggle("menu--opened");
});

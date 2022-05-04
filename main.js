import "./style.scss";

// change css display to none if a variable is false
var displayMenu = false;
const hamburgerButton = document.querySelector(".hamburger-icon");
const dropdownMenu = document.querySelector(".menu-container");
const hideIfFalse = (variable, element) => {
  if (variable) {
    element.style.display = "flex";
  } else {
    element.style.display = "none";
  }
};
hamburgerButton.addEventListener("click", () => {
  console.log("test");
  displayMenu = !displayMenu;
  hideIfFalse(displayMenu, dropdownMenu);
});

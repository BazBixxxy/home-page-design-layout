const navbar = document.querySelector("nav");
const popMenu = document.querySelector("aside");
const menuIcon = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close");
const logo = document.querySelector(".logo");
const root = document.documentElement;
const projectCards = document.querySelectorAll(".project");

menuIcon.addEventListener("click", () => {
  navbar.style = `display: none;`;
  popMenu.style = `display: flex;`;
});

closeBtn.addEventListener("click", () => {
  navbar.style = `display: flex;`;
  popMenu.style = `display: none`;
});

function setTheme() {
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;
}

function themeStyles() {}

logo.addEventListener("click", () => {
  setTheme();
});

const btnMenu = document.querySelector(".menu-mobile");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".link-menu a");

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const closeMenu = document.querySelector(".btn-close");

closeMenu.addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

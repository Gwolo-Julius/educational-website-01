const navEl = document.querySelector("#nav__cont");
const hambugerEl = document.querySelector(".hambuger");
const closeBtnEl = document.querySelector(".close");
const navLinks = document.querySelectorAll(".nav__links");
const navLi = document.querySelectorAll("ul li");

console.log(navEl, hambugerEl, closeBtnEl);

hambugerEl.addEventListener("click", () => {
  navEl.style.right = "0";
});
window.addEventListener("load", () => {
  navEl.style.right = "-100%";
});
const closeMenu = () => {
  navEl.style.right = "-100%";
};
closeBtnEl.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

navLi.forEach((element) => {
  element.addEventListener("click", closeMenu);
});

window.addEventListener("load", () => {
  const load = document.querySelector(".loader");
  load.classList.add("loader-hidden");
  load.style.visibility = "3.75s";

  load.addEventListener("transitioned", () => {
    document.body.removeChild("loader-hidden");
  });
});

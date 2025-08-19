

let btn = document.querySelector(".nav__btn"); // ✅ el contenedor clickeable
let nav = document.querySelector(".layout__nav");
let list = document.querySelector(".nav__list");

btn.addEventListener("click", () => {
    nav.classList.toggle("layout__nav-show");
    list.classList.toggle("nav__list--visible");
});
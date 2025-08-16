

let button = document.querySelector(".nav__btn");
let plus = document.querySelector(".fa-plus");
let multi = document.querySelector(".fa-xmark")
let navList = document.querySelector(".nav__list");


button.addEventListener("click", () =>{
        plus.classList.toggle("hidden");
        multi.classList.toggle("hidden");
        navList.classList.toggle("list__open")
})
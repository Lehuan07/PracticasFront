

let input = document.querySelector("#input");
let main = document.querySelector(".layout__main");
let check = document.querySelector(".fa-circle-check");
let xmark = document.querySelector(".fa-circle-xmark");

input.addEventListener("focus", ()=>{
    main.classList.add("focus")
})

input.addEventListener("blur", ()=>{
    main.classList.remove("focus")
})

input.addEventListener("keydown", ()=>{
    validate();
})

function validate(){
    let email = input.value
}
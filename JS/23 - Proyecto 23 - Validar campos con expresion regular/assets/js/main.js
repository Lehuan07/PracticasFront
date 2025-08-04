

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
    let pattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.trim() != ""){
        let test = pattern.test(email);

        if(test){
            check.classList.add("show")
            xmark.classList.remove("show")
        }else{
            check.classList.remove("show")
            xmark.classList.add("show")
        }
    }
}
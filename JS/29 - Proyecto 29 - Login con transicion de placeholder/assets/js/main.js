

let labelUser = document.querySelector("#form__labelUser");
let inputUser = document.querySelector("#form__user");

let placeHolderUser = inputUser.placeholder;

let labelPass = document.querySelector("#form__labelPass");
let inputPass = document.querySelector("#form__pass");

let placeHolderPass = inputPass.placeholder;

inputUser.addEventListener("focus", () =>{
    inputUser.classList.remove("form__user")
    inputUser.classList.add("active")
    inputUser.placeholder = "";
    labelUser.classList.remove("disappear");
    labelUser.classList.add("form__label")
})

inputUser.addEventListener("blur", () =>{
    inputUser.classList.add("form__user")
    inputUser.classList.remove("active")
    inputUser.placeholder = placeHolderUser;
    labelUser.classList.add("disappear");
    labelUser.classList.remove("form__label")
})

inputPass.addEventListener("focus", () =>{
    inputPass.classList.remove("form__user")
    inputPass.classList.add("active");
    inputPass.placeholder = ""
    labelPass.classList.remove("disappear")
    labelPass.classList.add("form__label")
})

inputPass.addEventListener("blur", () =>{
    inputPass.classList.add("form__user")
    inputPass.classList.remove("active");
    inputPass.placeholder = placeHolderPass;
    labelPass.classList.add("disappear")
    labelPass.classList.remove("form__label")
})


let input = document.querySelector("#input");
let main = document.querySelector(".layout__main");
let ojito = document.querySelector(".fa-eye");

input.type = "password"

input.addEventListener("focus", ()=>{
    main.classList.add("focus")
})

input.addEventListener("blur", ()=>{
    main.classList.remove("focus")
})

ojito.addEventListener("click", ()=>{
    
    if(input.type === "password"){
        input.type = "text"
    }else{
        input.type = "password"
    }

})
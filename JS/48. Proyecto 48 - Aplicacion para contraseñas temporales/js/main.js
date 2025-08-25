

let controlRanger = document.querySelector(".range__main")
let controlNumber =  document.querySelector(".control__number")
let mainForm = document.querySelector(".main__form");
let letters = document.querySelector("#letters");
let upper = document.querySelector("#upper");
let numbers = document.querySelector("#numbers");
let simbol = document.querySelector("#simbols");
let passwordDom = document.querySelector(".generate__emain")
let copyPass = document.querySelector(".main__generate #coppy")

let valueRange = 5;

controlRanger.addEventListener("input", () =>{
    valueRange = controlRanger.value;
    controlNumber.innerHTML = valueRange
    
})

function getLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
    //A partir del 97 empiezan las minusculas
}

function getUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
    //A partir del 65 empiezan las mayusculas
}

function getNumber(){   
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
    //A partir del 48 empiezan los numeros
}

function getSimbol(){
    return String.fromCharCode(Math.floor(Math.random()*15)+33);
}

mainForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let password = "";
    let count = 0;
    if(letters.checked || numbers.checked || simbol.checked || upper.checked){
        do{
            if(letters.checked && count < valueRange){
                password+=getLower();
                count++;
            }

            if(upper.checked && count < valueRange){
                password+=getUpper();
                count++;
            }

            if(numbers.checked && count < valueRange){
                password+=getNumber();
                count++;
            }

            if(simbol.checked && count < valueRange){
                password+=getSimbol();
                count++;
            }
    }while(count< valueRange)
    }else{
        alert("Por favor seleccione un campo para crear su contraseña")
    }


    passwordDom.innerHTML = password;
})


copyPass.addEventListener("click", (e) =>{
    e.preventDefault();
    let password = passwordDom.innerHTML;

    navigator.clipboard.writeText(password)
    .then(()=>{
        console.log("contraseña copiada:", password)
        alert(`Su contraseña ${password}, se copio correctamente`);
        passwordDom.classList.add("copied");
        setTimeout(() => passwordDom.classList.remove("copied"), 3500);
    }) .catch(err => {
            console.error("Error al copiar", err);
        });
})

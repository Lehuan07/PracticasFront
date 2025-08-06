

let boton = document.querySelector(".container__btn")

const blurred  = document.querySelector(".background--blurred")
const sharp = document.querySelector('.background--sharp');



boton.addEventListener("click", ()=>{
    blurred.style.opacity = '0';
    sharp.classList.remove('oculto');
})
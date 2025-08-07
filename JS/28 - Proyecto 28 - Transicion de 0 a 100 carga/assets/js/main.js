

let boton = document.querySelector(".container__btn")
let texto = document.querySelector(".disolver")
let porcentaje = document.querySelector(".container__load")
const blurred  = document.querySelector(".background--blurred")
const sharp = document.querySelector('.background--sharp');




boton.addEventListener("click", ()=>{
    
    let i = 0;
    let blurLevel = 5;
    // Carga progresiva
    const carga = setInterval(() => {

        if (blurLevel <= 0) {
                blurred.style.display = "none"; 
            } else {
                blurLevel -= 0.05;
                blurred.style.filter = `blur(${blurLevel.toFixed(2)}px)`;
            }
        if (i <= 100) {
        porcentaje.innerHTML = `${i}%`;
        i++;
        } else {
            clearInterval(carga);
            
            boton.classList.add("disolver");
            texto.classList.remove("disolver");
            texto.classList.add("container__text");
            sharp.classList.remove("oculto");
        }
}, 50);

})
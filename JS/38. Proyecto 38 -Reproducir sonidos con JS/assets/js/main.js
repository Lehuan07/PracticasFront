

const botones = document.querySelectorAll(".game__sound");

botones.forEach(boton =>{
    boton.addEventListener("click", () =>{
        const rutaSonido = boton.dataset.sonido;
        const sonido = new Audio(rutaSonido);
        sonido.currentTime = 0 //Reiniciamos el audio
        sonido.play()
    })
})
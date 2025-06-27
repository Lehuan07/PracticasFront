

let btnComprobar = document.getElementById("comprobar");

let parrafo = document.getElementById("leyenda");

btnComprobar.addEventListener("click", function(event){
    
    let velocidad = document.getElementById("velocidad").value;
    let velocidadNumero = parseInt(velocidad);
    
    event.preventDefault();
    if(isNaN(velocidadNumero)){
        parrafo.textContent = "Por favor ingrese un numero valido";
        parrafo.style.color = "orange"
    }
    else if(velocidadNumero < 60){
        parrafo.textContent = `Su velocidad es ${velocidadNumero} y el maximo permitido es de 60. Siga asi buen ciudadano.`
        parrafo.style.color = "green";
    }
    else{
        parrafo.textContent = `Vas en exceso de velocidad, usted va a ${velocidadNumero} y el maximo permitido es de 60!`
        parrafo.style.color = "red";
    }
})


let parrafo = document.getElementById("parrafo");
let subtitulo = document.getElementById("subtitulo");
let result = 0


function sumas(...numeros){
    for(let contador = 0; contador < numeros.length; contador++){
        result += numeros[contador];
    }

    subtitulo.innerHTML = "La suma es: " + result;
    parrafo.innerHTML = "Los numero que pasaron fueron: " + numeros;
}

sumas(3,2,5,8,7,9);
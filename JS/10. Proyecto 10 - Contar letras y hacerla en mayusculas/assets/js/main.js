

function contadorPalabra(palabra){
    let cont = 0;
    
    
    for(let i = 0; i< palabra.length ; i++){
        cont ++;
    }
    
    return cont;
    
}

let palabra = prompt("Ingrese una palabra para saber cuantas letras tiene");

let resultado = contadorPalabra(palabra);

alert(
    `
    La palabra ingresada ${palabra.toUpperCase()}
    tiene ${resultado} N de letras
    `
)
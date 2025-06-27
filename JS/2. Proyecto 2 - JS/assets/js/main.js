
let marca = [
    "Ford ", " Chevrolette ", " Citroen ", " Fiat"
]

let velocidad = [
    "150 ", " 180 ", " 120 ", " -90 "
]

let stock = [
    " 2 ", " 1 ", " 30 ", " 800"
]

let modelos = [
    "Focus", "Agile", "C3", "Palio"
]

let parrafo = document.getElementById("mostrarEnPantalla");

let contenido = "";

for(let i=0; i<marca.length; i++){

    contenido +=
                `marcas: ${marca[i]},
                modelos: ${modelos[i]},
                velocidad: ${velocidad[i]},
                stock: ${stock[i]} </br> `

}

parrafo.innerHTML = contenido

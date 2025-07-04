

let impresion = document.getElementById("info");
let ancho = window.innerWidth;
let alto = window.innerHeight;
let url = window.location.href;

window.open("https://google.com", "_blank");

const titulo = "Esta son las medidas de su pantalla y el URL";



impresion.innerHTML = `
<h1>${titulo}</h1><br>
El ancho de la pantalla es de ${ancho}px, <br>
El alto es de ${alto}px, <br> mientras que usted
esta en la pagina ${url}`
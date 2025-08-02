

let buscarPalabra = document.querySelector("#buscar");
let texto = document.querySelector("#text");

buscarPalabra.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
    let palabraBuscar = buscarPalabra.value.trim();
    let contenidoOriginal = texto.textContent;

        if (palabraBuscar === "") {
    alert("Por favor, ingresá una palabra para buscar.");
    return; // Salir de la función si está vacío
    }


    if (contenidoOriginal.toLowerCase().includes(palabraBuscar.toLowerCase())) {
      // Crear una expresión regular para buscar la palabra (sin distinguir mayúsculas)
        let regex = new RegExp(`(${palabraBuscar})`, 'gi');

      // Reemplazar la palabra por una versión con <span>
        let contenidoResaltado = contenidoOriginal.replace(regex, `<span class="resaltado">$1</span>`);

        texto.innerHTML = contenidoResaltado;
        buscarPalabra.value = ""
    } else {
        alert(`La palabra "${palabraBuscar}" no está en el texto`);
    }
}
});


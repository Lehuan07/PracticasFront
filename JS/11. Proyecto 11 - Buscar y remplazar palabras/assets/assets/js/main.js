

let palabraABuscar = prompt("¿Qué palabra querés reemplazar?");
let palabraNueva = prompt(`¿Por qué palabra querés reemplazar a "${palabraABuscar}"?`);

function buscarPalabras(palabraABuscar, palabraNueva) {
    let textoElemento = document.getElementById("parrafo");
    let texto = textoElemento.textContent;

    // Hacemos comparación sin importar mayúsculas
    let regex = new RegExp(palabraABuscar, "i");

    if (regex.test(texto)) {
        let fraseFinal = texto.replace(regex, palabraNueva);
        textoElemento.textContent = fraseFinal;
        return fraseFinal;
    } else {
        return "Esa palabra no existe";
    }
}

alert(buscarPalabras(palabraABuscar, palabraNueva));

let sueldo = parseInt(prompt("¿Cuánto ganás por mes?"));

switch (true) {
    case (isNaN(sueldo)):
    alert("Ingresá un número válido.");
    break;

    case (sueldo <= 0):
    alert("Buscá trabajo, estás desempleado.");
    break;

    case (sueldo > 0 && sueldo < 1000000):
    alert("Estás cobrando poco.");
    break;

    case (sueldo >= 1000000):
    alert("¡Estás cobrando bien!");
    break;

    default:
    alert("Dato no reconocido.");
}
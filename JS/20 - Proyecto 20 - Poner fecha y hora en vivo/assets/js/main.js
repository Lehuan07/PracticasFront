

let fecha = document.querySelector("#fecha");
let hora = document.querySelector("#hora");

function mostrarHora() {
    let mostrarFecha = new Date();

    let diaActual = mostrarFecha.getDate();
    let mesActual = mostrarFecha.getMonth() + 1;
    let anio = mostrarFecha.getFullYear();

    let horaActual = mostrarFecha.getHours();
    let minutosActuales = mostrarFecha.getMinutes();
    let segundosActuales = mostrarFecha.getSeconds();

    let fechaTexto = "";

    fechaTexto += diaActual < 10 ? `0${diaActual}/` : `${diaActual}/`;
    fechaTexto += mesActual < 10 ? `0${mesActual}/` : `${mesActual}/`;
    fechaTexto += `${anio}`;

    fecha.innerHTML = fechaTexto;

    let horaTexto = "";

    horaTexto += horaActual < 10 ? `0${horaActual}:` : `${horaActual}:`;
    horaTexto += minutosActuales < 10 ? `0${minutosActuales}:` : `${minutosActuales}:`;
    horaTexto += segundosActuales < 10 ? `0${segundosActuales}` : `${segundosActuales}`;

    hora.innerHTML = horaTexto;
}

setInterval(mostrarHora, 1000);

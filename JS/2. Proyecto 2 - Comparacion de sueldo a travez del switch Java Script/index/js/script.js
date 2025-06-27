

let comparar = document.getElementById("btn");

let leyenda = document.getElementById("Comparacion");


comparar = document.addEventListener("click", function(event){
    let sueldo = document.getElementById("sueldo").value;
    let sueldoNumero = parseInt(sueldo);

    event.preventDefault();

    switch (true) {
        case isNaN(sueldoNumero):
            leyenda.textContent = "Por favor, ingresá un número válido.";
            leyenda.style.color = "blue";
            break;

        case (sueldoNumero == 0):
            leyenda.textContent = `Estás desempleado, buscá trabajo.`;
            leyenda.style.color = "red";
            break;


        case (sueldoNumero > 0 && sueldoNumero < 100000):
            leyenda.textContent = "Estás laburando pero está duro.";
            leyenda.style.color = "blue";
            break;

        default:
            leyenda.textContent = "¡Estás cobrando bien!";
            leyenda.style.color = "green";
            break;
    }

    document.getElementById("sueldo").value = "";
});
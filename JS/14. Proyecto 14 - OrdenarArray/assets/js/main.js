
/*💼 Enunciado 14: Comparación de sueldos
Un usuario ingresa su sueldo.

Dado un array de sueldos de la empresa, el programa debe:

Buscar los sueldos mayores o iguales al del usuario.

Ordenarlos de forma ascendente.

Mostrarlos por consola.*/

let ingresoSueldo = prompt("Ingrese su salario");
let sueldoNumero = parseInt(ingresoSueldo);

const sueldosEmpresa = [
    1500, 1300, 1400, 1600, 1200, 700, 600, 2000
];

function buscarSueldos(salarios, miSueldo){

    let busqueda = sueldosEmpresa.filter(salario => salario >= miSueldo);

    let ordenar = busqueda.sort((a, b) => a - b); 

    console.log(`Su salario es ${miSueldo}, y los que estan por encima del suyo es ${ordenar}`);
}


buscarSueldos(sueldosEmpresa, sueldoNumero)

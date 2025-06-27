

const nombre = "Nahuel";
const apellido = "Cejas";
let edad = 36;
let pais = "Argentina";
let conocimiento = [
    "Bolsa de valores ", " Programacion Frontend ", " Bases de datos ", " Video Juegos "
];

console.log(`Su nombre es: ${nombre}, y su apellido: ${apellido}, y tiene una edad de: ${edad}. Por ultimo, los conocimientos son: ${conocimiento}`);

edad = 37;

conocimiento.push(" Programador Frontend");

console.log(`Su nombre es: ${nombre}, y su apellido: ${apellido}, este año cumple los: ${edad}. Y sus conocimientos actualizados son: ${conocimiento}`);
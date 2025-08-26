

// 🎯 Capturamos elementos del DOM
let inputTarea = document.querySelector(".layout__input");
let listarTareasDOM = document.querySelector(".layout__article");

// 🧪 Verificamos si Local Storage está disponible
if (typeof localStorage !== "undefined") {
    console.log("Local Storage Ready");
} else {
    alert("Hay problemas en el LS");
}

// 📝 Evento al presionar Enter en el input
inputTarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
    e.preventDefault();

    // 🚫 Validamos que el campo no esté vacío
    if (inputTarea.value === "") {
        alert("Tenes que completar el campo para agregar nueva tarea");
        return;
    }

    // 📦 Recuperamos tareas existentes desde Local Storage
    let tareasExistentes = JSON.parse(localStorage.getItem("tarea")) || [];

    // 🆕 Creamos una nueva tarea como objeto
    let nuevaTarea = {
        tarea: inputTarea.value
    };

    // ➕ Agregamos la nueva tarea al array existente
    tareasExistentes.push(nuevaTarea);

    // 💾 Guardamos el array actualizado en Local Storage
    localStorage.setItem("tarea", JSON.stringify(tareasExistentes));

    // 🧹 Limpiamos el input y actualizamos la vista
    inputTarea.value = "";
    mostrarTareas();
}
});

// 📤 Función para mostrar todas las tareas en el DOM
function mostrarTareas() {
  // 🧼 Limpiamos el contenedor antes de renderizar
    listarTareasDOM.innerHTML = "";

  // 📦 Obtenemos las tareas guardadas en Local Storage
    let tareasGuardadas = JSON.parse(localStorage.getItem("tarea")) || [];

  // 🔁 Iteramos sobre cada tarea y la renderizamos
    tareasGuardadas.forEach((tareaIndividual, index) => {
    let contenedorTarea = document.createElement("div");
    contenedorTarea.classList.add("article__container");

    // 🧱 Estructura HTML de cada tarea
    contenedorTarea.innerHTML = `
        <input type="checkbox" id="tarea-${index}" class="container__check">
        <label for="tarea-${index}" class="container__goal">${tareaIndividual.tarea}</label>
        <i class="fa-solid fa-trash"></i>
    `;

    // 📥 Insertamos la tarea en el DOM
    listarTareasDOM.appendChild(contenedorTarea);
});
}

// 🚀 Mostramos las tareas al cargar la página
document.addEventListener("DOMContentLoaded", mostrarTareas);
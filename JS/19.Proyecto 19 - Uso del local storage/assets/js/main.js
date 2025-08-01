
//Traemos el form
let titulo = document.querySelector("#inputTitulo");
let subtitulo = document.querySelector("#inputSubtitulo");
let descripcion = document.querySelector("#textarea");
let btn = document.querySelector("#btnCrear");

//traemos la tarjeta
let contenedorTarjetas = document.querySelector("#contenedorTarjetas");


// Recuperar si ya hay artículos guardados
let articulos = JSON.parse(localStorage.getItem("articulos")) || [];


btn.addEventListener("click", function(event){
    //Evitamos la recarga del http
    event.preventDefault();

    //Comprobamos si esta disponible el local storage
    if(typeof (Storage) !== "undefined"){
        console.log("Local storage ready")
    }else{
        alert("No anda el Local Storage");
    }

    // Crear artículo con los valores actuales
    let nuevoArticulo = {
        titulo: titulo.value,
        subtitulo: subtitulo.value,
        descripcion: descripcion.value
    };

    if(titulo.value === "" || subtitulo.value === "" || descripcion.value === ""){
        alert("debes completar todos los campos")
        return;
    }else{
    //agregamos el articulo al final
    articulos.push(nuevoArticulo);

    // Guardar el array actualizado
    localStorage.setItem("articulos", JSON.stringify(articulos));
    }

    mostrarArticulos();

    // Limpiar el formulario si querés:
    titulo.value = "";
    subtitulo.value = "";
    descripcion.value = "";
})


function mostrarArticulos() {
    contenedorTarjetas.innerHTML = "";
    articulos.forEach((articulo, index) => {
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("layout__card");
        tarjeta.innerHTML = `
            <div class="header">
                <h2 class="card__subtitle">${articulo.subtitulo}</h2>
            </div>
            <h1 class="card__title">${articulo.titulo}</h1>
            <p class="card__text">${articulo.descripcion}</p>
            <div class="botones">
                <button class="card__btn-change">Ver más</button>
                <button class="card__btn-delete" data-index="${index}">Eliminar</button>
            </div>
        `;
        contenedorTarjetas.appendChild(tarjeta);
    });

    // Escuchar clicks en los botones eliminar (después de renderizar todo)
    let botonesEliminar = document.querySelectorAll(".card__btn-delete");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", () => {
            let index = boton.getAttribute("data-index");
            articulos.splice(index, 1); // Borramos del array
            localStorage.setItem("articulos", JSON.stringify(articulos)); // Actualizamos el storage
            mostrarArticulos(); // Volvemos a renderizar
        });
    });
}

window.addEventListener("DOMContentLoaded", mostrarArticulos);

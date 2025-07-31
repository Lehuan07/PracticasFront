
//Traemos el form
let titulo = document.querySelector("#inputTitulo");
let subtitulo = document.querySelector("#inputSubtitulo");
let descripcion = document.querySelector("#textarea");
let btn = document.querySelector("#btnCrear");

//traemos las cards
let cardSubtitle = document.querySelector("#cardSubtitle");
let cardTitle = document.querySelector("#cardTitle");
let cardText = document.querySelector("#cardText")


// Recuperar si ya hay artículos guardados
let articulos = JSON.parse(localStorage.getItem("articulos")) || [];

btn.addEventListener("click", function(event){
    event.preventDefault();

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

    articulos.push(nuevoArticulo);

    // Guardar el array actualizado
    localStorage.setItem("articulos", JSON.stringify(articulos));

    
})









/*
let tarjetas = document.querySelectorAll(".botones");

tarjetas.forEach(tarjeta =>{
    
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent ="Eliminar Tarjeta";
    btnEliminar.classList.add("card__btn-delate")

    tarjeta.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", () =>{
        const layout = btnEliminar.closest(".layout__card");
        let confirmacion = confirm("Realmente quieres eliminar?");
        if(!confirmacion){

        }
        else{

            layout.remove();
        }
    });

});

let cambiarEstilos = document.querySelectorAll(".card__btn-change");

cambiarEstilos.forEach(boton => {
    boton.addEventListener("click", () => {
        const tarjeta = boton.closest(".layout__card");
        tarjeta.classList.toggle("estilo-activo");
    });
});

*/
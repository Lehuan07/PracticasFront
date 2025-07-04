

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
        const header = tarjeta.querySelector(".header");

        // Cambiar clase general
        tarjeta.classList.toggle("cambiar--estilos");

        // Cambiar color de fondo del header
        header.style.backgroundColor = "#1B62CA";
    });
});
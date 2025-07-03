

let tarjetas = document.querySelectorAll(".layout__card");

tarjetas.forEach(tarjeta =>{
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent ="Eliminar Tarjeta";
    btnEliminar.classList.add("card__btn-delate")

    tarjeta.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", () =>{
        tarjeta.remove();
    });

});

let cabiarEstilos = document.querySelectorAll(".card__btn-change");

cabiarEstilos.forEach(cambiar =>{

    cambiar.addEventListener("click", () =>{
        cambiar.parentElement.classList.toggle("carta--oscura");
    });
});
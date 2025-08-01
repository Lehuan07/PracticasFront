

//Seleccion del DOM
let inventarioDom = document.querySelector(".article__cajas_fuera");
let cajas = document.querySelectorAll(".caja__fuera")
let estanteriaDom = document.querySelectorAll(".caja__dentro");
let cajasColocadas = 0;

// Ponemos id Unicos a cada caja mobible

cajas.forEach((caja, i) => {
    caja.setAttribute("id", "caja"+i)

    caja.addEventListener("dragstart", (e)=>{
        e.dataTransfer.setData("id", e.target.id)
    })
});

//Establecemos cada hueco de la estanteria para poder soltar las cajas

estanteriaDom.forEach((estanteria, i)=>{
    estanteria.addEventListener("dragover", function(e){
        e.preventDefault();
    });
    estanteria.addEventListener("drop", function(e){
    e.preventDefault();
    let cajaId = e.dataTransfer.getData("id");
    
    if (cajaId) {
        let caja = document.querySelector("#" + cajaId);

        if (this.children.length === 0) {
            this.appendChild(caja);
            this.style.boxShadow = "inset 2px 2px 5px rgba(0, 0, 0, 0.2)";
        } else {
            alert("Este espacio ya está ocupado");
        }

        if (inventarioDom.innerHTML.trim() === "") {
            alert("Todas las cajas fueron guardadas");
        }
    }
});

})
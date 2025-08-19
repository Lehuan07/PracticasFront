

let selection = document.querySelector(".selection");
let btnClose = document.querySelector(".selection__close");
let selectedBox = document.querySelector(".selection__imagen");
let imagenes = document.querySelectorAll(".main__article");
let imagenSelected = selectedBox.querySelector(".imagen__selected");

imagenes.forEach(imagen =>{
    imagen.addEventListener("click", () => {

        let img = imagen.querySelector(".article__img");

        imagenSelected.setAttribute("src", img.getAttribute("src"))

        selection.classList.add("selection__show")
    })
})

btnClose.addEventListener("click", () =>{
    selection.classList.remove("selection__show")
})
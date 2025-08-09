

let next = document.querySelector(".main__next");
let prev = document.querySelector(".main__prev");

let imagenes = document.querySelectorAll(".slides__items")

let count = 0;

next.addEventListener("click", () =>{
    count++;
    if(count > imagenes.length - 1){
        count = 0;
    }

    show();
})

let show = () =>{
    imagenes.forEach((img, i) =>{
        img.style.transform = `translateX(${100 * (i - count)}%)`
    })
}

prev.addEventListener("click", () =>{
    count--;
    if(count < 0){
        count = imagenes.length - 1;
    }

    show();
})


show();
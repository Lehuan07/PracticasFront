let layout = document.querySelector(".layout");
let upbtn = document.querySelector(".btn__up");
let downbtn = document.querySelector(".btn__down");
let left = document.querySelector(".layout__left");
let right = document.querySelector(".layout__rigth");

let sliderLength = document.querySelectorAll(".left__bg").length;
let sliderIndex = 0;

right.style.top = `-${(sliderLength - 1) * 100}vh`;

let actions = (action) => {
    if(action === "up"){
        sliderIndex++;
        if(sliderIndex > sliderLength - 1){
            sliderIndex = 0;
        }
    } else if(action === "down"){
        sliderIndex--;
        if(sliderIndex < 0){
            sliderIndex = sliderLength - 1;
        }
    }

    let windowHeight = layout.clientHeight;
    left.style.transform = `translateY(-${(sliderIndex * windowHeight)}px)`;
    right.style.transform = `translateY(${(sliderIndex * windowHeight)}px)`;
}

upbtn.addEventListener("click", () => {
    actions("up");
});

downbtn.addEventListener("click", () => {
    actions("down");
});

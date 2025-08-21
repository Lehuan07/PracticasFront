
    let btnUp = document.querySelector(".btn__up");
    let btnDown = document.querySelector(".btn__down")
    let layout = document.querySelector(".layout")
    let left = document.querySelector(".main__section")
    let rigth = document.querySelector(".main__description")
    let rigthWrapper = document.querySelector(".description__wrapper");
    let sliderLength = document.querySelectorAll(".section__img").length;
    let count = 0;


    let actions = (action) =>{

        if(action == "up"){
            count++;
            if(count > sliderLength - 1){
                count = 0;
            }

        }else if(action =="down"){
            count--;
            if(count < 0){
                count = sliderLength - 1;
            }

        }

        let windowHeight = layout.clientHeight;

        left.style.transform = `translateY(-${count * windowHeight}px)`;
        rigthWrapper.style.transform = `translateY(-${(sliderLength - 1 - count) * windowHeight}px)`;

    }

    btnUp.addEventListener("click", () =>{
        actions("up");
    })

    btnDown.addEventListener("click", () =>{
        actions("down");
    })
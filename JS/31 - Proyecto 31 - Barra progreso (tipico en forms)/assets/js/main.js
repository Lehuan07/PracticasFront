

    //Seleccion elemento del DOM y guardamos en variables
    let btnPrev = document.querySelector(".btn__prev");
    let btnNext = document.querySelector(".btn__next");
    let progressBar = document.querySelector(".steps__bar");
    let stepsCircle = document.querySelectorAll(".steps__step")

    let progress = 0 //Altura del progreso
    let counter = 1; //Contador de pasos

    btnNext.addEventListener("click", ()=>{
        counter ++;
        progress += 25;
        
        if(counter > stepsCircle.length){
            counter = stepsCircle.length;
            progress = 100;
            btnNext.style.add("disable")
        }
        progressBar.style.height = progress+"%";

        //Desabilitar y habilitar botones
        disableBtns(progress)
        //Activar Bordes y check
        borderActive()
    })

        btnPrev.addEventListener("click", ()=>{
        counter --;
        progress -= 25;
        
        if(counter < 1){
            counter = 1;
            progress = 0;
        }
        progressBar.style.height = progress+"%";

        //Desabilitar y habilitar botones
        disableBtns(progress)
        //Activar Bordes y check
        borderActive()
    })


    function disableBtns(progress){
        if(progress >= 100){
            btnNext.setAttribute("disabled", "true");
            btnNext.classList.add("disable");
        } else {
            btnNext.removeAttribute("disabled");
            btnNext.classList.remove("disable");
        }

        if(progress <= 0){
            btnPrev.setAttribute("disabled", "true");
            btnPrev.classList.add("disable");
        } else {
            btnPrev.removeAttribute("disabled");
            btnPrev.classList.remove("disable");
        }
    }

    function borderActive(){
        stepsCircle.forEach((step, index) =>{
            if(counter > index){
                step.classList.add("active")
                step.lastElementChild.style.opacity = 1
            }else{
                step.classList.remove("active")
                step.lastElementChild.style.opacity = 0
            }
        })
    }
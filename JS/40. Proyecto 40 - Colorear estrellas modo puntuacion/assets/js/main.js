

let stars = document.querySelectorAll(".fa-star");

stars.forEach((star, index) => {

    star.addEventListener("mouseover", ()=>{

        stars.forEach(star =>{
            if(star.classList.contains("active")){
                star.classList.remove("active")
            }
        })

        for(let count = 0; count <= index; count++){
            let startActual = stars[count]

            if(!startActual.classList.contains("active")){
                startActual.classList.add("active")
            }
        }

        
    })
})
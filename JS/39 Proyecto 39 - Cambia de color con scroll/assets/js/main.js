

const nav = document.querySelector(".layout__nav")

window.addEventListener("scroll", () =>{
    if(window.scrollY > 776){
        nav.classList.add("nav__scroll")
    }else{
        nav.classList.remove("nav__scroll")
    }
})

console.log(window.innerHeight);
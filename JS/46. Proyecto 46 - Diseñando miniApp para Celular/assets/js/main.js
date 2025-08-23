
const navButtons = document.querySelectorAll(".layout__nav .countainer__ico");
const articles = document.querySelectorAll(".section__countainer article");

navButtons.forEach(btn =>{
    btn.addEventListener("click", () =>{
        const index = btn.getAttribute("data-index");

        //Desmarco todos
        navButtons.forEach(b => b.classList.remove("icoactive"));
        articles.forEach(a => a.classList.remove("active"));

        //Marcar el clickeado
        btn.classList.add("icoactive");
        articles[index].classList.add("active");
    })
})
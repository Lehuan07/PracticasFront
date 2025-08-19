

let articles = document.querySelectorAll(".section__article")

let show = ()=>{
    const windowHeight = window.innerHeight;
    console.log(windowHeight)

    articles.forEach(article =>{
        let articleHeigth = article.getBoundingClientRect().top
        if(articleHeigth < windowHeight){
            article.classList.add("section__article--show")
        }else{
            article.classList.remove("section__article--show")
        }
    })
}

show();

window.addEventListener("scroll", show)


let main = document.querySelector(".layout__main");
let messages = document.querySelector(".main__messages");
let form = document.querySelector(".main__form");
let input = document.querySelector(".form__input");
let loader = document.querySelector(".layout__loader")



let sendMessage = (e) =>{
    e.preventDefault();
    let text = input.value;
    
    if(text.trim() != ""){
        messages.innerHTML += `
        <article class="message">
        <p class="message__name">Nahuel Cejas</p>
        <p class="message__text">${text}</p>
        </article>
        `
        input.value = "";
    }
}

setTimeout(()=>{
    loader.style.display = "none"
    main.style.display = "flex"; 
},5000)

form.addEventListener("submit", sendMessage);
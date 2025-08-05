

let emoji = document.querySelector(".emojis__emoji")


emoji.addEventListener("click", () => {
    
    if (emoji.classList.contains("emojis__emoji")) {
    emoji.classList.remove("emojis__emoji");
    emoji.classList.add("fav");
    } else {
    emoji.classList.remove("fav");
    emoji.classList.add("emojis__emoji");
    }
});


let titulo = document.querySelector(".main__title")

let texto = "Bienvenido al curso!";

let letterStart = 0;
let letterEnd = 1;

function write(){
    setInterval(()=>{
        titulo.innerHTML = texto.slice(letterStart, letterEnd);
        letterEnd++;
    },300)
}


write();
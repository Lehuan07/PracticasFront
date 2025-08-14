

let addNoteButton = document.querySelector(".main__button")

//Array de notas

let notes = [];


//Cargamos las notas guardadas
function loadTasksFromLocalStorage(){
    const data = localStorage.getItem("misNotas")
    if (data){
        notes = JSON.parse(data);
    }
}

//guardamos las notas
function saveNotesToLocalStorage(){
    localStorage.setItem("misNotas", JSON.stringify(notes))
}


function renderNotes(){
    
}

window.addEventListener("DOMContentLoaded", () => {
    loadTasksFromLocalStorage();
    renderNotes();
});

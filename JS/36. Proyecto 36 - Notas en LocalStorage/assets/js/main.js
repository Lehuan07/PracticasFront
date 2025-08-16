window.addEventListener("load", (event) =>{
    let btn = document.querySelector(".main__button")
    let notes = document.querySelector(".notes__container")

    btn.addEventListener("click", (e) =>{
        e.preventDefault();

        //Agregamos notas al contenedor
        createNote("", "");
    });

    getNotes();

    function createNote(body = "", title = ""){

        //Creo el html de la nota
        let note = document.createElement("article");
        note.classList.add("main__card")

        note.innerHTML +=`
        <div class="card__head">
            <input type = "text" class="head__title" value = "${title}"></input>
            <i class="note__icon fa-solid fa-trash-can"></i>
        </div>
        
        <textarea class="body__text" name ="body">${body}</textarea>
        `

        //Elementos del DOM a capturar
        let input = note.querySelector(".head__title");
        let textarea = note.querySelector(".body__text")
        let trash = note.querySelector(".note__icon");

        //Guardar datos de la nota
        input.addEventListener("input", ()=>{
            update();
        })

        textarea.addEventListener("input", ()=>{
            update();
        })

        //Eliminar notas de la lista
        trash.addEventListener("click", () =>{
            note.remove();
            update()
        })

        //Agrego nota al contenedor de notas
        notes.appendChild(note);
    }

    function update(){
        notesArray = [];

        let notesDOM = document.querySelectorAll(".main__card")

        notesDOM.forEach(noteDOM =>{
            let noteInput = noteDOM.querySelector(".head__title");
            let noteText = noteDOM.querySelector(".body__text");

            let note = {
                "title" : noteInput.value,
                "body" : noteText.value
            }
            
            if(note.body.trim() != "" || note.title.trim() != ""){

                notesArray.push(note)
            }
        })
        //Guardamos informacion
        localStorage.setItem("notes", JSON.stringify(notesArray));
    }

    //Funcion para traer las notas de nuevo
    function getNotes(){
        let notesStorage = JSON.parse(localStorage.getItem("notes"));
        if(notesStorage){
            notesStorage.forEach(note =>{
                createNote(note.body, note.title);
            })
        }
    }
});


let animales = ["Perro", "Gato", "Leon", "Tigre", "Mapache", "Delfin"];

const recorrerMostrar= () =>{
    document.write("<h1>Proyecto 12</h1>")

    /*for(let i = 0; i<animales.length; i++){
        let parrafo = `<p> Este animal es ${animales[i]}  </p>`

        document.write(parrafo);
    }*/

    animales.forEach((animal) =>{
        let parrafo = `<p> Este animal es ${animal}  </p>`

        document.write(parrafo);
    })
}

recorrerMostrar();
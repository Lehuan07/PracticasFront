

let concecionario = [
    {
    marca: "Mercedes",
    modelos: ["clase a ", "clase b ", "clase c"]
    },
    {
    marca: "Audi",
    modelos: ["a4 ", "a5 ", "a8"]
    },
    {
    marca: "Renault",
    modelos: ["clio ", "capture ", "megane"]
    }
];

function mostrar(datos){

    let empresa = document.getElementById("consecionario");
    datos.forEach(coches => {
        empresa.innerHTML += `<h1>Las marcas que tenemos son: ${coches.marca}</h1>`

        empresa.innerHTML += `<ul>`;
        coches.modelos.forEach(modelos=>{
            empresa.innerHTML += `<li>${modelos}</li>`;
        });
        empresa.innerHTML += `<ul>`;
    });
}

mostrar(concecionario);


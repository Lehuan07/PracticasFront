

let tableContainer = document.querySelector(".tables");

let result = 0;


//Sacamos numero de la tabla
for (let i = 1; i<=10; i++){
    //Mostramos resultado y creamos caja para las operaciones
    tableContainer.innerHTML += `
    <div class = "tables__item">
        <h2 class = "tables__title">
        Tabla del ${i}
        </h2>
        <ul class="table__list table__list--${i}">

        </ul>

    </div>
    `
    //Calcular resultado
    for(let n = 1; n<= 10; n++){
        result = i*n;

        //Mostramos operaciones en caja:
        let list = document.querySelector(".table__list--"+i);

        //Agregar opecacion

                list.innerHTML += `
                <li class="list__item">${i + "x" + n + "=" + result}
                </li>`;

    }

}
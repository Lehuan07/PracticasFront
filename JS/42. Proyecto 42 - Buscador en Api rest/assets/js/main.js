
const apikey = "reqres-free-v1";

let input = document.querySelector("#buscador");
let buscador = document.querySelector(".fa-magnifying-glass")



async function obtenerUsuarios() {
    try{
        const response = await fetch("https://reqres.in/api/users");
        const {data: usuarios} = await response.json();
        usuariosGlobal = usuarios;
        renderizarUsuarios(usuariosGlobal);

    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }

}

function renderizarUsuarios(lista){
            let contenedor = document.querySelector(".main__section")
        contenedor.innerHTML = "";

        lista.forEach(usuario => {
            contenedor.innerHTML += `
            <article class="section__article">
                    <div class="article__user">
                    <img src="${usuario.avatar}" alt="Foto del usuario" class="user__img">
                    <div class="user__date">
                        <p class="dates__name">${usuario.first_name}</p>
                        <p class="dates__date">${usuario.email}</p>
                    </div>
                </div>
                <div class="user__linear"></div>                    
                </article>
            `
        });
}

input.addEventListener("keyup", () =>{
    let nombreOEmail = input.value.toLowerCase().trim();
    const filtrados = usuariosGlobal.filter(usuario =>
        usuario.first_name.toLowerCase().includes(nombreOEmail) ||
        usuario.last_name.toLowerCase().includes(nombreOEmail)||
        usuario.email.toLowerCase().includes(nombreOEmail)
    )
    renderizarUsuarios(filtrados)
})

buscador.addEventListener("click", () => {
    input.dispatchEvent(new Event("keyup"));
});

obtenerUsuarios();
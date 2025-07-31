

let segundos = 0;
let intervalo = null;

const iniciar = document.querySelector("#iniciar");
const tiempo = document.querySelector("#tiempo");
const parar = document.querySelector("#parar")



function contadorTiempo(){
    //*Calculamos minutos y segundos
    const minutos = Math.floor(segundos/60);
    const secs = segundos % 60;
    //*Formateo los ceros y lo metemos en el tiempo
    tiempo.textContent = `${String(minutos).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}


iniciar.addEventListener("click", ()=>{
    //*Evitamos multiples intervalos
    if(intervalo) return;

    //*Ponemos en funcionamiento el cronometro
    intervalo = setInterval(() =>{
        //*Sumamos los segundos
        segundos++;
        //*Si llega a 60minutos se reinicia, como lo pide el ejercicio
    if (segundos >= 3600) {
        //*Reiniciamos todo y largamos un alerta
        clearInterval(intervalo);
        intervalo = null;
        alert("¡Llegaste al máximo de 60 minutos!");
        return;
    }else{
        //*Si no llega a 60min llamamos a contadorTiempo
        contadorTiempo();
        }
    }, 1000);
})


//*Paramos el tiempo (ENA!)
parar.addEventListener("click", ()=>{
    //*Limpiamos el intervalo. 
    clearInterval(intervalo)
    intervalo = null;
    //* Reinicimos los segundos a cero y volvemo 
    segundos = 0;
    //* a mostrar el tiempo en 00:00 con contadorTiempo().
    contadorTiempo();
})
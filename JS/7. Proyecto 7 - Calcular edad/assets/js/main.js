
function calcularEdad(){
    let fechaValida = false;
    let anioNacimiento;

    while(!fechaValida){
        let anioIngresado = prompt("Ingrese su fecha de nacimiento");
        let anioEnNumeros = parseInt(anioIngresado);
        let anioActual = new Date().getFullYear();

        if(isNaN(anioEnNumeros)){
            alert("Ingrese un numero valido");
        }
        else if(anioEnNumeros <= 1919 ){
            alert("Usted es demasiado viejo para vivir, llamen a la parca")
        }
        else if(anioEnNumeros > anioActual){
            alert("Usted nacio en el futuro o que paso?")
        }
        else{
            let calcular = anioActual - anioEnNumeros;
            return calcular;
            fechaValida = true;
        }
    }
}

let edadUsuario = calcularEdad();

alert("La edad ingresada es: " + edadUsuario);

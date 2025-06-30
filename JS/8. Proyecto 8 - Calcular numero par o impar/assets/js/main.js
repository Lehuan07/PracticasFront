
function devolverPar(){
    let esNumero = false;
    
    while(!esNumero){
        let ingreseNumero = prompt("Ingrese un numero para saber si es par o impar");
        let numeroParseado = parseInt(ingreseNumero);
        if(isNaN(numeroParseado)){
            alert("Ingrese un numero valido");
            continue;
        }
        else{
            esNumero = true
        }
        if(numeroParseado % 2 ==0){
            return "Su numero es par ya que ingreso " + numeroParseado;
        }
        else{
            return "Su numero es impar ya que ingreso " + numeroParseado;
        }
    }
}


let enviarNumero = devolverPar();

document.write(enviarNumero);
alert(enviarNumero);
console.log(enviarNumero);
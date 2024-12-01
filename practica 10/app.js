alert("Hola Francisco");

let numeroUsuario=0;

let numeroSecreto=prompt("¿Podrias indicarme un numero, por favor?");
numeroUsuario=prompt("Ingresa un numero");

do{
    if(numeroSecreto==numeroUsuario){
        alert("Acertaste el numero");
    }else{
        alert("No acertaste el numero");
    }
}while(numeroSecreto!=numeroUsuario);

console.log(numeroSecreto);
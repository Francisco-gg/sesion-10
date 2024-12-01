alert("Hola Francisco");

let numeroUsuario=0;
let numeroSecreto=0;

do{
    let numeroSecreto=prompt("¿Podrias indicarme un numero, por favor?");
    numeroUsuario=prompt("Ingresa un numero");

    if(numeroSecreto==numeroUsuario){
        alert("Acertaste el numero");
    }else{
        alert("No acertaste el numero");
    }

    console.log(numeroSecreto);
}while(numeroSecreto!=numeroUsuario);
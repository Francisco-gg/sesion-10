alert("Hola Francisco");

let numeroUsuario=0;
let numeroSecreto=25;

Math.floor(Math.random(numeroSecreto*10+1));

do{
    numeroUsuario=prompt("Ingresa un numero");

    if(numeroSecreto<numeroUsuario){
        alert("El numero secreto es menor");
    }else if(numeroSecreto>numeroUsuario){
        alert("El numero secreto es mayor");
    }

}while(numeroSecreto!=numeroUsuario);

alert("GANASTE, acertaste el numero");
console.log(numeroSecreto);
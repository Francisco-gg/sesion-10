
let x;
let y;
let odd;
let resultado;

odd=prompt("Elije una opcion: ");

switch(odd){
    case 1:{
        alert("SUMAR");
        x=prompt("Ingrese el primer numero: ");
        y=prompt("ingrese el segundo numero: ");

        resultado=x+y;

        alert("RESULTADO DE " + x, "+" + y, " ES: "+resultado);
        break;
    }

    case 2:{
        alert("RESTAR");
        alert("RECORDATORIO!!!!!!");
        alert("El primer número debe ser mayor que el segundo");
        alert("Con eso en mente...sigamos");
        x=prompt("Ingrese el primer numero: ");
        y=prompt("Ingrese el segundo numero: ");

        do{
            if(x<y){

                alert(x, "Es menor que " + y);
                alert("Ingrese de nuevo los 2 numeros");
                x=prompt("Ingrese el primer numero: ");
                 y=prompt("ingrese el segundo numero: ");
            }
        }while(x<y);

        alert("RESULTADO DE " + x, "-" + y, " ES: "+resultado);
        break;
    }

    case 3:{
        alert("MULTIPLICAR");
        alert("RECORDATORIO!!!!!!");
        alert("Que ambos numeros difieran de cero");
        alert("Con eso en mente...sigamos");
        x=prompt("Ingrese el primer numero: ");
        y=prompt("Ingrese el segundo numero: ");

        do{
            if(y==0){

                alert("QUE DIFIERAN DE CERO PORFAVOR :)");
                alert("Ingrese de nuevo los 2 numeros");
                x=prompt("Ingrese el primer numero: ");
                y=prompt("ingrese el segundo numero: ");
            }
        }while(y==0);

        alert("RESULTADO DE " + x, "x" + y, " ES: "+resultado);
        break;
    }

    case 4:{
        alert("DIVIDIR");
        x=prompt("Ingrese el primer numero: ");
        y=prompt("ingrese el segundo numero: ");

        resultado=x/y;

        alert("RESULTADO DE " + x, "/" + y, " ES: "+resultado);
        break;
    }

    default:{

        do{
        alert("ERROR 404");
        alert("ELIJA UNA OPCION VALIDA PROFAVOR");
        odd=prompt("Elija una opcion: ");
        }while(odd<=0 || odd>=5);
        break;
    }
}
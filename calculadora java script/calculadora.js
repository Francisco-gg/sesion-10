let odd;
var resultado;

do{
    odd=prompt("Elije una opcion  ||  1.SUMAR  ||  2.RESTAR  ||  3.MULTIPLICAR  ||  4.DIVIDIR  :");

    do{
        if(odd<=0 || odd>=5){
            alert("ERROR 404");
            alert("ELIJA UNA OPCION VALIDA PROFAVOR");
            odd=prompt("Elija una opcion: ");
        }
    }while(odd<=0 || odd>=5);
        
    if(odd==1){
    
        alert("SUMAR");
        x=Number(prompt("Ingrese el primer numero: "));
        y=Number(prompt("Ingrese el segundo numero: "));
        
        resultado = x + y;
    
        alert("RESULTADO DE "+x+"+"+y+" ES: "+resultado);
    
        seguir=prompt("Desea hacer otra operacion ? (s/n): ");
    }else if(odd==2){
    
        alert("RESTAR");
        alert("RECORDATORIO!!!!!!");
        alert("El primer número debe ser mayor que el segundo");
        alert("Con eso en mente...sigamos");
        x=Number(prompt("Ingrese el primer numero: "));
        y=Number(prompt("Ingrese el segundo numero: "));
    
        do{
            if(x<y){
                alert(x+" Es menor que "+y);
                alert("Ingrese de nuevo los 2 numeros");
                x=Number(prompt("Ingrese el primer numero: "));
                y=Number(prompt("Ingrese el segundo numero: "));
            }
        }while(x<y);
    
        alert("RESULTADO DE "+x+"-"+y+" ES: "+resultado);
        seguir=prompt("Desea hacer otra operacion ? (s/n): ");
    }else if(odd==3){
    
        alert("MULTIPLICAR");
        alert("RECORDATORIO!!!!!!");
        alert("Que ambos numeros difieran de cero");
        alert("Con eso en mente...sigamos");
        x=Number(prompt("Ingrese el primer numero: "));
        y=Number(prompt("Ingrese el segundo numero: "));
    
        do{
            if(y==0 || x==0){
    
                alert("QUE DIFIERAN DE CERO PORFAVOR :)");
                alert("Ingrese de nuevo los 2 numeros");
                x=Number(prompt("Ingrese el primer numero: "));
                y=Number(prompt("Ingrese el segundo numero: "));
            }
        }while(y==0 || x==0);
    
        alert("RESULTADO DE "+x+"x"+y+" ES: "+resultado);    
        seguir=prompt("Desea hacer otra operacion ? (s/n): ");
    }else if(odd==4){
    
        alert("DIVIDIR");
        alert("RECORDATORIO!!!!!!");
        alert("Que ambos numeros difieran de cero");
        alert("Con eso en mente...sigamos");
        x=Number(prompt("Ingrese el primer numero: "));
        y=Number(prompt("Ingrese el segundo numero: "));
        
        do{
            if(y==0 || x==0){
    
                alert("QUE DIFIERAN DE CERO PORFAVOR :)");
                alert("Ingrese de nuevo los 2 numeros");
                x=Number(prompt("Ingrese el primer numero: "));
                y=Number(prompt("Ingrese el segundo numero: "));
            }
        }while(y==0 || x==0);

        resultado=x/y;
    
        alert("RESULTADO DE "+x+"/"+y+" ES: "+resultado);
        seguir=prompt("Desea hacer otra operacion ? (s/n): ");
    }
    
}while(seguir=='s');
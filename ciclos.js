//actividad
/*
var CantSaludos = 0; //muestra la cantidad de saludos 
 
while(CantSaludos < 10){ //se realiza la operacion hallar la cantidad
    console.log("Hola"); //se muestra la acción que se realiza
    CantSaludos += 1; //se da el resultado 
}

/*¿Qué debe cambiar si quiere que salude 10 veces? 
//se debe cambiar el numero del ciclo
¿Cuántas veces saluda si en vez de  CantSaludos += 1 escribe  CantSaludos += 2 ? Explique por qué }
//la cantidad de saludos cambiaria a 3 porque en el ciclo muestra que debe el numero debe de ser menor a 5
¿Qué sucede si elimina la línea  CantSaludos += 2 ? Explique por qué
//la cantidad de saludos ya no seria exacta sino que seria infinita 
*/

/*var respuesta ="si";
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}


var valor = true;
var respuesta2;
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 0){
        valor = false;
    }      
}
*/
//taller de repaso 
//Cree un ciclo while que se repita 5 veces y en cada iteración imprima el número 2
var ciclo1= 0
while (ciclo1 < 5){ 
    console.log (2)
    ciclo1 += 1
}
 
//Desarrolle un ciclo while que itere 8 veces e imprima el número del ciclo en el que se encuentra
console.log ("punto 2")
var ciclo2= 0 
while(ciclo2 < 8){
    console.log ("va en la iteracion" + ciclo2);
    ciclo2+=1; 
}

//Diseñe un ciclo while que itere 10 veces, pero su incremento debe ser de 2 en 2
console.log ("punto 3")
var ciclo3 = 0 
while (ciclo3 < 20){
console.log ("va en la iteracion" + ciclo3);
ciclo3+= 2;
}

//Diseñe un ciclo while que se itere hasta que el usuario escriba la palabra ok
console.log ("punto 4 ")
var ciclo4 = prompt("ingrese ok para parar")

while ( ciclo4 != "ok"){
    console.log ("dijo" + ciclo4)
    ciclo4=prompt("ingrese ok para parar")
    }

//Desarrolle un ciclo while que pida un valor numérico y se detenga hasta que ese valor sea negativo
console.log("punto 5 ")
var ciclo5=prompt("ingrese un negativo para detenerse");
while( ciclo5 >= 0){
    console.log("dijo " + ciclo5)
    ciclo5=prompt("ingrese otro negativo para detenerse");
    }

//Elabore un ciclo while que reciba dos números, los sume y si el resultado es mayor a 20 debe detenerse. De lo contrario, debe pedir nuevamente dos valores.
console.log ("punto 6 ")
var suma= 0 
var num1; 
var num2;
while (suma <= 20)
num1=parseInt ()
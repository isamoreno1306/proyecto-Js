//punto 1 
console.log ("punto 1 ")
var ciclo1= 0
while(ciclo1 < 7){
console.log ("el numero de repeticiones que lleva es "+ciclo1);
ciclo1+=1;
}


//punto 2 
console.log ("punto 2 ")
var ciclo2= 0 
while(ciclo2 < 32){
console.log("multiplo" + ciclo2);
ciclo2 += 3;
}


//punto 3 
console.log ("punto 3 ")
var ciclo3= 0
while(ciclo3 < 52){
console.log("pares "+ ciclo3);
ciclo3 += 2;
}


//punto 4 
console.log ("punto 4 ")
var ciclo4= 1;
var x= prompt("ingrese el limite del ciclo");
while(ciclo4 <= x){
console.log("el numero par va en "+ ciclo4);
ciclo4+=2; 
}


//punto 5 
console.log("punto 5 ")
var ciclo5= prompt("ingrese un numero impar para detenerse")
while(ciclo5 %2 ==0){
console.log ("dijo", ciclo5);
ciclo5=prompt("ingrese un numero impar para detenerse");
}


//punto 6 
console.log ("punto 6")
var acumulador=0;
var ciclo6=0
var estudiante6=prompt ("ingrese una cantidad para determinar el limite")
while(ciclo6 <=estudiante6){
var edad= parseInt(prompt("ingrese la edad del estudiante"));
acumulador+=edad;
ciclo6+=1
}
console.log("el total de las edades de los estudiantes es " + acumulador);


//punto 7
console.log ("punto 7") 
var rifa= true;
var respuesta; 
while(rifa){
console.log ("la respuesta fue" + respuesta); 
respuesta=prompt("digite un numero");
if (respuesta==2){
rifa = false;
}
}


//punto 8 
console.log ("punto8")
var acumulador= 0;
var notas1=0
var nombreEstudiantes=prompt ("digite un promedio de las notas")
while(notas1 <=nombreEstudiantes){
var promedio= parseInt(prompt ("el promedio de las notas es de"+4));
acumulador+=promedio;
notas1+=5
}
console.log ("la cantidad del promedio es de"+notas1);
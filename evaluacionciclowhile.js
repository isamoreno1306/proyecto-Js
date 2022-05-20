//Evaluacion ciclo while 
//fecha:17/05/2022
//nombre: Isabella Moreno 


//punto 1 

console.log ("punto 1") //imprimimos el punto a realizar 
var max=prompt ("ingrese el numero hasta donde quiere conocer los multiplos de 5"); //debemos colocar el prompt ya que estamos solicitando los datos para dar a conocer
var contador=0; //es quien nos imprime uno de los valores a conocer 
while(contador<=max){ //el while es quien nos ayuda a determinar la condicion y asi imprimir las variables para determinar la operacion 
if(contador%5==0){ //con este punto ejecutamos y pasamos a evaluar la operacion, dodne nos da un resultado 
console.log ("el", contador,"si es multiplo de 5"); //determinamos y mostramos el mensaje de la operacion donde no dice si es o no como en este caso "multiplo de 5"
}else{ //ejecutamos el codigo especifico 
console.log ("el", contador,"no es multiplo de 5"); //determinamos otro mensaje que nos muestra el como queda la operacion finalmente 
} //cerramos la ejecucion del codigo  
contador++; //con esto incrementamos el valor de la variable en uno 
} //cerramos el ciclo while 


//punto 2 

console.log ("punto2")
var acumulador= 0;
var cantidad= prompt ("ingrese la cantidad de productos que va a llevar");
var ciclo2= 1 
while(ciclo2<=cantidad){
var costo=parseInt (prompt("ingrese el costo de los productos"));
acumulador+= costo 
ciclo2+=1
}
console.log ("el costo total a pagar es de" + acumulador);


//punto 3 

console.log ("punto 3")
var acumulador3= acumulador
var cantidad3= prompt ("¿quiere registrar un articulo?");
var ciclo3=1
while (cantidad3=="si"){
var costo3=parseInt(prompt("ingrese el precio"));
acumulador3+=costo3
cantidad3=prompt ("¿desea registrar un articulo?");
ciclo3+=1
}
console.log ("el costo total a pagar es de", acumulador3);


//punto 4 

console.log ("punto 4")
var acumulador4= acumulador
var cant4= prompt ("¿desea registrar un articulo");
var ciclo4=0
while (cant4=="si"){
var cost4=parseInt(prompt("ingrese el precio"));
acumulador+=cost4
cant4=prompt("¿desea registrar un articulo?");
}
var descuento;
if (ciclo4>=8<15){
cost4=acumulador-(acumulador*0.10); 
descuento=10;
}else if (ciclo4>=15<25){
cost4= acumulador-(acumulador*0.15);
descuento=15;
}else if (ciclo4>=25){
cost4= acumulador-(acumulador*0.20);
descuento=20;
}
console.log ("el costo total a pagar es de " +cost4+ "con descuento de" +descuento+"%");


//punto 5

console.log ("punto 5")
var acumulador5= 0;
var cantidad=prompt ("ingrese la cantidad de notas");
var ciclo5= 0;
var aprobo=0
var reprobo=0
while(ciclo5<=cantidad){
var notasEst=parseInt(prompt("digite el valor de la nota"));
acumulador=notasEst
ciclo5=1
if(notasEst<3.5){
console.log ("el estudiante no aprobo la materia")
reprobo+=1
}else{
console.log ("el estudiante aprobo la materia")
aprobo+=1
}if (reprobo>aprobo){
console.log ("se debe abrir el curso de verano")
}else{
console.log ("el numero de estudiantes no alcanza para abrir el curso de verano")

}
}
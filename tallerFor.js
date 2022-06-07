
//TALLER FOR 

//punto 1 
var numero = parseInt( prompt("ingrese un numero"));
var numero2 = prompt ("ingrese otro numero"); 
for(var i=numero; i<numero2; i++){
console.log (i)
}

//punto 2 y 3
var multiplicacion = parseInt(prompt( "ingrese un numero"));
for(var i = 0; i<=10; i++){
    console.log (multiplicacion+"x"+i+"="+multiplicacion* i);
}
var limite = parseInt (prompt("ingrese el limite que desee"));
var multiplicacion = parseInt(prompt( "ingrese un numero")); 
for(var i=0; i<=limite; i++){
 console.log (multiplicacion+ "x"+i+"="+multiplicacion* i); 
}
console.log (multiplicacion)    

//punto 4 
var arregloNumeros=[];
for (var i=0; i<10; i+=1){
var numero=prompt ("ingrese un numero");
arregloNumeros.push(numero);
}

//punto 5 
var arregloArticulos=[];
for (var i=0; i<5; i+=1){
var nombre=prompt ("ingrese el nombre de los articulos");
arregloArticulos.push(nombre);
}

 
var arregloPrecios=[];
for (var i=0; i<5; i+=1){
var nombre=prompt ("ingrese el precio de "+ arregloArticulos[i]);
arregloPrecios.push(nombre);
}

//punto 6 
var arregloArticulo=[]; 
var nombre=prompt("ingrese el nombre de el articulo ");
for(var i=0; i<5; i+=1){
    arregloArticulo.push(nombre);
console.log (i)
}






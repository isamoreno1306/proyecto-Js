//Maria jose tangarife e Isabella Moreno 
//ciclo while 

console.log ("punto 1 ")
var vueltas=0
var nombre 
var precio 
var cantidad
var total 
var articulo=prompt("ingrese la cantidad de productos que desea comprar");
while(vueltas < articulo){
var nombre=prompt("ingrese el nombre del producto ");
var precio=prompt("digite el precio del producto ");
var cantidad=prompt("ingrese la cantidad que desee llevar ");
var total =cantidad*precio
vueltas+=1
console.log ("por la compra de "+ nombre, "de $" + precio, "el total a pagar es de $" + total );
}
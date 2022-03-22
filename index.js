console.log ("hola mundo");
// comentarios en linea
/*comentario 
de 
varias 
lineas*/ 


 var nombreUsuario;
 let edadUsuario;
// declarar variables
var nombreVariable;
// crear variable sin asignar valor
/*inicializar variables:
asignar un valor al momento de crear la variable
*/
var gradoEstudiante="10A";
/*asignar un valor:
igualar una variable existente a un nuevo valor*/
edadUsuario=16;
// asignar valor desde otra variable 
console.log(edadUsuario);
var edad=17;
edadUsuario=edad;
console.log(edadUsuario);
/*asignar valor desde el teclado:
existen dos maneras de hacerlo la primera es por ventana emergente y la segunda es por medio de un formulario en html
*/
var valor= prompt ("ingrese un valor");
console.log ("la variable vale "+valor); 
/*constantes:
son valores que no pueden ser cambiados durante la ejecución del codigo. las constantes siempre deben ser inicializadas
*/
const PI= 3.1416;
/*imprimir por consola*/
//simple 
console.log ("");
console.log (valor);
//concatenado 
//operadores 
//suma 
var suma; 
suma = 5+4;
console.log (suma);
var a=12;
suma=a + 8;
console.log (suma);
var b= 20;
suma= a + b 
console.log (suma);
//resta 
var resultado;
resultado= a - b;
console.log (resultado);
resultado= b- a 
console.log (resultado); 
//multiplicación
var producto; 
producto= a * b; 
console.log (producto);
//division 
var division
division= a/b;
console.log (division);
division= b/a;
console.log (division);
//orden de operaciones 
var result;
result= a* b- 10;
console.log (result);
result= a*(b- 10);
console.log (result);
//exponente/poencia 
var exp= 3**2;
console.log (exp);
//carteras o string
var cadenita1= "3";
var cadenita2= "5"; 
var sumaCadenas= cadenita1 + cadenita2;
console.log (sumaCadenas);
var nombrecito="isabella";
var apellidito= "tangarife";
var nomCompleto= nombrecito+ " " + apellidito;
console.log (nomCompleto);
var longitud= nombrecito.length 
console.log (longitud);
console.log (nomCompleto.length);
//encontrar caracteres dda la poscicion en el vector 
var primeraLetra;
primeraLetra= nombrecito [0];
console.log (primeraLetra);
console.log (nombrecito[1]);
//encontrar la ultima poscicion de una cadena o vector 
longitud -1
nombrecito [nombrecito.length-1]
console.log (nombrecito.length-1);
//se debe buscar la longitud de la cadena y restarle 1 para encontrar la ultima letra 
//valores inmutables
//las posiciones de una cadena se pueden consultar pero no se pueden reasignar su valor 
nombrecito[0]= "p"
console.log (nombrecito);
nombrecito= "isabella";
console.log (nombrecito);
//parseo o casting
/*se trata de convertir la variable a otro tipo de datos, los canbios existentes son:
* a entero parceInt ()
* a decimal parseFloat ()
* a cadena string ()*/
//convertir variable 
var entero1= prompt("Ingrese un estero");
var entero2= prompt("ingrese otro entero");
var sumaE= entero1+entero2;
console.log("sin parceInt " + sumaE);
//forma1
/*convertir el dato justo en el momento en que se recibe por teclado
esto implica que cuando se llame la variable ya este convertida al tipo de dato deseado
*/
entero1= parseInt (prompt("Ingrese un entero"));
entero2= parseInt (prompt("ingrese otro entero"));
sumaE= entero1+entero2;
console.log ("convertido" + sumaE); 
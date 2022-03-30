//los arreglos son estructuras que alacenan informacion de cualquier tipo de datos, es decir, string, int,double,array, objetos, entre otros. los arreglos tienen operaciones tales como consultar, modificar, insertar y eliminar.

//los arreglos se declaran con corchetes []


//creacion de arrelo
var arreglo=[ "juan", 14];
console.log (arreglo);

//arreglo de arreglos 
var notasEstudiantes= [["sofia",4.8], ["isa", 4.6]];
console.log (notasEstudiantes);

//consultar contenido de arreglo
console.log (notasEstudiantes [0]);
console.log (notasEstudiantes [0][0]);//"sofia"
console.log (notasEstudiantes [1][1]);//"4.6"

//modificar elementos 
console.log (arreglo [0] + "tiene" + arreglo [1]);
arreglo[1]=15;
console.log (arreglo [0] + "tiene" + arreglo [1] + "años");

notasEstudiantes [1][1]= 5;
//mostrar mensaje
console.log (notasEstudiantes[1][0] + "obtuvo"+ notasEstudiantes[1][1] + "nota final");

//agregar elementos al arreglo 
console.log ("sin agregar"+ arreglo);
arreglo.push ("10A");
console.log ("agregado" + arreglo);


//agregar elementos al arreglo al inicio
arreglo.unshift ("perez");
console.log ("agregado "+ arreglo);

//eliminar elementos al arreglo 
console.log ("sin eliminar" + arreglo);
arreglo.pop (); //elimina el ultimo 
console.log ("eliminado" + arreglo);
arreglo.shift (); //elimina el primer elemento
console.log ("elimina.shift"+ arreglo);

//ejercicio
//crear al arreglo con los valores 
var arreglos= ["analisis ", "tecnologia", "desarrollo"];
console.log ("sin arreglo",arreglos);
arreglos [2]= "BBDD"
console.log ("arreglado", arreglos);
arreglos.pop ();
arreglo.unshift ("introduccion");
console.log ("vector convertido", arreglos);

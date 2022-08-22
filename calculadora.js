function suma (num1, num2){
    var resultado = num1 + num2
    var mensaje = "el resultado de sumar " + num1 + " y " + num2 + " es " + resultado; 
    // return mensaje;
    return resultado; 

    }
    function resta (num1, num2){
        var resultado = num1 - num2
        var mensaje = "el resultado de restar " + num1 + " y " + num2 + " es " + resultado; 
        // return mensaje;
        return resultado;     }
    function division (num1, num2){
        var resultado = num1 / num2
        var mensaje = "el resultado de sumar " + num1 + " y " + num2 + " es " + resultado; 
        // return mensaje;
        return resultado;     }
    function multiplicacion (num1, num2){
        var resultado = num1 * num2
        var mensaje = "el resultado de sumar " + num1 + " y " + num2 + " es " + resultado; 
        // return mensaje;
        return resultado;     }
    function potencia (num1, num2){
        var resultado = num1 **  num2
        var mensaje = "el resultado de sumar " + num1 + " y " + num2 + " es " + resultado; 
        // return mensaje;
        return resultado;         }

function main_calculadora(){
    var eleccion = prompt ("por favor ingrese el numero de la operacion de desea realizar \n 1.Suma \n 2. Resta \n 3. division \n 4. multiplicacion \n 5. potencia \n 6. doble de una suma\n 7. mitad de un producto")
       
    var numero1 = parseFloat (prompt("por favor ingrese el primer valor: "));
    var numero2 =  parseFloat (prompt("por favor ingrese el segundo valor: ")); 
    if(eleccion == 1){
        console.log (suma(numero1, numero2))
    }else if (eleccion == 2){
        console.log (resta(numero1, numero2))
    }else if (eleccion == 3){
        console.loz (division (numero1, numero2))
    }else if (eleccion == 4){
        console.log (multiplicacion (numero1, numero2))
    }else if (eleccion == 5){
        console.log (potencia (numero1, numero2))
    }else if (eleccion == 6){
        var resultadoSuma = suma(numero1, numero2)
        console.log ("el doble de la suma de "+ numero1 + "y "+ numero2 + "es "+ multiplicacion (resultadoSuma, 2 ))

    }else if (eleccion == 7){
        var resultadoProducto = multiplicacion (numero1, numero2)
        console.log ("la mitad del producto entre "+ numero1 + "y "+ numero2 + "es "+ division (resultadoProducto, 2 ))
    }
    else{
        console.log ("la operacion no se puede realizar")

    }
 }


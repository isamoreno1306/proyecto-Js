//Maria jose tangarife e Isabella moreno 
function multiplicacion (lado1, lado2){
        var resultado = lado1 * lado2
        return resultado
    }
        
function suma (lado1, lado2){
    var resultado = lado1 + lado2
    return resultado
}
function main_geometria(){
    var eleccion = prompt ("por favor ingrese la figura geometrica que desee \n 1. rectangulo \n 2. paralelogramo ")

    var eleccion2 = prompt (" por favor ingrese si quiere hallar el perimetro o el area \n 1.area \n 2. perimetro")
    var lado1= prompt("ingrese por favor los valores del  primer lado")
    var lado2= prompt("ingrese por favor los valores del  segundo lado")

    if (eleccion == 1 ){
        if(eleccion2 == 1){
            console.log (multiplicacion(lado1, lado2))
        }else if(eleccion2 == 2){ //2b + 2h
            var doblebase= multiplicacion (2, lado1)
            var doblealtura= multiplicacion (2, lado2)
            console.log ("el perimetro del rectangulo es "+suma (doblebase, doblealtura))

        }   
    }else if (eleccion == 2){
        if(eleccion2 == 1){
            console.log (multiplicacion(lado1, lado2))
        }else if(eleccion2 == 2){ //2b + 2h
            var doblebase= multiplicacion (2, lado1)
            var doblealtura= multiplicacion (2, lado2)
            console.log ("el perimetro del paralelogramo es "+suma (doblebase, doblealtura))

        }   
        }

}


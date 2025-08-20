// 1. Ejercicio 1: Función Declarada
// https://www.w3schools.com/js/js_functions.asp
// Escribe una función que tome tres números como argumentos 
// y retorne el mayor de ellos. Llama a la función con diferentes valores e imprime el resultado.

var1=5
var2=6
var3=8
function mayor(num1, num2,num3){
    if (num1>num2 && num1>num3)
        return num1
    else if (num2>num1 && num2>num3)
        return num2
    else
        return num3
}
console.log(mayor(var1,var2,var3)) 

// 2. Ejercicio 2: Función Expresada
// https://www.w3schools.com/js/js_functions.asp
// Crea una función expresada que reciba un array de strings y 
// retorne un string que concatena todos los elementos del array separados por espacios.

//es mejor crearlo como variable?? al array 
let concadenar= function(array){
    return array.join(' ') //usabamos este?? si 
}
console.log(concadenar(["hola", "como", "estas"]))

// 3. Ejercicio 3: Función Flecha
// https://www.w3schools.com/js/js_arrow_function.asp
// Convierte la función del ejercicio anterior a una función de flecha.
//  Además, agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia.

let concatenar2 = (array) => //no entiendo en que cambia con el if no deberia simplificar? con for se peede? 
    {if (array.lenght !== 0) return array.join(' ')
    else return "El array esta vacio"
    } 
console.log(concatenar2(["taylor", "swift", "era"]))

// 4. Ejercicio 4: Estructura If-Else
// https://www.w3schools.com/js/js_if_else.asp
// Escribe una función que tome una temperatura en grados Celsius 
// como argumento y devuelva un mensaje que indique si hace frío (menor a 15 grados), 
// templado (entre 15 y 25 grados) o calor (mayor a 25 grados).

temp= 15
let temperatura = (grados) => {
    if (grados< 15) return "hace frio"
    else if (15<=grados<=25) return "esta templado"
    else return "hace calor" 
}
console.log(temperatura(temp))

// 5. Ejercicio 5: Operador Ternario
// https://www.w3schools.com/js/js_comparisons.asp
// Reescribe una función que tome una hora (formato 24 horas) y devuelva 
// "Buenos días" si es antes de las 12, "Buenas tardes" si es entre las 12 y 18,
//  o "Buenas noches" si es después de las 18, utilizando operadores ternarios.

//condición ? valorSiVerdadero : valorSiFalso

// let edad = 19;
// let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";

// console.log(mensaje);

hora= 12

}


// 6. Ejercicio 6: Operadores And y Or
// https://www.w3schools.com/js/js_comparisons.asp
// Escribe una función que reciba cuatro argumentos booleanos y 
// retorne true si al menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso.

// 7. Ejercicio 7: Función que Calcula el Factorial
// https://www.w3schools.com/js/js_functions.asp
// Escribe una función que tome un número como argumento y retorne su 
// factorial. Utiliza una estructura if para manejar el caso base.










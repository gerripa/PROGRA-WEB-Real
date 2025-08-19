// 1. Ejercicio 1: Función Declarada
// https://www.w3schools.com/js/js_functions.asp
// Escribe una función que tome tres números como argumentos 
// y retorne el mayor de ellos. Llama a la función con diferentes valores e imprime el resultado.

function mayor(num1, num2,num3){
    if (num1>num2 && num1>num3)
        return num1
    else if (num2>num1 && num2>num3)
        return num2
    else
        return num3
}
console.log(mayor(5,6,15)) 

// 2. Ejercicio 2: Función Expresada
// https://www.w3schools.com/js/js_functions.asp
// Crea una función expresada que reciba un array de strings y 
// retorne un string que concatena todos los elementos del array separados por espacios.

let concaenar= function(array){
    return array.join(' ') //usabamos este??

}
console.log(concaenar(["hola", "como", "estas"]))


// 3. Ejercicio 3: Función Flecha
// https://www.w3schools.com/js/js_arrow_function.asp
// Convierte la función del ejercicio anterior a una función de flecha.
//  Además, agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia.

let concatenar2 = (array) 


// 4. Ejercicio 4: Estructura If-Else
// https://www.w3schools.com/js/js_if_else.asp
// Escribe una función que tome una temperatura en grados Celsius 
// como argumento y devuelva un mensaje que indique si hace frío (menor a 15 grados), 
// templado (entre 15 y 25 grados) o calor (mayor a 25 grados).

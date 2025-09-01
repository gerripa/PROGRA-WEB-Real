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
    {if (array.lengh !== 0) return array.join(' ');
    else return "El array esta vacio";
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
    else if (grados >=15 && grados<=25) return "esta templado";
    else return "hace calor"; 
};
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

let hora = 11

function saludarHora(hora) {
  return hora < 12  ? "Buenos días" : hora < 18 ? "Buenas tardes" : "Buenas noches";} //esto es legal?

console.log(saludarHora(hora)); // Buenos días
console.log(saludarHora(15)); // Buenas tardes
console.log(saludarHora(20)); // Buenas noches

// 6. Ejercicio 6: Operadores And y Or
// https://www.w3schools.com/js/js_comparisons.asp
// Escribe una función que reciba cuatro argumentos booleanos y 
// retorne true si al menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso.

let arg1= true 
let arg2= false
let arg3= true
let arg4= false 

function evaluarbool(v1, v2, v3, v4){return (v1 || v2) && (!v3 || !v4);}

console.log(evaluarbool(arg1, arg2, arg3, arg4))


// 7. Ejercicio 7: Función que Calcula el Factorial
// https://www.w3schools.com/js/js_functions.asp
// Escribe una función que tome un número como argumento y retorne su 
// factorial. Utiliza una estructura if para manejar el caso base.

let numero = 5
function factorial(n){ if (n<0) return "no tiene factoral"; 
    if (n===0|| n ===1) return "factorial es 1";
    let resultado= 1;
    for (let i=2; i<=numero; i++){resultado*=i;}
    return resultado;
}
console.log(factorial(numero)) //ponemos varias llaves para separar los bloques, instrucciones 

// 8. Ejercicio 8: Función con Parámetros por Defecto
// https://www.w3schools.com/js/js_function_parameters.asp
// Crea una función que salude a una persona. Si no se proporciona
//  el nombre, debe saludar con "Hola, invitado".

let nombre_persona= "guada"
let nombre_vacio= ''
function saludar (persona){
    if (persona) return `hola, ${persona}`;
    else return "hola, invitado";
}
console.log(saludar(nombre_persona));
console.log(saludar(nombre_vacio));

// 9. Ejercicio 9: Función que Verifica Números Pares
// https://www.w3schools.com/js/js_comparisons.asp
// Escribe una función que tome un número y retorne 
// true si es par o false si es impar. Utiliza el operador 
// módulo (%) y un operador ternario.

let numero_par= 4
let numero_impar= 7

function par_impar(numero){return (numero % 2==0)? true : false;};
console.log(par_impar(numero_impar))
console.log(par_impar(numero_par))

// 10. Ejercicio 10: Uso de switch
// https://www.w3schools.com/js/js_switch.asp
// Escribe una función que reciba un día de la 
// semana (en número) y retorne el nombre del día. Usa una estructura switch.
    

function dia_semana(numero){
    switch (numero){
        case 1:
            return "lunes";
        case 2:
            return"martes";
        case 3: 
            return "miercoles";
        case 4:
            return "jueves";
        case 5:
            return "viernes";
        case 6:
            return "sabado";
        case 7:
            return "domingo";
        default:
            return "numero no invalido";
            }
        }

console.log(dia_semana(3)); 
console.log(dia_semana(7)); 
console.log(dia_semana(0));

// 11. Ejercicio 11: Función Recursiva
// https://www.w3schools.com/js/js_functions.asp
// Crea una función recursiva que calcule la suma de los números de 1 hasta n.

// Una función recursiva es una función que se llama a 
// sí misma para resolver un problema, repitiendo 
// el proceso con valores más pequeños hasta llegar a 
// un caso base que termina la repetición.

function recursiva(n){
    if (n===1) return 1; 
    else return n + recursiva(n -1);
}
console.log(recursiva(4));

// 12. Ejercicio 12: Validación con Operadores Lógicos
// https://www.w3schools.com/js/js_comparisons.asp
// Escribe una función que verifique si una contraseña 
// cumple con ciertos criterios: al menos 8 caracteres, 
// contiene un número y una letra mayúscula. Utiliza 
// operadores lógicos para combinar las condiciones.

let contrasenia = "password123"
 function contra_verifico(contra){ 
    if (contra.length <8) return "Contra invalida, al menos 8 caracteres";
    let tieneMayuscula = false;
    let tieneNumero = false;

    for (let i = 0; i<contra.length; i++){
        let char = contra[i];
        if (char >= 'A' && char <='Z') tieneMayuscula = true;
        if (char>='0' && char<='9') tieneNumero= true;}

    if (!tieneMayuscula) return "Contra inválida, falta una mayúscula";
    if (!tieneNumero) return "Contra inválida, falta un número";
    return "Contra válida";
 }
console.log(contra_verifico(contrasenia))


// ESTO DE TEST SE PUEDE????
//  function contra_verifico(contra){ 
//     if (contra.length < 8) return "Contra inválida, al menos 8 caracteres";
//     if (!/[A-Z]/.test(contra)) return "Contra inválida, falta una mayúscula";
//     if (!/[0-9]/.test(contra)) return "Contra inválida, falta un número";
//     return "Contra válida";
// }



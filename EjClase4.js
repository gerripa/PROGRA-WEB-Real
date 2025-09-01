const prompt = require("prompt-sync")();


// 1. Ejercicio 1: Ciclo For
// https://www.w3schools.com/js/js_loop_for.asp
// Escribe un ciclo for que imprima los números pares entre 1 y 20.

for (let i=2; i<=20; i+=2){console.log(i)}


// 2. Ejercicio 
// 2: Iterar un Array
// https://www.w3schools.com/js/js_arrays.asp
// Crea un array con los nombres de tus cinco películas favoritas y usa un ciclo for para 
// imprimirlas con su respectivo número de posición (ej. "1. El Padrino").

let peliculas=['crepusculo1', 'crpusculo2','crepusculo3','crepusculo4','crepusculo5']
let len= peliculas.length
for (let i=0; i<len; i++){console.log((i+1) + '.' + peliculas[i])}


// 3. Ejercicio 3: Métodos de Arrays
// https://www.w3schools.com/js/js_array_methods.asp
// Usa el método forEach para recorrer un array de números y para cada número imprime si es par o impar.
// Utiliza el método find para buscar el primer número mayor que 20 en un array de números.
// Usa el método some para verificar si en un array de edades hay al menos una persona mayor de 18 años.

// -----> forEach → recorre todos los elementos.
// let numeros = [1, 2, 3];
// numeros.forEach(n => console.log(n)); // 1 2 3

//-----> find → busca el primer que cumpla algo.
// let edades = [10, 15, 25];
// let mayor = edades.find(n => n > 20); // 25

// -----> some → pregunta: ¿hay al menos uno que cumpla?
// let edades = [10, 15, 25];
// let hayMayor = edades.some(n => n > 20); // true

let numeros =[1,2,3,4,5,6]
let numeros2 =[1,2,3,15,23]
let edades =[1,2,3,14,17,29]

numeros.forEach(function(numero){
    if (numero % 2===0) {console.log(numero + " es par");}
    else {console.log(numero + " es impar");}
});

mayor20= numeros2.find(function(num){
    return num>20}
)
console.log("El primer número mayor a 20 es: " + mayor20)

let hayMayor18 = edades.some(function(edad){
    return edad>=18
}
)
console.log('Hay una edad mayor a 18?' + ' ' + hayMayor18)


// 4. Ejercicio (funcion)
// 4: Iterar un Array con for...of
// https://www.w3schools.com/js/js_loop_forof.asp
// Crea un array con los nombres de 5 países y usa un ciclo for...of para imprimir cada uno.

let paises= ['argentina', 'chile', 'inglaterra', 'eeuu', 'africa']
for (let pais of paises){
    console.log(pais)
}


// 5. Ejercicio 5: Uso de forEach
// https://www.w3schools.com/js/js_array_forEach.asp
// Utiliza el método forEach para imprimir cada elemento de un array de números.

let elementos=['a','b','c','d']
elementos.forEach(function(num){console.log(num)}
)

//otra forma con la flecha, mas rapido
elementos.forEach(elem => console.log(elem))

// 6. Ejercicio 6: Métodos de Arrays Avanzados
// https://www.w3schools.com/js/js_array_find.asp
// Usa el método find para encontrar el primer número par en un array de números.
// https://www.w3schools.com/js/js_array_some.asp
// Emplea el método some para verificar si al menos un elemento en un array es mayor que 20.
// https://www.w3schools.com/js/js_array_every.asp
// Utiliza el método every para comprobar si todos los elementos en un array son strings.

// find → devuelve el primer valor que cumple.
// some → devuelve true/false si existe al menos uno.
// every → devuelve true/false si todos cumplen.

//find
let nuemros3= [1,3,6,7,8]
let par= nuemros3.find(num => num%2===0)
console.log('El primero nuemro par es: ' + par)

//con function
let par2 = nuemros3.find(function(num){
    return num%2===0
}
)
//osea lo que hace la funcion internamente es ver cuendo es true o flase cuado es true el elemento lo devuelve

//some
let elementos2=[1.23,44]
let may20= elementos2.some(num => num>20)
console.log('Hay un numero mayor a 20?' + ' ' + may20)

//every
let elemntos3= ['hola','como',1]
let strr= elemntos3.every(elem => typeof elem === "string");
console.log('Todos los elementos son str?: ' + ' ' + strr)

//con function
let palabras = ["hola", "chau", "mundo"];
let todosStrings = palabras.every(function(palabra) {
  return typeof palabra === "string";   // condición: tipo de dato string
});
console.log("¿Todos son strings?: " + todosStrings);

// 7. Ejercicio 7: Transformación de Arrays
// https://www.w3schools.com/js/js_array_map.asp
// Crea un array de objetos que representen personas con propiedades como nombre y edad. 
// Usa map para crear un nuevo array que contenga solo los nombres.

let personas=[
    {nombre: 'guada', edad:19},
    {nombre: 'maggie', edad:20},
    {nombre:'sofia', edad:18}
];

//guardamos todos los nombres en la variable y map me va a crear el array con ellos 
let nombres = personas.map(function(p){
    return p.nombre;
})
console.log(nombres)

//pruebo lo del syncprompt
let nombre = prompt("¿Cómo te llamás? ");
console.log("Hola " + nombre);


let cantidad = parseInt(prompt("¿Cuántos números querés cargar? "));
let numeros5 = [];

for (let i = 0; i < cantidad; i++) {
  let valor = parseInt(prompt("Ingresá un número: "));
  numeros5.push(valor);
}
console.log("Array cargado: " + numeros5);








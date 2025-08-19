// // 1. Ejercicio 1: Declaración de Variables
// // https://www.w3schools.com/js/js_variables.asp
// // Declara tres variables: una para almacenar tu ciudad, otra para almacenar tu país, y
// //  otra para almacenar tu edad de nacimiento. Imprime los valores en la consola y después 
// //  intenta cambiar los valores y observa los resultados con let y const.

// let nombre = "Esteban"; // string
// let edad = 1 // Number
// console.log(nombre,edad) // print
// let = true // boolean

let ciudad = "Olavarria";
let pais = "Argentina";
let edad = 19
let nacimiento = "09/09/2005";

console.log(ciudad, pais, edad, nacimiento)

// reasigno los valores y se cambian 
ciudad = "Buenos ares"
pais = "Europa"
edad = 20
nacimiento = "09/08/2000"

console.log(ciudad, pais, edad, nacimiento)

// const ciudad= "Olavarria";
// const pais= "Argentina";
// const edad= 19
// const nacimiento="09/09/2005";

// // 2. Ejercicio 2: Operaciones Matemáticas
// // https://www.w3schools.com/js/js_arithmetic.asp
// // Declara tres variables numéricas. Calcula el promedio de las tres y 
// // encuentra el residuo de la división de la suma total entre 2. Imprime los resultados.

let a = 1
let b = 2
let c = 3

let promedio = (a + b + c / 3) //priomedio

let residuo = (a + b + c % 2) //residuo

console.log(promedio, residuo)

// // 3. Ejercicio 3: Tipos de Datos
// // https://www.w3schools.com/js/js_datatypes.asp
// // Declara una variable para almacenar un objeto que represente un coche 
// // con propiedades como marca, modelo y año. Imprime el tipo de cada propiedad con typeof.

// console.log(typeof(edad_numerica))

const coche = { marca: "audi", modelo: "a4", anio: "2025", }
console.log(typeof (coche.marca), typeof (coche.modelo), typeof (coche.anio))


// // 4. Ejercicio 4: Arrays Básicos
// // https://www.w3schools.com/js/js_arrays.asp
// // Crea un array con los nombres de 5 ciudades que te gustaría visitar.
// //  Reemplaza el tercer elemento por otra ciudad y luego imprime el array actualizado.

let ARRAY1 = ["paris", "londres", "roma", "berlin", "tokio",]

ARRAY1[2] = "barcelona"

console.log(ARRAY1)

// // 5. Ejercicio 5: Array de Objetos
// // https://www.w3schools.com/js/js_objects.asp
// // Crea un array de 3 objetos que representen películas, cada una con 
// // título, director y año de lanzamiento. Imprime el director de la última película.

let peliculas = [{ titulo: "titanic", director: "james", anio_de_lanzamiento: 2000 },
{ titulo: "taylorrep", director: "taylor", anio_de_lanzamiento: 1999 }, { titulo: "mylove", director: "harry", anio_de_lanzamiento: 2001 }]

console.log(peliculas[2].director)

// // 6. Ejercicio 6: Operadores Lógicos
// // https://www.w3schools.com/js/js_comparisons.asp
// // Declara tres variables booleanas y usa operadores lógicos para verificar si al menos dos son verdaderas. 
// // Imprime true o false en la consola dependiendo del resultado.

let var1 = 2 !== "5"
let var2 = 1 === 1
let var3 = 1 == 1

console.log(var1, var2, var3)

// // 7. Ejercicio 7: Comparaciones
// // https://www.w3schools.com/js/js_comparisons.asp
// // Declara tres variables numéricas. Compara si el primer número es 
// // mayor que el segundo y menor que el tercero. Luego, verifica si el segundo
// //  número es distinto al tercero. Imprime los resultados de las comparaciones.

let num1 = 5
let nume2 = 10
let num3 = 15

let comparacion = (num1 > nume2 && num1 < num3)

let distinto = (nume2 != num3)

console.log(comparacion, distinto)

// 8. Ejercicio 8: Concatenación de Strings
// https://www.w3schools.com/js/js_string_methods.asp
// Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido). 
// Luego, crea una tercera variable que concatene las dos primeras y muestra el resultado en la consola.

let nombre = "Guadalupe"
let apellido = "erripa"

let nombre_compelto = (nombre + ' ' + apellido)

console.log(nombre_compelto)

// 9. Ejercicio 9: Incremento y Decremento
// https://www.w3schools.com/js/js_operators.asp
// Declara una variable numérica y utiliza los operadores de
//  incremento (++) y decremento (--) para modificar su valor.
//   Imprime el valor de la variable después de cada operación.

// con el mas te lo suma tipo 101 y con el menos si lo toma como numero 
let numero = "10"

// numero+=1 
numero -= 1
console.log(numero)

// 10. Ejercicio 10: Propiedades de Objetos
// https://www.w3schools.com/js/js_objects.asp
// Crea un objeto que represente un estudiante con 
// propiedades como nombre, edad y carrera. Accede e imprime cada propiedad del objeto.

let estudiante = { nombre: "esteban" edad: 19, carrera: "ingenieria" }   //cuando creamos objetos los definimos con: 
console.log(estudiante.nombre, estudiante.edad, estudiante.carrera) //probarr

// 11. Ejercicio 11: Arrays Multidimensionales
// https://www.w3schools.com/js/js_arrays.asp
// Crea un array que contenga dos arrays internos, 
// cada uno con 3 números. Accede al segundo elemento del primer array interno.

let array_unidos = [[1, 2, 3], [4, 5, 6]]  //un array es lit una lista? cual es la diferencia a python?

console.log(array_unidos[1][0]) //probarr



// 12. Ejercicio 12: Operadores Relacionales
// https://www.w3schools.com/js/js_comparisons.asp
// Declara dos variables numéricas y utiliza los operadores 
// >, <, >=, <=, ===, !== para comparar sus valores. Imprime el resultado de cada comparación.

let numm1 = 5
let numm2 = 10

comparacion1 = (num1 > nume2)
comparacion2 = numm1 < numm2
comparacion3 = numm1 >= numm2
comparacion4 = nume1 === numm2
comparacion5 = numm1 !== numm2

console.log(comparacion1, comparacion2, comparacion3, comparacion4, comparacion5) //probarrrr

// 13. Ejercicio 13: Uso de typeof con Variables No Definidas
// https://www.w3schools.com/js/js_typeof.asp
// Declara una variable sin asignarle un valor y otra
//  variable con valor null. Utiliza typeof para imprimir el tipo de cada variable.

variable1 = undefined //esto es para no asignarle valor
variable2 = null

console.log(variable1, variable2) //probarr

// 14. Ejercicio 14: Conversión de Tipos
// https://www.w3schools.com/js/js_type_conversion.asp
// Declara una variable que almacene un número como string (por ejemplo, "123").
//  Convierte este string a un número usando parseInt o Number y demuestra que ahora
//  \ puedes realizar operaciones matemáticas con él.

let strvariable = "123"

strvariable = parseInt(strvariable) //asi??// // 1. Ejercicio 1: Declaración de Variables
// // https://www.w3schools.com/js/js_variables.asp
// // Declara tres variables: una para almacenar tu ciudad, otra para almacenar tu país, y
// //  otra para almacenar tu edad de nacimiento. Imprime los valores en la consola y después 
// //  intenta cambiar los valores y observa los resultados con let y const.

// let nombre = "Esteban"; // string
// let edad = 1 // Number
// console.log(nombre,edad) // print
// let = true // boolean

let ciudad = "Olavarria";
let pais = "Argentina";
let edad = 19
let nacimiento = "09/09/2005";

console.log(ciudad, pais, edad, nacimiento)

// reasigno los valores y se cambian 
ciudad = "Buenos ares"
pais = "Europa"
edad = 20
nacimiento = "09/08/2000"

console.log(ciudad, pais, edad, nacimiento)

// const ciudad= "Olavarria";
// const pais= "Argentina";
// const edad= 19
// const nacimiento="09/09/2005";

// // 2. Ejercicio 2: Operaciones Matemáticas
// // https://www.w3schools.com/js/js_arithmetic.asp
// // Declara tres variables numéricas. Calcula el promedio de las tres y 
// // encuentra el residuo de la división de la suma total entre 2. Imprime los resultados.

let a = 1
let b = 2
let c = 3

let promedio = (a + b + c / 3) //priomedio

let residuo = (a + b + c % 2) //residuo

console.log(promedio, residuo)

// // 3. Ejercicio 3: Tipos de Datos
// // https://www.w3schools.com/js/js_datatypes.asp
// // Declara una variable para almacenar un objeto que represente un coche 
// // con propiedades como marca, modelo y año. Imprime el tipo de cada propiedad con typeof.

// console.log(typeof(edad_numerica))

const coche = { marca: "audi", modelo: "a4", anio: "2025", }
console.log(typeof (coche.marca), typeof (coche.modelo), typeof (coche.anio))


// // 4. Ejercicio 4: Arrays Básicos
// // https://www.w3schools.com/js/js_arrays.asp
// // Crea un array con los nombres de 5 ciudades que te gustaría visitar.
// //  Reemplaza el tercer elemento por otra ciudad y luego imprime el array actualizado.

let ARRAY1 = ["paris", "londres", "roma", "berlin", "tokio",]

ARRAY1[2] = "barcelona"

console.log(ARRAY1)

// // 5. Ejercicio 5: Array de Objetos
// // https://www.w3schools.com/js/js_objects.asp
// // Crea un array de 3 objetos que representen películas, cada una con 
// // título, director y año de lanzamiento. Imprime el director de la última película.

let peliculas = [{ titulo: "titanic", director: "james", anio_de_lanzamiento: 2000 },
{ titulo: "taylorrep", director: "taylor", anio_de_lanzamiento: 1999 }, { titulo: "mylove", director: "harry", anio_de_lanzamiento: 2001 }]

console.log(peliculas[2].director)

// // 6. Ejercicio 6: Operadores Lógicos
// // https://www.w3schools.com/js/js_comparisons.asp
// // Declara tres variables booleanas y usa operadores lógicos para verificar si al menos dos son verdaderas. 
// // Imprime true o false en la consola dependiendo del resultado.

let var1 = 2 !== "5"
let var2 = 1 === 1
let var3 = 1 == 1

console.log(var1, var2, var3)

// // 7. Ejercicio 7: Comparaciones
// // https://www.w3schools.com/js/js_comparisons.asp
// // Declara tres variables numéricas. Compara si el primer número es 
// // mayor que el segundo y menor que el tercero. Luego, verifica si el segundo
// //  número es distinto al tercero. Imprime los resultados de las comparaciones.

let num1 = 5
let nume2 = 10
let num3 = 15

let comparacion = (num1 > nume2 && num1 < num3)

let distinto = (nume2 != num3)

console.log(comparacion, distinto)

// 8. Ejercicio 8: Concatenación de Strings
// https://www.w3schools.com/js/js_string_methods.asp
// Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido). 
// Luego, crea una tercera variable que concatene las dos primeras y muestra el resultado en la consola.

let nombre = "Guadalupe"
let apellido = "erripa"

let nombre_compelto = (nombre + ' ' + apellido)

console.log(nombre_compelto)

// 9. Ejercicio 9: Incremento y Decremento
// https://www.w3schools.com/js/js_operators.asp
// Declara una variable numérica y utiliza los operadores de
//  incremento (++) y decremento (--) para modificar su valor.
//   Imprime el valor de la variable después de cada operación.

// con el mas te lo suma tipo 101 y con el menos si lo toma como numero 
let numero = "10"

// numero+=1 
numero -= 1
console.log(numero)

// 10. Ejercicio 10: Propiedades de Objetos
// https://www.w3schools.com/js/js_objects.asp
// Crea un objeto que represente un estudiante con 
// propiedades como nombre, edad y carrera. Accede e imprime cada propiedad del objeto.

let estudiante = { nombre: "esteban" edad: 19, carrera: "ingenieria" }   //cuando creamos objetos los definimos con: 
console.log(estudiante.nombre, estudiante.edad, estudiante.carrera) //probarr

// 11. Ejercicio 11: Arrays Multidimensionales
// https://www.w3schools.com/js/js_arrays.asp
// Crea un array que contenga dos arrays internos, 
// cada uno con 3 números. Accede al segundo elemento del primer array interno.

let array_unidos = [[1, 2, 3], [4, 5, 6]]  //un array es lit una lista? cual es la diferencia a python?

console.log(array_unidos[1][0]) //probarr



// 12. Ejercicio 12: Operadores Relacionales
// https://www.w3schools.com/js/js_comparisons.asp
// Declara dos variables numéricas y utiliza los operadores 
// >, <, >=, <=, ===, !== para comparar sus valores. Imprime el resultado de cada comparación.

let numm1 = 5
let numm2 = 10

comparacion1 = (num1 > nume2)
comparacion2 = numm1 < numm2
comparacion3 = numm1 >= numm2
comparacion4 = nume1 === numm2
comparacion5 = numm1 !== numm2

console.log(comparacion1, comparacion2, comparacion3, comparacion4, comparacion5) //probarrrr

// 13. Ejercicio 13: Uso de typeof con Variables No Definidas
// https://www.w3schools.com/js/js_typeof.asp
// Declara una variable sin asignarle un valor y otra
//  variable con valor null. Utiliza typeof para imprimir el tipo de cada variable.

variable1 = undefined 
variable2 = null

console.log(variable1, variable2) //probarr

// 14. Ejercicio 14: Conversión de Tipos
// https://www.w3schools.com/js/js_type_conversion.asp
// Declara una variable que almacene un número como string (por ejemplo, "123").
//  Convierte este string a un número usando parseInt o Number y demuestra que ahora
//  \ puedes realizar operaciones matemáticas con él.

let strvariable = "123"

strvariable = parseInt(strvariable) 
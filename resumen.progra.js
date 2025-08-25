//Variables

// Se crean con:

// let → variable que puede cambiar.

// const → constante, no cambia.

// var → forma antigua (no se recomienda).

//ARRAY (LISTAS)

let numeros = [1, 2, 3];
console.log(numeros[0]); // → 1

// Métodos útiles:

// .push(valor) → agrega al final.

// .length → devuelve la cantidad de elementos.

const datos = ["Esteban", 1, true];
datos.push("hola"); // ["Esteban", 1, true, "hola"]

//OBJETOS --> Estructuras con propiedades (clave:valor).

let perro = {
  nombre: "Tai",
  edad: 11,
  vivo: true,
  cumplirAnios: function() {
    this.edad += 1;
  }
};
console.log(perro.nombre); 

// ARRAY DE OBJETOS 

const PERROS = [
  { nombre: "Tai", edad: 11 },
  { nombre: "Simón", edad: 4 }
];
console.log(PERROS[1].nombre); // Simón

//OPERADORES 

//si le pones ! adelante de algo q es true lo convierte en false
// ; --> lo ponemos al final de poner una tarea 
// Aritméticos: + - * / % **

// Comparación:

// == (igualdad débil, compara solo valor)

// === (igualdad estricta, compara valor y tipo)

// != (distinto)

// !== (distinto estricto)

// <, >, <=, >=

// Lógicos:

// && → AND

// || → OR

// % devuelve el resto de la división.

//FUNCIONES 

//DECLARADA --> Se escribe con la palabra clave function + nombre.

// Se pueden usar antes de declararlas (por el hoisting).
// Ejemplo: podés llamar saludar("Guada") arriba del código y funciona.

function saludar(nombre) {
  return "Hola " + nombre;
}

//EXPRESADA --> La función no tiene nombre propio (es anónima) y se guarda dentro de una variable.

// No se pueden usar antes de declararlas, porque la variable existe recién después de esa línea.
// Tenés que llamarla así: despedir("Erripa").

let despedir = function(apellido) {
  return "Chau " + apellido;
};

//FLECHA --> Es una forma más corta de escribir funciones.

// Si tiene una sola línea, no hace falta return ni { }.
// Tampoco se pueden usar antes de declararlas.
// Ejemplo: saludarFlecha("Lupe").

let saludarFlecha = nombre => "Hola " + nombre;

//Con backticks (template strings): Es como la declarada, pero usa backticks (`) para armar cadenas de texto más fácil.
// Con ${ } podés meter variables o cuentas dentro del string. --> `Texto cualquiera ${variable_o_expresion}`

function saludarConSuma(nombre) {
  return `Hola ${nombre}, la suma de 1+1 es ${1+1}`;
}

//ESTRUCTIRAS DE CONTROL --> if / else if / else

if (a > b) {
  console.log("a es mayor");
} else if (a === b) {
  console.log("son iguales");
} else {
  console.log("a es menor");
}

//OPERADOR TERNARIO --> (versión corta de if/else):
// Antes del ? → ponés la condición. (si es con funcion --> ppnemos el return primero, con variable no)

// Después del ? → lo que pasa si la condición es true.

// Después del : → lo que pasa si la condición es false.

//con variable 
console.log(a > b ? "a es mayor" : "a no es mayor");

//en funcion
function saludarHora(hora) {
  return hora < 12  ? "Buenos días" : hora < 18 ? "Buenas tardes" : "Buenas noches";} //esto es legal?

// FOR 

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//Ejemplo recorriendo str 

let nombre = "Guada";
for (let i = 0; i < nombre.length; i++) {
  console.log(nombre[i]);
}

//Ejemplo recoridnedo array de objetos 

const CARRITO = [
  { id: 1, nombre: "Remera", precio: 5 },
  { id: 2, nombre: "Pantalón", precio: 10 }
];

let total = 0;
for (let i = 0; i < CARRITO.length; i++) {
  total += CARRITO[i].precio;
}
console.log(total); // 15

//CONVERSION DE DATOS (PARSEO)

// parseInt("12") → convierte string a número entero.

// parseFloat("12.5") → convierte a número decimal.

// typeof → dice el tipo de dato.

//METODOS DE ARRAYS

// .sort() → ordena.

// .push() → agrega.

// .pop() → saca el último.

// .shift() → saca el primero.

// .unshift() → agrega al principio.

// .length → cantidad de elementos.

//LLAVES Y CORCHETES 

// Llaves { } → agrupan bloques de código (ejemplo en if o function).

// Corchetes [ ] → para arrays y para acceder a posiciones.









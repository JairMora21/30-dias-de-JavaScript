/* 
ES6
Fue lanzado en junio de 2015 y agregaron muchas funcionalidades como las siguientes
*/

/* 
Sintaxis de clases
ES6 introduce una nueva sintaxis para la creación de clases en JavaScript. Esto hace que el código sea más fácil 
de leer y entender, especialmente para desarrolladores con experiencia en lenguajes orientados a objetos.
*/
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
const persona = new Persona("Juan", 30);
persona.saludar(); // Output: "Hola, mi nombre es Juan y tengo 30 años."

/* 
  Template literals:
  ES6 introduce una nueva sintaxis para crear cadenas de texto de manera más sencilla y legible. Esto permite la
   interpolación de variables y expresiones dentro de las cadenas de texto.
  */
const nombre = "Juan";
const edad = 30;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
// Output: "Hola, mi nombre es Juan y tengo 30 años."

/* 
Arrow functions: 
ES6 introduce una nueva sintaxis para crear funciones anónimas de manera más corta y sencilla. 
Esto hace que el código sea más legible y fácil de escribir.
*/
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // Output: [2, 4, 6, 8, 10]

/* 
Spread operator: 
El spread operator es una característica que permite expandir un array o un objeto en una lista de valores. 
Se representa con los tres puntos (…) y se utiliza para copiar elementos de un array o para combinar elementos 
de varios arrays en uno solo. También se utiliza para pasar argumentos a una función de manera dinámica. 
*/
const numeros1 = [1, 2, 3];
const nuevosNumeros = [...numeros1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

/* 
Destructuring: 
ES6 introduce una nueva sintaxis para asignar valores de un objeto o un array a variables de manera
más sencilla y legible
*/
const persona1 = {nombre: "Juan", edad: 30};
const {nombre1, edad1} = persona;
console.log(nombre1); // Output: "Juan"
console.log(edad1); // Output: 30

/* 
Manejo de módulos: 
ES6 permite la importación y exportación de funciones y variables entre archivos de 
manera más sencilla y estructurada
*/

import { miFuncion } from './miArchivo.js';

export const otraFuncion = () => {};

/* 
Nuevos métodos de arrays: ES6 incluye métodos como “Array.prototype.find” y 
“Array.prototype.findIndex” que facilitan la búsqueda de elementos en un array
*/
const numeros2 = [1, 2, 3, 4, 5];
const encontrado = numeros2.find(n => n === 3);
console.log(encontrado); // Output: 3

/* 
Manejo de promesas: 
ES6 incluye mejoras en el manejo de promesas, permitiendo la utilización de métodos como “Promise.prototype.finally”
para ejecutar código independientemente del resultado de la promesa.
*/

const miPromesa = new Promise((resolve, reject) => {
    // código
  });
  miPromesa.finally(() => console.log('Promesa finalizada'));

  /* 
  Try catch: 
  En cuanto al manejo de errores y excepciones, ES6 incluye la introducción de la palabra clave “try-catch” 
  para el manejo de bloques de código que pueden generar excepciones.
  */
  try {
    // código que puede generar excepciones
  } catch (error) {
    console.log(error);
  }
/* 
ES7
es una versión del estándar ECMAScript para JavaScript. Fue lanzado en junio de 2016 y trae algunas 
características nuevas y mejoras al lenguaje. Algunas de las características más importantes incluyen:
*/

/* 
Exponentiation operator (**):
ES7 introduce un nuevo operador para elevar un número a una potencia. 
Anteriormente, esto podría ser logrado con la función Math.pow().
*/

console.log(2 ** 3); // Output: 8
console.log(Math.pow(2, 3)); // Output: 8

/* 
Trailing commas: 
ES7 permite la utilización de comas al final de una lista de argumentos, objetos y arrays. 
Este es un cambio sintáctico que ayuda a la legibilidad y mantenimiento del código. 
*/
const objeto = { nombre: "Juan", edad: 30 };
const array = [1, 2, 3]; //El poner una coma al final de un array u objetos ocasionaba errores en el pasado

/* 
string.prototype.padStart() y string.prototype.padEnd(): 
ES7 introduce dos nuevos métodos para el prototipo de String rellena la cadena actual con una cadena dada 
(repetida eventualmente) de modo que la cadena resultante alcance una longitud dada. El relleno es aplicadodesde 
el inicio (izquierda) de la cadena actual si es usado con padStart, y de modo contrario con padEnd.
*/
const cadena = "Hola";
console.log(cadena.padStart(7, "**")); // Output: "***Hola"
console.log(cadena.padEnd(7, "*")); // Output: "Hola***"

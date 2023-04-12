/* 
¿Que es la programacion funcional?
Es un enfoque de programación que se centra en el uso de funciones y evita el uso de estado y efectos secundarios
En JavaScript, la programación funcional se basa en el uso de funciones puras, es decir, funciones que no tienen 
efectos secundarios y siempre devuelven el mismo resultado dado el mismo input.

Principales funciones
el uso de first-class functions (funciones como primer ciudadano), es decir, se consideran como valores y pueden 
ser asignados a variables, pasados como argumentos a otras funciones y retornadas como resultado de otras funciones. 
Esto permite crear funciones más pequeñas y reutilizables que se pueden combinar para crear funciones más complejas.

EJEMPLO
EN esta funcion "add" toma 2 valores como argumentos y devuelve una suma
*/
function add(a, b) {
  return a + b;
}

/* adicionalmente, a esa funcion puede ser asignada a una variable y despues pasarla como un argumento a otra 
  funcion, como en este caso "makeOperation" 

  De esta forma, la función “makeOperation” se vuelve más genérica y reutilizable, ya que puede recibir cualquier 
  función que tenga la misma estructura de argumentos.
  */

const operation = add;

function makeOperation(operation, num1, num2) {
  return operation(num1, num2);
}

console.log(makeOperation(operation, 2, 3)); // Output: 5

/* 
Caracteristica importante
Es el uso de funciones puras. Esto significa que las funciones no tienen efectos secundarios y siempre devuelven el 
mismo resultado dado el mismo input

¿Para que sirve esto?
Esto hace que el código sea más fácil de probar y depurar, ya que no hay efectos 
secundarios ocultos que puedan afectar el comportamiento del código

EJEMPLO
la función map() es una función pura ya que toma un array de números como input y devuelve un nuevo array con los 
números transformados, sin modificar el array original
*/
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function(number) {
  return number * 2;
});
console.log(doubles); // [2, 4, 6, 8, 10] array modificado por el map
console.log(numbers); // [1, 2, 3, 4, 5] array original intacto

/* 
Resumen 
En resumen, la programación funcional es un enfoque de programación que se centra en el uso de funciones y evita 
el uso de estado y efectos secundarios. En javascript, se puede utilizar programación funcional mediante el uso de 
funciones como map, reduce, filter, arrow functions y librerías de programación funcional pura, lo cual permite 
crear código más fácil de probar y depurar.
*/


/* 
Recursos extras
https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-1-e0b1d0b2142e
https://www.youtube.com/watch?v=tP8JiVUiyDo
*/



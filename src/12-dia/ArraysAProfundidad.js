/* 
CREACION DE ARRAYS UTILIZANDO LA CLASE CONSTRUCTORA ARRAY

En JavaScript, los arrays se pueden crear de una forma diferente a la tradicional utilizando la clase constructora 
Array. La clase constructora Array proporciona una forma fácil y flexible de crear arrays con diferentes elementos 
y longitudes
*/
let myArray = new Array();

//tambien se puede escificicar los elementos que deseas incluir
let myArray1 = new Array(1, 2, 3, 4);

//ARRAY.FROM peromite crear un array apartir de un objeto similar o iterable
let myArray2 = Array.from("hello");
console.log(myArray2); // ["h", "e", "l", "l", "o"]

//ARRAY.FILL permite llenar un array con un valor especifico
let myArray3 = new Array(5).fill(0);
console.log(myArray3); // [0, 0, 0, 0, 0]

//ARRAY.ISARRAY permite determinar si un objeto es un array o no
let myArray4 = [1, 2, 3, 4];
console.log(Array.isArray(myArray4)); // true

/* 
 COPIANDO ARRAYS
 En JavaScript, es común tener la necesidad de hacer una copia de un array existente, ya sea para manipular los 
 datos sin afectar el array original o para trabajar con múltiples versiones del mismo array.
 */

//CREA UNA NUEVA INSTANCIA DEL ARRAY esto se logra usando el constructor Array
const originalArray = [1, 2, 3, 4];
//se usa el operador spread para expandir los elmentos del array original a una nueva instancia
const copiedArray = new Array(...originalArray);

console.log(originalArray === copiedArray); // Output: false

//USO DE METODOS INCORPORADOS, por ejemplo podemos utilizar el metodo slice para hacer un nuevo Array
const originalArray1 = [1, 2, 3, 4];
const copiedArray1 = originalArray.slice();

console.log(originalArray1 === copiedArray1); // Output: false

//Otro método incorporado es el método concat:
const originalArray2 = [1, 2, 3, 4];
const copiedArray2 = originalArray.concat();

console.log(originalArray2 === copiedArray2); // Output: false

//SPREAD OPERATOR es una forma buena para copiar un array.Spread te utiliza para expandir los elementos de un array a lista
const originalArray3 = [1, 2, 3, 4];
const copiedArray3 = [...originalArray];

console.log(originalArray3 === copiedArray3); // Output: false


/* 
ARRAYS BIDIMENSIONALES
Los arrays bidimensionales son un tipo de estructura de datos en la que cada elemento es un array y cada uno de 
esos arrays contiene más elementos. En otras palabras, son arrays de arrays. Estos pueden ser útiles para 
representar datos en un formato más organizado, como una tabla o una matriz.

Para crear un array bidimensional, puedes inicializar un array vacío y luego agregar arrays a sus elementos.
*/
const matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];

console.log(matrix);
// Output: [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ]

// También puedes crear un array bidimensional utilizando la clase constructora Array:

const matrix = new Array(3);
for (let i = 0; i < matrix.length; i++) {
  matrix[i] = new Array(3);
}

matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[0][2] = 3;
matrix[1][0] = 4;
matrix[1][1] = 5;
matrix[1][2] = 6;
matrix[2][0] = 7;
matrix[2][1] = 8;
matrix[2][2] = 9;

console.log(matrix);
// Output: [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ]

//Para acceder a un elemento específico en un array bidimensional, debes proporcionar dos índices
console.log(matrix[1][1]); //5

//tambien se puede copiar un array bidimensional con sprea operator
const originalMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const copiedMatrix = [...originalMatrix];

console.log(originalMatrix === copiedMatrix);
// Output: false

//tambien se pueden crear array tridimensionales
const cube = [];
for (let i = 0; i < 3; i++) {
  cube[i] = [];
	for (let j = 0; j < 3; j++) {
		cube[i][j] = [];
		for (let k = 0; k < 3; k++) {
			cube[i][j][k] = i + j + k;
		}
	}
}
console.log(cube);
// Output: 
//[
//  [[0, 1, 2], [1, 2, 3], [2, 3, 4]], 
//  [[1, 2, 3], [2, 3, 4], [3, 4, 5]], 
//  [[2, 3, 4], [3, 4, 5], [4, 5, 6]]
//]


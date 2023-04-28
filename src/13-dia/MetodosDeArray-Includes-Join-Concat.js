/* 
Array.prototype.includes()
El método Array.prototype.includes es una función para determinar si un elemento determinado existe en un array.
Este método es muy útil a la hora de verificar si un elemento específico está presente en un array o no, sin 
tener que recorrer todo el array.

Este método acepta dos parámetros: el primer parámetro es el elemento que se quiere buscar y el segundo parámetro
es el índice desde donde se iniciará la búsqueda. Si el segundo parámetro no se proporciona, la búsqueda comenzará 
desde el índice 0.

El metodo devuelve un booleano true o false dependiendo del resultado
*/
const numbers = [1, 2, 3, 4, 5];

const result = numbers.includes(3);

console.log(result); // true

/* 
Además de poder buscar elementos primitivos, como números y cadenas, el este método también puede buscar objetos 
y otros tipos de datos. Sin embargo, es importante tener en cuenta que para objetos y otros tipos de datos, la 
búsqueda se realiza utilizando la comparación de igualdad estricta (===), lo que significa que sólo se considerarán 
iguales dos objetos si se refieren a la misma ubicación en memoria.
*/

/* 
Array.prototype.join()
Se utiliza para convertir los elementos de un array en un solo string. Este método recibe como argumento un 
separador, que es una cadena de texto que se utilizará para separar los elementos del arreglo en el string 
resultante.
*/

const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join(", ");
console.log(fruitsString); // "apple, banana, cherry"
//en este caso usamos seperador, que lo definimos dentro del join(", "), si no lo ponemos el resultado seria asi
// "apple,banana,cherry"

/* 
 Array.prototype.concat()
 se utiliza para combinar dos o más arrays en uno solo. Este método no modifica los arrays originales, sino que 
 devuelve un nuevo array con los elementos de los arrays originales concatenados.
 */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const string = "hello";
const number = 123;

const result1 = array1.concat(array2, string, number);

console.log(result1); // [1, 2, 3, 4, 5, 6, "hello", 123]

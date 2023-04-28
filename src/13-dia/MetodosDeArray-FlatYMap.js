/* 
flat()
Permite combinar varios arreglos en un solo arreglo plano (sin niveles adicionales de anidamiento). Este método es
útil cuando se trabaja con arreglos multidimensionales y se desea obtener una sola secuencia de elementos en un 
solo arreglo.

Este metodo acepta un argumento opcional el cual indica la profundidad del anidamiento maximo el cual se debe hacer
*/

const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatArray = multiDimensionalArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//aplanar un arreglo de forma especifica
const multiDimensionalArray1 = [[1, 2, 3], [4, [5, 6]], [7, 8, 9]];
const flatArray1 = multiDimensionalArray1.flat(1);
console.log(flatArray1); // [1, 2, 3, 4, [5, 6], 7, 8, 9]

/* 
flatMap();
combina las funcionalidades de los métodos .map() y .flat() en uno solo. Para transformar cada elemento del 
arreglo, luego aplana el resultado hasta obtener un único arreglo con los elementos resultantes.

Este método se aplica a un objeto Array y toma como argumento una función que se aplicará a cada elemento del 
arreglo. La función aplicada a cada elemento devuelve un nuevo arreglo, y flatMap aplana este arreglo resultante 
en un único arreglo.
*/

const numbers = [1, 2, 3, 4];

const result = numbers.flatMap(x => [x, x * 2]);

console.log(result);
// Output: [1, 2, 2, 4, 3, 6, 4, 8]

/* 
Además de transformar y aplanar arreglos, flatMap también puede ser útil para eliminar elementos null o undefined 
de un arreglo. Aquí hay un ejemplo de cómo se puede hacer esto
*/

const values = [1, 2, 3, null, 4, undefined, 5];

const result1 = values.flatMap(x => x);

console.log(result1);
// Output: [1, 2, 3, 4, 5]

//Al igual que el método flat() este nos puede ayudar a trabajar con arrays bidimensionales

const bidimensionalArray = [[1, 2, 3], [4, 5, 6]];
const result2 = bidimensionalArray.flatMap(x => x);
console.log(result2);
// Output: [1, 2, 3, 4, 5, 6]
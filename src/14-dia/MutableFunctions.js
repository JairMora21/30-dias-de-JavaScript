/* 
Las funciones mutables en JavaScript son aquellas que pueden modificar el estado de los objetos y las funciones 
inmutables, que no pueden modificar el estado de los objetos y devuelven un nuevo objeto con los cambios

Las funciones mutables son usadas para manipular arrays, algunos ejemplos son el metodo push(), pop(), shift(),
unshift(), splice(), assing().

Hay que tener en cuenta que estas funciones pueden tener efectos secundarios, ya que modifican el estado de 
los objetos.
*/

//en este ejemplo se modifico el array original
const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
// Output: [1, 2, 3, 4, 5]
/* 
Por otro lado un ejemplo de array inmutable es el metodo concat(), ya que agrega un nuevo numero sin modifar
el array original */

// numbers1 jamas cambia su estado y newNumbers copia el original y añade uno nuevo
const numbers1 = [1, 2, 3, 4];
const newNumbers = numbers1.concat([5]);
console.log(numbers1);
// Output: [1, 2, 3, 4]
console.log(newNumbers);
// Output: [1, 2, 3, 4, 5]

//Tambien se pueden hacer mutable functions para modificar obetos de la misma manera

const person = {
  name: "John Doe",
  age: 30,
};

function addProperty(object, key, value) {
  object[key] = value;
}

addProperty(person, "address", "123 Main St");

//añade la llave adress junto a su valor
console.log(person); // Output: { name: 'John Doe', age: 30, address: '123 Main St' }

/* 
Además de modificar objetos y arrays individuales, también es posible usar mutable functions en combinación con 
bucles para modificar varios objetos y arrays al mismo tiempo. Aquí hay un ejemplo de cómo se puede hacer esto:
*/

const numbers2 = [1, 2, 3, 4];

const people = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  { name: "Jim Doe", age: 35 },
];

function addFive(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += 5;
  }
}

function addYear(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].age++;
  }
}

addFive(numbers2);
addYear(people);
console.log(numbers2);
// Output: [6, 7, 8, 9]
console.log(people);
// Output: [{ name: 'John Doe', age: 31 }, { name: 'Jane Doe', age: 26 }, { name: 'Jim Doe', age: 36 }]

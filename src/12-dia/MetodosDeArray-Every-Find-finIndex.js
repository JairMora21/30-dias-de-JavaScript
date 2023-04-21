/* 
Array.prototype.every()
El método every es una función que se utiliza en los arrays en JavaScript para comprobar si todos los elementos 
del array cumplen con una determinada condición. Devuelve un valor booleano que indica si todos los elementos 
del array cumplen con la condición especificada
*/

//querems comprobar si todos los numeros osn mayores a 0
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(function(element) {
	return element > 0;
});

console.log(allPositive); // Output: true

/* 
Además de comprobar si todos los elementos cumplen con una determinada condición, también puedes utilizar el
método every para realizar otras tareas en cada elemento del array.
*/

//vamos a comprobar si tiene una propiedad especifica
const objects = [{name: 'John'}, {name: 'Jane'}, {name: 'Jim'}];
const allHaveName = objects.every(function(element) {
  return element.hasOwnProperty('name');
});

console.log(allHaveName); // Output: true

/* 
Array.property.find()
El método find se puede utilizar en arrays para encontrar un elemento que cumpla con una condición determinada.
Este método devuelve el primer elemento que cumple con la condición o undefined si no se encuentra ninguno
*/

//vamos a buscar si se encuentra el numero mayor a 5, y si si nos devolvera el numero y detendra la busqueda
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers1.find(number => number > 5);

console.log(result);
// Output: 6

//se puede utilizar el metodo find con objetos,  en este ejemplo encontraremos el primer objeto con propiedad especifica
const people = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 28 },
    { name: 'Jim', age: 40 }
  ];
  const result1 = people.find(person => person.age === 32);
  
  console.log(result1); // Output: { name: 'John', age: 32 }


  /* 
  Array.protorype.findIndex
  El método findIndex es una función que se utiliza para buscar un elemento en un array y devolver el índice de 
  su primera aparición. A diferencia del metodo find() este devuelve el index del numero que se busca, y solo 
  del primero que encuentre
  */
  const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const index = numbers2.findIndex(num => num > 5);
  console.log(index); // Output: 5

  //si no se encuentra el numero indicado la funcion devuelve -1
  



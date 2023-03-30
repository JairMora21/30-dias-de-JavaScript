/* Los arrays en JavaScript son un tipo de objeto que permite almacenar una colección de valores. Estos valores pueden ser de cualquier tipo, como números, cadenas, objetos, incluso otros arrays */
let miArray = [valor1, valor2, valor3]; //sintaxis de un array

/* Uno de los métodos más populares en los arrays de JavaScript es “push()”. Este método permite agregar un nuevo elemento al final del array. 
Por ejemplo: */
let colores = ["rojo", "azul", "verde"];
colores.push("amarillo");
console.log(colores); // ["rojo", "azul", "verde", "amarillo"]

//Otro método popular es “pop()”, que permite eliminar el último elemento del array. 
//Por ejemplo:
colores.pop();
console.log(colores); // ["rojo", "azul", "verde"]

/* El método “map()” permite aplicar una función a cada elemento del array y devolver un nuevo array con los valores modificados.
Por ejemplo: */

const numeros = [1, 2, 3, 4, 5]; //tenemos un arreglo
const cuadrados = numeros.map(function(numero) { //creamos una funcion expresiva y al arreglo numeros le agregamos la funcion "map"
  return numero * numero; // la cual retorna el cuadrado perfecto de cada numero
});
console.log(cuadrados); // [1, 4, 9, 16, 25]


//Recursos extras 
/* Que es una funcion expresiva? https://acortar.link/Ls4wRm */
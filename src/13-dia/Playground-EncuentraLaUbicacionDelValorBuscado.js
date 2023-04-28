/* 
En este desafío, tu objetivo es encontrar un valor específico en un array de dos dimensiones.

La función searchValue recibirá dos parámetros: un array bidimensional y un valor a buscar. Tu tarea será 
implementar la lógica necesaria para encontrar el valor y retornar un objeto con las propiedades row y column 
que indicarán la posición del valor dentro del array bidimensional.

Si el valor no se encuentra en la matriz, la función deberá lanzar un error con el mensaje "Valor no encontrado". 
Recuerda que la sintaxis para lanzar errores es la siguiente

throw new Error("Valor no encontrado");
*/

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

const value = 9;
const value2 = 34;

function searchValue(array, value) {
  if (!array.flat().includes(value)) throw new Error("Valor no encontrado");

  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    console.log("i: " + i);
    console.log("Actual row: " + row);
    console.log("Actual column: " + row.indexOf(value));
    console.log("");

    if (row.includes(value))
      return {
        row: i,
        column: row.indexOf(value),
      };
  }
}

console.log(searchValue(array, value));
//searchValue(array, value2);


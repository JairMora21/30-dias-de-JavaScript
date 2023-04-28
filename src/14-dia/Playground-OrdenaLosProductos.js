/* 
En este desafío, tendrás que ordenar una lista de productos.

Tu tarea es implementar la lógica de la función sortByAvailabilityAndPrice. Esta función recibirá un array de 
objetos que representan productos, y devolverá una copia ordenada de dicho array.

El ordenamiento se realizará siguiendo dos criterios:

Primero, los productos disponibles en inventario serán colocados al principio de la lista.
Luego, los productos serán ordenados por su precio, de manera ascendente.
Es importante destacar que la lista original no sufrirá ninguna modificación, y que la función devolverá una nueva 
lista con los cambios mencionados
*/

//lista de productos
const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
];

//funcion de productos
function sortByAvailabilityAndPrice(products) {
    //ponemos el operador spreed (...) para que haga una copia del arreglo original y no lo modifique
  return [...products].sort(
    //hacemos un sort para ver si hay stock, y a los que sean false los acomodara por precio ascendentemente
    (a, b) => b.inStock - a.inStock || a.price - b.inStock
  );
}

console.log(sortByAvailabilityAndPrice(products));


/* 
ALTERNATIVA INTERESANTE 

const list = [...products];

  list.sort((a, b) => a.price - b.price);
  list.sort((a, b) => b.inStock - a.inStock);
  return list
*/
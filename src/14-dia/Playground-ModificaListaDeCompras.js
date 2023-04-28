/* 
En este desafío tendrás que procesar una lista de compras.

Deberás implementar la lógica de la función processShoppingList de tal manera que esta módifique el array original 
de la siguiente manera

Si el nombre del producto incluye la palabra "oferta", se debe aplicar un descuento del 20% al precio del producto.
Multiplicar el precio del producto por su cantidad
Eliminar el atributo quantity una vez hecho lo anterior.
Finalmente, debes retornar el total de la suma de todos los productos de la lista modificada.
*/

//La lista con la que se va a trabajar
const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
];

function processShoppingList(list) {
  //Inicializamos la variable total, esta retornara el total de precio de la lista de compras
  let total = 0;
  //Esta variable buscara la palabra "oferta" en el nombre de los articulos
  const palabraOferta = "oferta";

  //Este for recorrera la lista completa de compras
  for (let i = 0; i < list.length; i++) {
    //Esta variable sera el articulo actual
    let articulo = list[i];
    //Este if verificara si ña palabra oferta existe en el articulo
    if (articulo.name.includes(palabraOferta)) {
      //si existe, articulo se le descontara un 20%
      articulo.price *= 0.8;
    }
    //se multiplica el precio del articulo por la canidad de articulos
    articulo.price *= articulo.quantity;
    //Se le suma el precio del articulo al total
    total += articulo.price;
    //se borra el atributo cantidad de la lista
    delete articulo.quantity;
  }
  //retornamos el total
  return total;
}

console.log(processShoppingList(shoppingList));

/* Esta solucion me gusto ya que uso el metodo map para cambiar el precio del producto de una manera mas eficiente
Tambien utilizo

export function processShoppingList(list) {
  let total = 0;

  let newList = list.map(item => {
    if (item.name.includes("oferta")) {
      item.price = item.price * 0.8;
    }
    item.price = item.price * item.quantity;

    total += item.price;

    let { quantity, ...auxItem } = item;
    return auxItem;
  })

  Object.assign(list, newList);

  return total;
} */

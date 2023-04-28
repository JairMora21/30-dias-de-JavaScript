/* 
En este desafío, tendrás la tarea de agrupar una lista de productos según su categoría.

Para ello, debes implementar la lógica de la función groupProducts que recibirá dos parámetros: products y category.

El primer parámetro products es una lista de objetos que representan cada producto y contienen las propiedades: 
name, category y price. El segundo parámetro category específica a qué categoría se filtrarán los productos.

La función debe retornar un objeto con dos propiedades: products que contiene la cadena de texto con los nombres 
de los productos respetando el orden en el que llegan separados por comas, y totalPrice que contiene la suma total 
de los precios.
*/

//Delcaramos el objeto de productos
const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

//funcion para obtener grupo de productos
function groupProducts(producto, category) {
    //Obtiene los productos de la categoria requerida 
  const productosCategory = producto.filter(
    (product) => product.category == category
  );

  //obtiene el precio de los productos de la categoria requerida
  const totalPrecio = productosCategory.reduce(
    (acumulador, numero) => acumulador + numero.price,
    0
  );

  //con este for obtendremos todos los nombres de los productos encontrados
  let nombre = "";
  //recorre la lista de productos filtrados
  for (let i = 0; i < productosCategory.length; i++) {
    nombre = nombre.concat(productosCategory[i].name);
    //Si es el ultimo produto se omite la coma
    if (i < productosCategory.length - 1) {
      nombre = nombre.concat(", ");
    }
  }

  //creamos el nuevo objeto con los productos agrupados y su precio total
  const productosAgrupados = {
    produc: nombre,
    price: totalPrecio,
  };

  //retornamos 
  return productosAgrupados;
}

console.log(groupProducts(products, "Electronics"));
console.log(groupProducts(products, "Clothing"));

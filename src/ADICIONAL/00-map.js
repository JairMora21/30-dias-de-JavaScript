/* 
¿Para que se usa .map?
Lo usamos cuando tenemos un array y  queremos obtener un nueva array de otra cosa 

EJEMPLO
*/
//tenemos un array de numeros
const numeros = [3, 10, 20, 50];

/*queremos un array de sus dobles de cada numero anterior

 esta funcion recibe como primer parametro el elemento del array que va a transformar*/

/* 
 El proceso interno de map sería el siguiente:

1. Crea un nuevo array vacío, que tendrá la misma longitud que el array original.
2. Itera sobre cada uno de los elementos del array original (numeros).
3. Para cada elemento, ejecuta la función que se le pasó como argumento en map (en este caso, una función anónima que multiplica el número por 2).
4. Guarda el resultado de cada una de estas ejecuciones en el nuevo array creado por map (dobles).
5. Devuelve el nuevo array con los resultados de todas las ejecuciones.
 */
const dobles = numeros.map(function (numero) {
  return numero * 2;
});
//console.log(numeros); //[ 3, 10, 20, 50 ]
//console.log(dobles); //[ 6, 20, 40, 100 ]

/* 
RESTRICCIONES
No podemos ejecutar funciones asincronas ni esperar el resultado de un callback, lo que se hace dentro de map 
tiene que ser sincrono si o si 
*/

/* 
EJEMPLO REAL 
Tenemos un array de productos y queremos aplicarle un descuento a los productos que cuesten mas de 1000 o mas 

*/
const productos = [
  { id: "123", nombre: "Camiseta", precio: 500 },
  { id: "456", nombre: "‘Zapatillas", precio: 2000 },
  { id: "789", nombre: "Pantalén", precio: 1500 },
];

const productosConDescuento = productos.map(function (producto) {
  if (producto.precio < 1000) {
    return producto;
  }

  //producto.precio = producto.precio * 0.9; 
/* si nosotros ejecutamos lo que esta arriba  esto nos va a modificar el precio en el array 
original, ya que estamos modificando un atributo de un objeto que esta en el array original 
Lo correcto seria usar lo siguiente*/

return {
    ...producto,
    precio: producto.precio * 0.9
};


});

console.log(productos);
console.log(productosConDescuento);

// Si queremos extraer elementos de un array tambien map es util, se hace de esta manera 
const idProductos = productos.map(function(producto){
    return producto.id;
});
//hay maneras mas cortas de hacerlo, con arrow functions
const idProductosCorto = productos.map(producto => producto.id);



/* 
¿Que es y que hace filter?
Filter es como una maquina que va tomando cada lemento de un array y va decidiendo si cada uno de ellos pasa a 
un nuevo array, si el elemento en cuestion no cumple con cierta condicion, sera descartado, de esta manera el 
resultado de filter sera un nuevo array que contiene los elementos del array original que cumplen cierta condicion

Esto lo hara una fuccion que retornara true o false si queremos quedarnos con un elemento o no.
Esta funcion se llama "Predicado", esto es una funcion que afirma o niega si un elemento cumple con cierta condicion 

EJEMPLO
tenempos un objeto de productos y almacenaremos los productos baratos y caros 
*/

const productos = [
  { id: "123", nombre: "Camiseta", precio: 500 },
  { id: "456", nombre: "‘Zapatillas", precio: 2000 },
  { id: "789", nombre: "Pantalén", precio: 1500 },
];

//Aqui, dentro de la funcion pondremos que para que se considere barato el producto debe ser menor a 1000
const productosBaratos = productos.filter((producto) => producto.precio < 1000);
//Tambien tenemos la posibilidad de guardar el predicado en una variable y sera mas facil de leer el codigo
const esBarato = (producto) => producto.precio < 1000;
const productosBaratosPrueba = productos.filter(esBarato);
// Ahora si queremos el array de productos caros, pondremos otra variable de predicador y que sea diferente a barato
const esCaro = (producto) => !esBarato(producto);
const productosCaros = productos.filter(esCaro);

/* Filter tambien se puede usar para sacar los elementos repetidos de un array, aprovechando el ultimo 
parametro que recibe el predicado */

const numeros = [1, 2, 2, 3, 4, 3, 1];

//los parametros reciben el elemento, posicion en el array y el array en si 
const numerosUnicos = numeros.filter((numero,posicion,numeros) => {
   /*este return nos dira si la posicion que tiene el elemento sera la misma que tenemos usando indexOf
     como indexOf nos retorna la primer posicion donde encuentra el elemento para los primeros 4*/
    
    return posicion === numeros.indexOf(numero);

});


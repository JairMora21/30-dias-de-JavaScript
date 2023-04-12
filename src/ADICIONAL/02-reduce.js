/* 
¿Que es y para que sirve Reduce?
Es como una prensa, esta prensa necesita un array y un valor inicial que le tenemos que indicar nosotros 
con cada vuelta de la "palanca" (iteracion) opera con el valor que va acumulando del elemento del array,
tras operar con todos los elementos tenemos un unico valor como resultado

Lo que nosotros tenemos que escribir es la funcion reductora 
*/
//si queremos calcular la suma total debemos usar reduce 
const numeros = [3, 10, 20, 50];
/*el primer parametro de reduce es la funcion reductora, la que ira actualizando el acumulador y el segundo 
 parametro es el valor inicial del acumulador ¿, que en este caso es 0*/
 let total = numeros.reduce((acumulador, numero) => acumulador + numero , 0);

 console.log(total);


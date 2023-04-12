/* 
Debugging es el proceso de encontrar y corregir errores en el código. Es una parte importante del desarrollo
de software y es esencial para garantizar que el código funcione correctamente. 
En JavaScript, hay varias herramientas y técnicas disponibles para ayudar en el debugging y manejo de errores

Una de las mas comunes es el Try-Catch  Este bloque permite ejecutar código que podría generar un error, 
y capturar ese error en caso de que ocurra.

Por ejemplo, si se está tratando de dividir un número por cero, se puede capturar el error y mostrar un mensaje 
de error al usuario en lugar de tener que detener el programa
*/
try {
  //Código que podría generar un error
} catch (error) {
  //Código que se ejecuta si ocurre un error
  console.log(error);
}

/*
La sentencia throw se utiliza para generar una excepción o error en tiempo de ejecución, y new Error crea un 
nuevo objeto de error con un mensaje personalizado. Este mensaje es útil para proporcionar información sobre 
el error y para facilitar la solución de problemas. 

EJEMPLO REAL
Si el número num es mayor a 50, se lanzará una excepción con el mensaje "El número es mayor a 50".
El bloque catch capturará el error y lo imprimirá en la consola.
 */
try {
  const num = 100;
  if (num > 50) {
    throw new Error("El número es mayor a 50");
  }
} catch (error) {
  console.error(error.message);
}

/* 
  El comando debugger se utiliza para detener la ejecución del código en un punto específco, lo que permite 
  inspeccionar variables y entender el estado del programa en ese momento
  EJEMPLO
   la ejecución del código se detiene en la línea con “debugger” y se pueden inspeccionar las variables y 
   entender el estado del programa en ese momento
  */

let numero = 5;
console.log("hola"); //se imprime
debugger;
console.log("hola2"); //no se imprime por el debugger

let resultado = numero / 2;



/* Datos adicionales relacionados al tema


*/
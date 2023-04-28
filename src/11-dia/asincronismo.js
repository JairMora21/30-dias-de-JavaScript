/* 
JavaScript es un lenguaje asíncrono, lo que significa que las operaciones no bloquean el hilo de ejecución 
principal. Esto significa que varias operaciones pueden ocurrir al mismo tiempo sin afectar el rendimiento 
del programa. 


PROMESAS

Las promesas son un mecanismo para manejar operaciones asincrónicas en JavaScript de una manera más limpia y 
fácil de leer. Permiten que una función asíncrona devuelva una promesa, que es básicamente una forma de 
representar un valor que estará disponible en el futuro, ya sea de manera exitosa o con un error

Para crear una promesa, se utiliza el constructor Promise, el cual acepta una función que a su vez recibe dos 
parámetros: resolve y reject. El primero se usa para indicar que la operación se ha completado correctamente y
se puede obtener el valor, mientras que el segundo se usa para indicar que la operación ha fallado y se devuelve 
el error correspondiente.
*/
//Crea una promesa que devuelme el numero 42 despues de 2 segundos
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 2000);
});

/* 
  Podemos encadenar promesas para ejecutar múltiples operaciones asincrónicas de manera secuencial. Para ello, 
  se utiliza el método then de una promesa, el cual recibe como parámetro una función que se ejecutará cuando la 
  promesa se resuelva correctamente

  */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ number: 42, text: "hello" });
  }, 2000);
});

promise1
  //primero en multiplica x2 el numero de la promesa
  .then((result) => {
    const doubledNumber = result.number * 2;
    return doubledNumber.toString();
  })
  //imprime el resultado
  .then((result) => {
    console.log(`The result is ${result}`); //The result is 84
  })
  //si hay un error aqui lo captura
  .catch((error) => {
    console.error(error);
  });

/* 
  setInterval y setTimeout

  Los temporizadores son una característica importante en JavaScript para programar tareas para que se ejecuten 
  en el futuro. Dos de los temporizadores más comunes son setTimeout y setInterval

  etTimeout es una función que permite programar una tarea para que se ejecute después de un cierto período de 
  tiempo en milisegundos. La función toma dos parámetros: la función que se debe ejecutar después del tiempo 
  especificado y el tiempo en milisegundos antes de que se ejecute la función
  */
//imprime el texto despues de 5 segundos
setTimeout(() => {
  console.log("Han pasado 5 segundos");
}, 5000);

/* 
  Es importante tener en cuenta que setTimeout() devuelve un identificador único (un número) que puede ser utilizado 
  para cancelar el temporizador antes de que se ejecute. Para hacer esto, podemos usar la función clearTimeout() y 
  pasarle el identificador como argumento. Por ejemplo
  */

let id = setTimeout(() => {
  console.log("Han pasado 5 segundos");
}, 5000);

// Cancelar el temporizador
clearTimeout(id);

/* SetInterval()
En contraste con setTimeout, setInterval se utiliza para programar una tarea para que se repita en un intervalo de
tiempo determinado. La función toma dos parámetros: la función que se debe ejecutar en cada intervalo y la duración
de cada intervalo en milisegundos
*/
//imprime este mensaje cada 2 segundos
setInterval(() => {
    console.log('Han pasado 2 segundos');
  }, 2000);
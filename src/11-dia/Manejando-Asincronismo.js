/* 
Las promesas son una característica importante de JavaScript para manejar operaciones asíncronas y controlar su 
flujo. Pero, ¿cómo se manejan las promesas en el código de forma eficiente y efectiva?
*/

/* 
CALLBACK
Los callbacks son funciones que se pasan como argumentos a otra función y se llaman en algún momento después de 
que se complete la operación asíncrona.
*/
//se define una funcion que toma un ID de usuario y un callback como parametro
function getUserData(userId, callback) {
  //obtiene el objeto de datos del usuario
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    //luego llama al callback con los datos del usuario como argumentos
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}
function displayUserData(data) {
  console.log(data.name);
}

getUserData(1, displayUserData);

/*  
La desventaja de usar callbacks es que puedes crear un Callback Hell, que es un anti-patrón producido por anidar 
múltiples callbacks dentro de otros callbacks en un código asíncrono
*/
operation1(function(result1) {
    operation2(result1, function(result2) {
      operation3(result2, function(result3) {
        operation4(result3, function(result4) {
          // ...continuar con más operaciones
        });
      });
    });
  });

  /* 
  En este ejemplo, la ejecución de operation2 depende del resultado de operation1, y la ejecución de operation3 
  depende del resultado de operation2, y así sucesivamente
  */

  /* 
  PROMESAS
  Una forma de evitar el Callback Hell es utilizar Promesas o Async/Await, que proporcionan una forma más 
  estructurada y fácil de leer para manejar código asíncrono
  */
 //mismo codigo que el anterior pero con promises
 //cada operación devuelve una Promesa que se encadena usando el método then(). Esto hace mas legible el codigo

  operation1()
  .then(result1 => {
    return operation2(result1);
  })
  .then(result2 => {
    return operation3(result2);
  })
  .then(result3 => {
    return operation4(result3);
  })
  .then(result4 => {
    // ...continuar con más operaciones
  })
  .catch(error => {
    // Manejar errores
  });

  /* 
  ASYNC AWAIT
  Async/await es una forma más moderna y legible de manejar promesas. En lugar de usar callbacks anidados, async/await
  permite que el código parezca más secuencial y fácil de leer.
  */

  //se define la funcion que hace el mismo ejemplo que la funcion anterior 
  async function getUserData(userId) {
    //se usa una funcion try-catch para manejar los errores, pero esta ves se utiliza await para esperar respuesta
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function displayUserData(userId) {
    //tambien usa await para esperar la respuesta retornada
    const data = await getUserData(userId);
    console.log(data.name);
  }
  
  displayUserData(1);


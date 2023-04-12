/* 
Para tener una clausura/clausure en JavaScript necesitemos 3 ingredientes
1. Una funcion y que esta funcion este escrita dentro de una funcion
2. Alguna variable que este en el scope mas grande y que la funcion de abajo la utilize de alguna
manera, en este caso que se autoincremente.
3. Invocar a la funcion interna pero no desde el scope donde esta escrito, si no desde otro scope 

¿Que son las Claururas?
Las funciones anidadas que recuerdan el conjunto de variables a las que podian acceder , por mas 
que se les invoque desde otro lugar, desde otro scope

Ejemplo real abajo
*/

function crearContador() {
  let contador = 0;
  return function incrementar() {
    /*la funcion interna se a convertirdo a una clausura, ya que al tener una referencia a una variable declarada
    en el scope de una funcion superior es como si la funcion encerrara a la variabley se generara un vinculo 
    entre ellas (En este caso contador)  
     */
    contador = contador + 1;
    return contador;
  };
}

const contador1 = crearContador();
console.log(contador1()); //1
console.log(contador1()); //2
console.log(contador1()); //3
//entre mas lo ejecutamos la variable incrementa/cambia

/*si creamos otra variable de contador, el valor se reinicia nuevamente a 1 
Ya que cada ves ejecutemos una funcion en javascript se crea un nuevo contexto de ejecucion con un nuevo
entorno lexico */
const contador2 = crearContador();
console.log(contador2()); //1
console.log(contador2()); //2
console.log(contador2()); //3

/* Entorno lexico
Es un objeto que tienen los contextos de ejecucion donde se almacenan los nombres de las variables que existen
dentro de una funcion y los valores actuales que tienen */

/* 
  USO #1
  crear objetos de clausuras como se puede ver en este ejemplo */
export function ObjetoClausuras() {
  function crearContador() {
    let contador = 0;

    // todos estos sbjetos son clausuras
    return {
      incrementar: function () {
        contador = contador + 1;
        return contador;
      },
      decrementar: function () {
        contador = contador - 1;
        return contador;
      },
      obtenerValor: function () {
        return contador;
      },
    };
  }

  //ahora contador 1 no es una funcion, es un objeto
  const contador1 = crearContador();
  console.log(contador1.incrementar()); //1
  console.log(contador1.incrementar()); //2
  console.log(contador1.decrementar()); //1
  console.log(contador1.obtenerValor()); //1

  /* API
  La interfaz que tienen un objeto para interactuar con el mismo.
  Que metodos podemos invocar sobre ese objeto y a que propiedades internas nos permiten acceder */
}

/* USO #2 
Fabrica de funciones, mas detalado, nuestra funcion crear contador nos sirve para fabricar un nuevo contador
cada ves que la invocamos y cuando generalmente cuando fabricamos algo partimos de un molde y vamos agregando
ciertas cosas  */
export function FabricarFunciones() {
  //en lugar de crear una variable contador podemos poner un parametro para poder manipular el numero inicial
  function crearContador(contador) {
    //let contador = 0;
    return {
      incrementar: function () {
        contador = contador + 1;
        return contador;
      },
      decrementar: function () {
        contador = contador - 1;
        return contador;
      },
      obtenerValor: function () {
        return contador;
      },
    }
  }

  //inicializamos la funcion
  const contador1 = crearContador(10);
  const contador2 = crearContador(500);

  console.log(contador1.incrementar()); //11
  console.log(contador2.incrementar()); //501
}

/* EJEMPLO AVANZADO
Podemos ahorrar o hacer de manera mas eficiente nuestro codigo, en el siguiente ejemplo primero veremos 
como podemos hacer algo en nuestro programa como normalmente lo hacemos y lugeo con clausures
*/

export function EjemploAvanzado() {
  /* 
  Estas funciones sirven para dar un mensaje dependiendo de lo que este pasando en el programa
  Como podemos ver hay muchas cosas que se repiten en las funciones por ejemplo
  1. console.log()
  2. %c 
  3. tipo de mensaje
  4. : ${str}
  5. css personalizado de cada funcion

  Tenemos funciones que hacen lo mismo pero con ciertas cosas personalizadas la cual es una excelente 
  oportunidad de crear clausuras
  */
  function error() {
    console.log(`%c Error: ${str}`, "background: red; color: white");
  }
  function warning() {
    console.log(`%c Warning: ${str}`, "background: orange; color: white");
  }
  function exito() {
    console.log(`%c Exito: ${str}`, "background: green; color: white");
  }

  //COMO LO HACEMOS

  //creamos una funcion principal la cual le asignaremos 2 parametros (que es lo que debe de cambiar en cada funcion)
  //Como el color blanco de repite en todos los estilos, lo agregamos como una constante para ahorrar codigo
  /* Se pone esta variable fuera para ahorrar memoria, ya que asi solo hacen referencia desde afuera una ves 
  y si la ponemos adentro se hace referencia mas de una ves (dependiendo cuantos mensajes tengamos ) */
  const estiloPorDefecto = "color: white";
  function crearImpresoraDeMensajes(tipo, estilos) {

    return function mensaje(str) {
      console.log(`%c ${tipo}: ${str} `, estilos + estiloPorDefecto);
    };
  }

  function prueba(str, tipo, estilos){

  }

  const error = crearImpresoraDeMensajes("Error", "background: red; ");
  const warning = crearImpresoraDeMensajes("Warning", "background: orange;");
  const exito = crearImpresoraDeMensajes("Exito", "background: green;");
}

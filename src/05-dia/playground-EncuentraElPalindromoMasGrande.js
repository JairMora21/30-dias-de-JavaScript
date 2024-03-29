/* 
En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de 
palabras.

Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, 
la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, 
debes devolver el primer palíndromo encontrado en la lista.

Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como 
hacia atrás.

*/

//Ejemplo 1:

let Palindromo1 = ["racecar", "level", "world", "hello"];

//Output: "racecar"

//Ejemplo 2:

let Palindromo2 = ["Platzi", "javascript", "html", "css"];

//Output: null


function EncontrarPalindromo(palindromo) {
  let valorActual = 0; //valor actual de cantidad de palabras del arreglo (numero de palabras)
  let valorTop = 0; //valor top de las cadenas (el que mas palabras tiene)

  let cadenaLarga = ""; //se usara para almacenar la cadena mas larga
  for (let i = 0; i < palindromo.length; i++) {
    let arrayCaracteres = ""; // es la cadena separada por caracteres (array) ["h","o","l","a"]
    let arrayCaracteresInvertido = ""; //pondra la cadena actual alreves (array) ["a","l","o","h"]

    let cadenaInvertida = ""; //se almacena la cadena invertida (sin arrays)

    arrayCaracteres = palindromo[i].split(""); //separamos el string en un array de chars
    //arrayCaracteresInvertido = [...arrayCaracteres].reverse(); //invertimos el array de chars y usamos los ... para crear
    //una copia del array, ya que si no hacemos esto la variable arrayCaracteres tambien se le invertiran las palabras
    arrayCaracteresInvertido = palindromo[i].split("").reverse().join("");
    console.log(arrayCaracteresInvertido);

    palindromo[i] = arrayCaracteres.join(""); //unimos la cadena normal
    //cadenaInvertida = arrayCaracteresInvertido.join(""); //unimos la cadena invertida

    valorActual = arrayCaracteres.length; //guardamos los caracteres totales actuales del elemento del array

    //Esta condicion evalua si la palabra es palindromo comparando la cadena normal e invertida, en caso que no lo sea el cilo continua
    if (palindromo[i] === cadenaInvertida) {
        //evalua si el numero de palabras actual es mayor al top actualmente, si no lo es no guardara nada
      if (valorActual > valorTop) {
        //si entra se reevalua el valor top con el actual
        valorTop = valorActual;
        //fijamos la cadena mas larga
        cadenaLarga = palindromo[i];
      }
    }
  }

  //si ninguna cadena paso la prueba se le asignara el valor de nullo
  if(cadenaLarga === ""){
    cadenaLarga = null;
  }

  return cadenaLarga; //retornaremos la cadena

}

console.log(EncontrarPalindromo(Palindromo1)); //rececar
//console.log(EncontrarPalindromo(Palindromo2)); //null



//SOLUCION MAS CORTA

function prueba(word){
let largest = null;
  // Después iteramos por cada una de las palabras
  for (const word of words) {
    // con split("") creamos un array donde cada elemento es una letra
    // Ejemplo "hola" => ["h","o","l","a"]
    // con reverse() "volteamos" el array
    // Ejemplo ["h","o","l","a"] => ["a"","l","o","h"]
    // y con .join("") volvemos a convertirlo en un string
    // Ejemplo  ["a"","l","o","h"] => "aloh"
    const reversedWord = word.split("").reverse().join("");
    // La primer validación que hacemos es para ver si efectivamente es un array
    if (reversedWord === word) {
      // Si si lo es, primero verificamos que se reemplace la variable largest
      // por el primer palindromo si es que no existe uno aún
      if (largest == null || word.length > largest.length) {
         // En caso de existir, se compara su longitud con el palindromo existente
        largest = word;
      }
    }
  }

  // Al final siempre retornamos la variable largest
  // Ya que si no existe ni uno solo en el array, su valor se mantiene como null
  return largest;
}



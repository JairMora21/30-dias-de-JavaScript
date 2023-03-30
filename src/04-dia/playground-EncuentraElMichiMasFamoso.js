/* En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

Recibirás un array de objetos que incluirán las siguientes propiedades:

name: nombre del gatito.
followers: un array de números, donde cada uno representa los seguidores de cada red social.
Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.

 */
//input 1
let cats1 = [
  {
    name: "Luna",
    followers: [500, 200, 300],
  },
  {
    name: "Michi",
    followers: [100, 300],
  },
];
// output: ["luna"]

//input 2
let cats2 = [
  {
    name: "Mimi",
    followers: [320, 120, 70],
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200],
  },
  {
    name: "Gizmo",
    followers: [250, 750],
  },
];
// output: ["milo","Gizmo"]

//solucion: primero creamos una funcion con un parametro llamado cats
function findFamusCats(cats) {
  //creamos un objeto llamado famusCat
  let famusCat = {
    catNames: [], //nombre/s de los gatos con mas seguidores (es un array por si hay un empate)
    followers: 0, //numero de seguidores
  };

  for (let i = 0; i < cats.length; i++) {
    //un for que recorra todos los objetos que le pasemos de argumento

    /* Este metodo reduce sirve para sumar todos los valores dentro de un arreglo, mandamos a llamar al objeto
        cats con su valor de followers (el cual es un arreglo) y este metodo se encargara de hacer la suma total
        de los followers */
    let totalFollowers = cats[i].followers.reduce(
      //
      (acum, currentVal) => acum + currentVal,
      0
    );

    /*compara si el total de seguidores actual es igual al gato mas famoso actual, si es asi se agregara 
          el nombre junto al mas famoso*/
    if (totalFollowers == famusCat.followers) {
      famusCat.catNames.push(cats[i].name); //agrega el nombre
    }

    /* compara el total de seguidores del gato actual con el mayor, y si es mayor borra el registro de los 
        nombres de los gatos actual y pone el nombre y los segudires actuales del gato actual */
    if (totalFollowers > famusCat.followers) {
      famusCat.catNames = []; //borra el registro
      famusCat.catNames.push(cats[i].name); // agrega el nuevo nombre del gato
      famusCat.followers = totalFollowers; //agrega el nuevo numero de seguidores

      //  famusCat.name = cats[i].name; Esta linea causo problema al susituir el nombre el gato
    }
  }
  return famusCat.catNames; //retornamos la respuesta
}

console.log(findFamusCats(cats1)); // [ 'Luna' ]
console.log(findFamusCats(cats2)); // [ 'Milo', 'Gizmo' ]

/* 
En este desafío, deberás calcular el promedio general de una clase, así como el promedio individual de cada estudiante.

Para ello, se te proporcionará un array de objetos, cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:

name: El nombre del estudiante
grades: Las notas de cada materia del estudiante

A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad classAverage con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.

Es importante mencionar que los promedios deben ser calculados con precisión y se deben redondear a dos decimales para que los test pasen sin problema alguno. Puedes usar el método toFixed() el cual se usa de la siguiente manera 👇

const number = 100.32433;
number.toFixed(2); // "100.32"

👀 Ten en cuenta que este método regresa el número como un string y se espera que sea de tipo numérico.
*/

// input
let estudiantes1 = [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
];
// creamos la funcion getStudentAverage a la cual le pasamos un parametro el cual en un futuro sera el objeto estudiantes
function getStudenAverage(estudiantes) {
  //creamos el objeto promedioEstudiantes el cual almacenara el promedio general y un arreglo de estudiantes
  let promedioEstudiantes = {
    classAverage: 0,
    students: [],
  };

  let sumaPromedioGeneral = 0; //inicializamos la variable para evitar el hoisting

  // Creamos un for la cual su duracion dependera de la cantidad de estudiantes
  for (let i = 0; i < estudiantes.length; i++) {
    //con el metodo reduce sacamos la suma del arreglo actual del estudiante
    let sumaTotal = estudiantes[i].grades.reduce(
      (acum, currentVal) => acum + currentVal,
      0
    );

    //inicializamos en 0 el valor de promedio individual
    let promedioIndividual = 0;
    //sacamos el promedio gracias la suma total del arreglo actual dividido entre la cantidad de calificacionoes de los estudiantes
    promedioIndividual = sumaTotal / estudiantes[i].grades.length;

    //Ahora agregamos los datos del estudiante actual con un "push" poniendo sus datos correspondientes
    promedioEstudiantes.students.push({
      name: estudiantes[i].name,
      average: promedioIndividual,
    });

    //cada iteracion se va a ir haciendo la suma total de las calificaciones con esta variable sumaPromedioGeneral
    sumaPromedioGeneral += promedioIndividual;
  }
  //sacamos el promedio final de todos con la suma total de lso promedios divididos entre el total de estudiantes
  promedioFinalGeneral = sumaPromedioGeneral / estudiantes.length;

  /* permite que solo agregue 2 decimales al promedio final y el parseFlot nos ayuda a convertirlo a numero, ya que el metodo toFixed lo convierte en String */
 promedioEstudiantes.classAverage = parseFloat( 
    promedioFinalGeneral.toFixed(2)
  );

  //retornamos el obeto
  return promedioEstudiantes;
}

//imprimimos el resultado
console.log(getStudenAverage(estudiantes1));
/* 
Output
{
  classAverage: 88.17,
  students: [
    { name: 'Pedro', average: 88.75 },
    { name: 'Jose', average: 88.5 },
    { name: 'Maria', average: 87.25 }
  ]
}
 */

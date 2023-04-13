/* 
En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar 
como completadas las tareas, así como también mostrar un registro de las mismas. Para ello, debes construir la 
lógica de la función closure llamada createTaskPlanner para que devuelva los siguientes métodos:

addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar 
conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed 
se agrega automáticamente como falso al momento de agregar una tarea.

removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
getTasks(): Devuelve el array de tareas.
getPendingTasks(): Devuelve solo las tareas pendientes.
getCompletedTasks(): Devuelve solo las tareas completadas.
markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.

getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 
2: urgente, 1: muy urgente), sin modificar la lista de tareas original.

filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.updateTask(taskId, updates): Buscar la tarea 
correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates
*/

//EXPLICACION DEL CODIGO

/* 
Esta funcion sirve para ahorrar codigo, cuenta con 3 parametros y sirve para buscar ciertas tareas y realizar 
determinada accion */
function buscaTareaYRealizaAccion(buscador, comparar, accion) {
  //esta variable sirve para declarar si se encontro o no el resultado
  let found = false;

  //este for buscara entre todos los registros de las tareas
  for (let i = 0; i < totalTasks.length; i++) {
    /*el if validara si el valor de la tarea (buscador puede ser; id, completed, priority etc...) es igual a la 
    variable comparar la cual sera el valor a buscar por el usuario
    */
    if (totalTasks[i][buscador] == comparar) {
      //si es true se llama el parametro de una funcion iterativa
      accion(i);
      found = true;
    }
  }
  //si no se encontro un registro se mandara el mensae
  if (!found) {
    console.log("No se encontro la tarea");
  }
}

//se crea la funcion creatTaskPlanner la cual es un clausers con multiples opciones
function createTaskPlanner() {
  totalTasks = [];

  return {
    //añade nuevas tareas
    addTask: function (task) {
      //hace un push al arreglo, se agrega un nuevo objeto
      totalTasks.push(task);
    },

    //remueve tareas
    removeTask: function (value) {
      /*
      llamamos a la funcion y  buscaremos que el "id" de la funcion concida con el "value" que mande el usuario
      y si es correcto se realizara la accion la cual sera llamar al metodo splice que sirve para modificar una 
      un arreglo, en este caso eliminara un registro
      */
      buscaTareaYRealizaAccion("id", value, (index) =>
        totalTasks.splice(index, 1)
      );
    },
    //devuelve todas las tareas
    getTasks: function () {
      console.log(totalTasks);
    },

    //devuelve las tareas pendientes por realizar
    getPendingTask: function () {
      //llamamos al metodo filter, el cual nos devolvera todas las tareas tengan en el valor completed = false
      const completedTask = totalTasks.filter(
        (task) => task.completed == false
      );
      console.log(completedTask);
    },
    //devuelve las tareas realizadas
    getCompletedTask: function () {
      //llamamos al metodo filter, el cual nos devolvera todas las tareas tengan en el valor completed = false
      const completedTask = totalTasks.filter((task) => task.completed == true);
      console.log(completedTask);
    },
    //marca las tareas como completadas
    markTaskAsCompleted: function (value) {
        /* 
        Buscara en el obeto el valor "id" que coincida con el "value" que mande el usuario, si este coincide se
        realizara la accion que esa tarea su atributo complete se marque como true
        */
      buscaTareaYRealizaAccion("id",value, index => 
      (totalTasks[index].completed = true));
    },
    getSortedTasksByPriority: function () {
        /* 
        Crearemos un arreglo que este en ordenado de mayor a menor, el metofo slice lo usamos antes del sort para 
        que haga una copia del areglo original para que este no sea modificado, el metodo sort nos sirve para 
        modificar el arreglo 
        */
      const arregloPriorizado = totalTasks
        .slice()
        .sort((a, b) => b.priority - a.priority);
      console.log(arregloPriorizado);
    },

    //encuentra tareas por su id
    getTasksByID: function (id) {
         
    //Usamos un metodo filter el cual nos mostrara las tareas que tengan el mismo id que el usuario indique
        
      const taskById = totalTasks.filter((task) => task.id == id);
      console.log(taskById);
    },

    //filtra las tareas por el tag
    filterTasksByTag: function (tag) {
    //Usamos un metodo filter el cual nos mostrara las tareas que tengan el mismo tag que el usuario indique
      const filteredTasks = totalTasks.filter((task) =>
        task.tags.includes(tag)
      );
      console.log(filteredTasks);
    },
    //Actualiza las tareas
    updateTask: function (taskId, updates) {
        /* 
        llamamos la funcion y buscaremos el valor por "id" que sera comparado por el valor que indique el usuario
        en "taskId", si es verdadera se realizara la accion que es una funcion que en la posicion actual del arreglo
        Al objeto se le asinge un nuevo valor 
        (param1,param2)
        En param1 se pondra el arreglo que sera sustituido
        En param2 se pondra lo que se va a sustituir
        */
      buscaTareaYRealizaAccion(
        "id",
        taskId,
        (index) =>
          (totalTasks[index] = Object.assign(totalTasks[index], updates))
      );
    },
  };
}

const planner = createTaskPlanner();

planner.addTask({
  id: 1,
  name: "Comprar leche",
  priority: 2,
  completed: true,
  tags: ["shopping", "home"],
});

planner.addTask({
  id: 2,
  name: "Llamar a Juan",
  priority: 1,
  completed: false,
  tags: ["personal"],
});

planner.addTask({
  id: 3,
  name: "Llevar a tatis al veterinario",
  priority: 3,
  completed: true,
  tags: ["home"],
});

planner.getTasksByID(1);
planner.updateTask(1, {
  id: 1,
  name: "Llevar a scott al veterinario",
  priority: 3,
  completed: true,
  tags: ["home", "pets"],
});
planner.getTasksByID(1);

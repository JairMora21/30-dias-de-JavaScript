/* Los objetos en JavaScript son un tipo de dato que permite almacenar una colección de pares clave-valor. 
Estos pares representan las propiedades y sus valores correspondientes de un objeto */

//La sintaxis para crear un objeto es la siguiente:

const miObjeto = {
	clave1: 1, 
	clave2: 2, 
	clave3: 3
}

/* Por ejemplo, el siguiente código crea un objeto llamado “curso” que tiene cinco 
propiedades: “Clases”, “Duración”, “Nombre”, “detalles” y comentarios: */

const curso = {
	nombre: "30 días de JS", 
	duración: "20 horas", 
	clases: 100,
	detalles: {
		tecnologias: ["js", "node", "web browser"],
		calificacion: 5,	
	},
	comentarios: ["¡Excelente curso!", "Javscript no es lo mismo que Java", "hola"]
};
/* Para acceder a las propiedades de un objeto, se utiliza la notación de punto o la notación de corchetes.
 Por ejemplo, para acceder al nombre del curso anterior se utilizaría la siguiente sintaxis: */

console.log(curso.nombre); // "30 días de JS"
console.log(curso["nombre"]); // "30 días de JS


/* Además de las propiedades, los objetos también pueden tener métodos, que son funciones asociadas a un objeto. 
Por ejemplo, el siguiente código crea un objeto “carro” con una propiedad “marca” y un método “encender”:
 */
let carro = {
  marca: "Toyota",
  encender: function() {
    console.log("El carro ha sido encendido");
  }
};
//Para llamar a un método de un objeto, se utiliza la notación de punto. Por ejemplo:

carro.encender(); //el carro a sido encendido
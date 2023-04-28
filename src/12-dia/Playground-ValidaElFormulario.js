/* 
En este desafío deberás validar un formulario de registro de usuario.

Tu tarea es implementar la lógica de la función validateForm la cual recibirá como parámetro un objeto con los datos
del formulario al igual que una lista de usurios registrados.

La función debe verificar que todos los campos requeridos del formulario (name, lastname, email y password) estén 
completos, si falta algún campo, debe lanzar un error especificando los campos faltantes.

Para lanzar dicho error debes usar la siguiente sintaxis

throw new Error("Faltan los siguientes campos: name, email, etc...");

Además, la función debe verificar si el email ingresado ya existe en la lista de usuarios registrados. Si el email 
ya está en uso, debe retornar un error especificando el email duplicado.

Si todo está correcto, se debe agregar el usuario a la lista de usuarios registrados con todos los datos excepto 
la contraseña y retornar un mensaje indicando que el registro fue exitoso junto con el nombre y apellido del usuario.
*/

//Ejemplo 1
const formData = {
  name: "Juan",
  lastname: "Perez",
  email: "juan@example.com",
  password: "123456",
};

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
];

//Ejemplo 2
const formData1 = {
  name: "Juan",
  password: "123456",
};

//generaamos la funcion
function validateForm(formD, registeredU) {
  //Inicializamos las propiedades que requiere tener un registro
  const requireProperties = ["name", "lastname", "email", "password"];
  //Extraemos las propiedades del argumento dado 
  const actualProperties = Object.keys(formD);

  //Valida si tiene todas las propiedades requeridas
  const allHaveProperties = requireProperties.every((element) =>
    formD.hasOwnProperty(element)
  );

  //valida si tiene todas las propiedades 
  if (allHaveProperties) {
    //si es true, busca si el email del usuario ya existe en el registro
    const userExist = registeredU.find(user => user.email === formD.email)

    //Si existe mandara un mensaje de error
    if(userExist){
      throw new Error('Error email duplicado');
    } else {
      //Si no existe agrega el nuevo usuario
      registeredU.push(formD);
      console.log("Registro exitoso");
    }

    //Esto es en caso de que falten elementos por llenar
  } else {
    //hace un array de los elementos que faltaron 
    const missingProperties = requireProperties.filter(
      (element) => !actualProperties.includes(element)
    );
    //imprime cuales elementos faltaron
    console.log(`Error, te faltaron ${missingProperties.join(", ")}`);

    /*
   Se me ocurrio esta solucion la cual funciona pero despues me di cuenta que podia hacer lo mismo con un filter 
    let faltantes = [];
    for (let i = 0; i < requireProperties.length; i++) {
      for (let j = 0; j < actualProperties.length; j++) {
        if (requireProperties[i] === actualProperties[j]) {
          faltantes.push(requireProperties[i]);
          break;
        }
      }
    }
    console.log(faltantes); */
  }
}
validateForm(formData, registeredUsers);
validateForm(formData1, registeredUsers);

console.log(registeredUsers);

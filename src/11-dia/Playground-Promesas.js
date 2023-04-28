
//creamos una funcion que simula enviar un email
function sendEmail(email, subject, body) {
    //retorna una promesa
  return new Promise((resolve, reject) => {
    //valida si todos los campos estan llenados
    if (email && subject && body) {
        //si lo estan, enviara el email que pusimos en 2s
      setTimeout(() => {
        //declaramos la variable del email
        const emailInfo = {
          email,
          subject,
          body,
        };
        //Llamamos a resolve 
        resolve(emailInfo);
      }, 2000);
    } else {
        //caso que este vacio, mandara el mensaje de error
        reject(new Error("Hacen falta datos para poder enviar el correo"));
    }
  });
}

sendEmail("Jairantonio21@hotmail.com", "Anuncio", "Cita 4:00 con xxxxxx")
.then(result => console.log(result)); //nos mandara el email que escrirbimos


sendEmail("Jairantonio21@hotmail.com", "", "Cita 4:00 con xxxxxx")
.then(result => console.log(result)); //error

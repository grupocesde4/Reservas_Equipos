let reservas = 0;

function sendReservation() {
  try {
    const email = document.getElementById("emailInput").value;
    const codelaptop = document.getElementById("codeLaptopInput").value;
    const campus = document.getElementById("campus").value;
    const reservation_date = document.getElementById("reservation_date").value;
    const return_date = document.getElementById("return_date").value;
    const working_day = document.getElementById("working_day").value;
    const classroom = document.getElementById("classroom").value;
    console.log(email);
    console.log(codelaptop);
    console.log(campus);
    console.log(reservation_date);
    console.log(return_date);
    console.log(working_day);
    console.log(classroom);

    // NOTA: Aquí cambie en campus y en working_day la condición: 
    // Antes era: campus.length > 1, cambió a campus > 0
    // Esto significa, como ya no manejamos el nombre sino los ids (revisar los value en el select)
    // Entonces los value obtenidos ya no son texto sino numeros.
    // Por eso ya no usamos el .length (metodo que cuenta la cantidad de caracteres)
    // Simplemente validamos el valor numerico 
    //    (si es mayor a 0, es porque el usuario escogió una opción)
    //    (si no es mayor a 0, es porque el usuario no escogió una opción (Seleccione...))



    // NOTA 2: 
    //    * Si vamos a validar texto o arrays, usamos el .length
    //    * Si vamos a validar numeros, usamos condicionales < > <= >=
    //    * Si vamos a validar booleans, usamos true | false 

    if (
      email.length > 1 &&
      codelaptop.length > 1 &&
      campus > 0 &&
      reservation_date.length > 1 &&
      return_date.length > 1 &&
      working_day > 0 &&
      classroom.length > 1
    ) {
      reservas = reservas + 1;
      alert("Llevamos " + reservas + " equipos reservados");
    } else {
      alert("Campos incompletos");
    }
  } catch (error) {
    console.error(error);
  }

}

//Traemos los links
const link_reservas = document.querySelector("#link_reservas");
const link_sede = document.querySelector("#link_sede");
const link_nosotros = document.querySelector("#link_nosotros");

//Traemos los cada contenedor donde está la información
const content_reserves = document.querySelector("#content_reserves");
const content_cesde= document.querySelector("#content_cesde");
const content_about = document.querySelector("#content_about");

const contents = document.querySelectorAll(".content");

//Al dar click en el link que me despliegue el contenedor correspondiente
link_reservas.addEventListener('click', () => {

  //Ocultamos los demas contenedores
  contents.forEach( content => {
    content.classList.add('hide-content');
    content.classList.remove('show-content');
  });

 //Mostramos el contendeor según el link seleccionado
  content_reserves.classList.add('show-content');
}); 

link_sede.addEventListener('click', () => {
  
  //Ocultamos los demas contenedores
  contents.forEach( content => {
    content.classList.add('hide-content');
    content.classList.remove('show-content');
  });

  //Mostramos el contendeor según el link seleccionado
  content_cesde.classList.add('show-content');
}); 

link_nosotros.addEventListener('click', () => {

  //Ocultamos los demas contenedores
  contents.forEach( content => {
    content.classList.add('hide-content');
    content.classList.remove('show-content');
  });

  //Mostramos el contendeor según el link seleccionado
  content_about.classList.add('show-content');
}); 




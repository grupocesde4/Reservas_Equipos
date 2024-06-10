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

    if (
      email.length > 1 &&
      codelaptop.length > 1 &&
      campus.length > 1 &&
      reservation_date.length > 1 &&
      return_date.length > 1 &&
      working_day.length > 1 &&
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




function openAlert() {
    alert("Reserva");
}

// Función para incrementar el contador
function incrementarContador() {
    // Obtener el contador actual de sessionStorage, si no existe se inicializa en 0
    let contador = sessionStorage.getItem('contador');
    if (contador === null) {
      contador = 0;
    } else {
      contador = parseInt(contador);
    }
  
    // Incrementar el contador
    contador += 1;
  
    // Guardar el nuevo valor del contador en sessionStorage
    sessionStorage.setItem('contador', contador);
  
    // Actualizar el contenido del elemento con el nuevo contador
    document.getElementById('contador').textContent = contador;
  }
  
  // Función para inicializar el contador en la página
  function inicializarContador() {
    let contador = sessionStorage.getItem('contador');
    if (contador === null) {
      contador = 0;
    } else {
      contador = parseInt(contador);
    }
    document.getElementById('contador').textContent = contador;
  }
  
  // Agregar un evento de escucha para el envío del formulario
  document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario
    incrementarContador(); // Incrementa el contador de suscripciones
    this.submit(); // Envía el formulario
  });
  
  // Inicializar el contador cuando la página se cargue
  window.onload = inicializarContador;
  

/*Poner los puestos que he trabajado en verde en el div resultado del index*/

/*comparte los mismos botones que el slider de imagenes*/ 

var nombres = ["Programador de Java y .Net", "Profesor de Nuevas Tecnologías", "Carpintero y Diseño de Muebles", "Community Manager y Eventos", "Desarrollador y Maquetador Web"];
var index = 0;
var intervalId;

function mostrarNombre() {
  document.getElementById("resultado").innerHTML = nombres[index];
}

function irAlPrimerNombre() {
  index = 0;
  mostrarNombre();
}

function irAlUltimoNombre() {
  index = nombres.length - 1;
  mostrarNombre();
}

function siguienteNombre() {
  index = (index + 1) % nombres.length;
  mostrarNombre();
}

function nombreAnterior() {
  index = (index - 1 + nombres.length) % nombres.length;
  mostrarNombre();
}

function detenerPresentacion() {
  clearInterval(intervalId);
}

function iniciarPresentacion() {
  intervalId = setInterval(siguienteNombre, 2000);
}

function controlarPresentacion() {
  var controlBtn = document.getElementById("controlBtn");
  if (controlBtn.innerHTML === "Detener") {
    detenerPresentacion();
    controlBtn.innerHTML = "Iniciar";
  } else {
    iniciarPresentacion();
    controlBtn.innerHTML = "Detener";
  }
}

// Inicia la presentación por defecto
iniciarPresentacion();



var nombres_lugar = ["CIC - Parque Tecnológico", "Telecentro de Cazoña", "Escuela Taller - Santander", "Palacio de la Magdalena", "iTECAN - Parque Tecnológico"];
var index_lugar = 0;
var intervalId_lugar;

function mostrarNombre_lugar() {
  document.getElementById("resultado_lugar").innerHTML = nombres_lugar[index_lugar];
}

function irAlPrimerNombre_lugar() {
  index_lugar = 0;
  mostrarNombre_lugar();
}

function irAlUltimoNombre_lugar() {
  index_lugar = nombres_lugar.length - 1;
  mostrarNombre_lugar();
}

function siguienteNombre_lugar() {
  index_lugar = (index_lugar + 1) % nombres_lugar.length;
  mostrarNombre_lugar();
}

function nombreAnterior_lugar() {
  index_lugar = (index_lugar - 1 + nombres_lugar.length) % nombres_lugar.length;
  mostrarNombre_lugar();
}

function detenerPresentacion_lugar() {
  clearInterval(intervalId_lugar);
}

function iniciarPresentacion_lugar() {
  intervalId_lugar = setInterval(siguienteNombre_lugar, 2000);
}

function controlarPresentacion_lugar() {
  var controlBtn = document.getElementById("controlBtn");
  if (controlBtn.innerHTML === "Detener") {
    detenerPresentacion_lugar();
    controlBtn.innerHTML = "Iniciar";
  } else {
    iniciarPresentacion_lugar();
    controlBtn.innerHTML = "Detener";
  }
}

// Inicia la presentación por defecto
iniciarPresentacion_lugar();
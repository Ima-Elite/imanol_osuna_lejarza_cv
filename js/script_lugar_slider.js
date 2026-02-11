
/*Poner los lugares donde he trabajado en verde en el div puesto_lugar del index*/

/*comparte los mismos botones que el slider de imagenes*/ 

const nombres_lugar = ["Lanzadera de Empleo",
                     "CIC - Parque Tecnológico", 
                     "Telecentro de Cazoña", 
                     "Escuela Taller - Santander", 
                     "Palacio de la Magdalena", 
                     "iTECAN - Parque Tecnológico"];
                     
let index_lugar = 0;

let intervalId_lugar;

function mostrarNombre_lugar() {
  document.querySelector("#puesto_lugar").innerHTML = nombres_lugar[index_lugar];
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



// Inicia la presentación por defecto
iniciarPresentacion_lugar();
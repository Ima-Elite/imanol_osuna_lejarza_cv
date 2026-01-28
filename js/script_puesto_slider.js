/*nombre de los puestos de trabajo que aparecen en el h3: resultado*/ 

let nombres = ["Profesor de HTML y CSS",
                "Programador de Java y .Net",
                "Profesor de Nuevas Tecnologías", 
                "Carpintero y Diseño de Muebles", 
                "Community Manager y Eventos", 
                "Desarrollador y Maquetador Web"];


// variable global para el index del array nombres                
let index = 0;


// variable sin valor donde vamos a almacenar el intervalo de tiempo y función
let intervalId;


function mostrarNombre() {
  document.querySelector("#puesto_trabajo").innerHTML = nombres[index];

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

  // (index + 1) % nombres.length asegura que al llegar al final vuelva al principio del array
  // es decir que si el final es 5 vuelve a la posición 0

  index = (index + 1) % nombres.length;

  mostrarNombre();
}

function nombreAnterior() {
  index = (index - 1 + nombres.length) % nombres.length;
  mostrarNombre();
}


function iniciarPresentacion_texto() {
  // setInterval ejecuta una función repetidamente cada cierto tiempo
  intervalId = setInterval(siguienteNombre, 2000);
}


/* parar un evento */ 
function detenerPresentacion_texto() {
  clearInterval(intervalId);
}


// Inicia la presentación de los nokmbres de puestos de trabajpo por defecto
iniciarPresentacion_texto();
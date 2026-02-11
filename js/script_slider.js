//array de las imagenes de los lugares de trabajo
const imagenes = [
    "img/slider/profe_lanzadera.jpg",
    "img/slider/cic.png",
    "img/slider/cc_cazonia.jpg",
    "img/slider/carpintero.png",
    "img/slider/palacio_mag_foto.jpg",
    "img/slider/itecan2.jpg"
];

// posiciones del array cuando avanzo o retrocedo
let pos = 0;

// aqui añado la funcion huérfana de pasar imagenes del slider y texto una a una cada 1 segundo
let crono = "";


//cargar la primera imagen del slider
primera();

//iniciar el slider
play();



//la primera imagen
function primera() {
    parada();
    document.querySelector('#slider').style.backgroundImage = "url(" + imagenes[0] + ")";
    pos = 0;
  
}

//ultima posicion
function ultima() {

    parada();
    document.querySelector('#slider').style.backgroundImage = "url(" + imagenes[imagenes.length - 1] + ")";
    pos = 5;

}

//avanzar
function avanza() {

    parada();
    if (pos === imagenes.length - 1) {
        document.querySelector('#slider').style.backgroundImage = "url(" + imagenes[0] + ")";
        pos = 0;
    } else {
        document.querySelector('#slider').style.backgroundImage = "url(" + imagenes[pos + 1] + ")";
        pos++;
    }

}

//retroceder
function retrocede() {

    parada();
    if (pos === 0) {
        document.querySelector('#slider').style.backgroundImage = "url(" + imagenes[imagenes.length - 1] + ")";
        pos = imagenes.length - 1;
    } else {
        document.querySelector('#slider').style.backgroundImage = "url(" + imagenes[pos - 1] + ")";
        pos--;
    }
}

//la funcion iniciar / parar
function parada() {

    clearInterval(crono);
    crono = "";
    //document.querySelector("arrancar").value = "Iniciar";

    const boton = document.querySelector("#arrancar");

    boton.style.backgroundImage = "url('img/slider/botones/play.png')";

}


function play() {

    let velocidad = 2000;
    if (crono !== "") {
        parada();
        detenerPresentacion_texto();
        detenerPresentacion_lugar();
    } else {

        const boton = document.querySelector("#arrancar");

        boton.style.backgroundImage = "url('img/slider/botones/stop.png')";

        crono = setInterval(function () {
            if (pos === imagenes.length - 1) {
                document.querySelector('#slider').style.backgroundImage = "url(" + imagenes[0] + ")";
                pos = 0;
            } else {
                document.querySelector('#slider').style.backgroundImage = "url(" + imagenes[pos + 1] + ")";
                pos = pos + 1;
            }
            velocidad = 1000;
        }, velocidad);
        iniciarPresentacion_texto();
        iniciarPresentacion_lugar();

    }

    
}




var imagenes = [
    "img/slider/profe_lanzadera.jpg",
    "img/slider/cic.png",
    "img/slider/cc_cazonia.jpg",
    "img/slider/carpintero.png",
    "img/slider/palacio_mag_foto.jpg",
    "img/slider/itecan2.jpg"
];

var pos = 0;
var crono = "";

// poner imagen en cada boton del slider
cargar_iconos();

//la primera imagen
primera();

//iniciar el slider
play();

function cargar_iconos(){

    //primera

    var boton = document.getElementById("primera");

    boton.style.backgroundImage = "url('img/slider/botones/primera.png')";

    //retrocede

    var boton2 = document.getElementById("retrocede");

    boton2.style.backgroundImage = "url('img/slider/botones/anterior_2.png')";

    //avanzar

    var boton3 = document.getElementById("avanza");

    boton3.style.backgroundImage = "url('img/slider/botones/siguiente_2.png')";

   //ultima

   var boton4 = document.getElementById("ultima");

   boton4.style.backgroundImage = "url('img/slider/botones/ultima.png')";

}

//la primera imagen
function primera() {
    parada();
    document.getElementById('slider').style.backgroundImage = "url(" + imagenes[0] + ")";
    pos = 0;
  
}

//ultima posicion
function ultima() {

    parada();
    document.getElementById('slider').style.backgroundImage = "url(" + imagenes[imagenes.length - 1] + ")";
    pos = 5;

}

//avanzar
function avanza() {

    parada();
    if (pos === imagenes.length - 1) {
        document.getElementById('slider').style.backgroundImage = "url(" + imagenes[0] + ")";
        pos = 0;
    } else {
        document.getElementById('slider').style.backgroundImage = "url(" + imagenes[pos + 1] + ")";
        pos = pos + 1;
    }

}

//retroceder
function retrocede() {

    parada();
    if (pos === 0) {
        document.getElementById('slider').style.backgroundImage = "url(" + imagenes[imagenes.length - 1] + ")";
        pos = imagenes.length - 1;
    } else {
        document.getElementById('slider').style.backgroundImage = "url(" + imagenes[pos - 1] + ")";
        pos = pos - 1;
    }
}

//la funcion iniciar / parar
function parada() {

    clearInterval(crono);
    crono = "";
    //document.getElementById("arrancar").value = "Iniciar";

    var boton = document.getElementById("arrancar");

    boton.style.backgroundImage = "url('img/slider/botones/play.png')";

}

function play() {

    var velocidad = 2000;
    if (crono !== "") {
        parada();
        detenerPresentacion();
        detenerPresentacion_lugar();
    } else {

        var boton = document.getElementById("arrancar");

        boton.style.backgroundImage = "url('img/slider/botones/stop.png')";

        crono = setInterval(function () {
            if (pos === imagenes.length - 1) {
                document.getElementById('slider').style.backgroundImage = "url(" + imagenes[0] + ")";
                pos = 0;
            } else {
                document.getElementById('slider').style.backgroundImage = "url(" + imagenes[pos + 1] + ")";
                pos = pos + 1;
            }
            velocidad = 1000;
        }, velocidad);
        iniciarPresentacion();
        iniciarPresentacion_lugar();

    }

    
}




// añadir a cada botón del slider una imágen

cargar_iconos();

function cargar_iconos(){

    //primera

    const boton1 = document.querySelector("#primera");

    boton1.style.backgroundImage = "url('img/slider/botones/primera.png')";

    //retrocede

    const boton2 = document.querySelector("#retrocede");

    boton2.style.backgroundImage = "url('img/slider/botones/anterior.png')";

    //avanzar

    const boton3 = document.querySelector("#avanza");

    boton3.style.backgroundImage = "url('img/slider/botones/siguiente.png')";

   //ultima

   const boton4 = document.querySelector("#ultima");

   boton4.style.backgroundImage = "url('img/slider/botones/ultima.png')";

}











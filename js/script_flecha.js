     // Mostrar la flecha de subir arriba al hacer scroll

     window.onscroll = function() { mostrarBoton() };

     function mostrarBoton() {
         const boton = document.getElementById("btnVolverArriba");
         if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
             boton.style.display = "block";
             boton.style.opacity = "1";
         } else {
             boton.style.opacity = "0";
             boton.style.display = "none";
         }
     }

     // Función para volver al inicio
     function volverArriba() {
         window.scrollTo({ top: 0, behavior: 'smooth' });
     }
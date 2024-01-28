

// El footer aparece al hacer scol hacia abajo 
let prevScrollPos = window.pageYOffset;



// efecto de aparecer el píe

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("footer").style.bottom = "-100px";
  } else {
    document.getElementById("footer").style.bottom = "0"; 
  }

  prevScrollPos = currentScrollPos;
}



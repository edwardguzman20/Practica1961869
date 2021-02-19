function cambio(eventos, portatiles) {
    // declaración de variables
    var i, tablacontent, tablalinks;

    // Obtener todos los elementos con clase:"tablacontent" y los oculta
    tablacontent = document.getElementsByClassName("tablacontent");
    for (i = 0; i < tablacontent.length; i++) {
      tablacontent[i].style.display = "none";
    }

    // Obtener todos los elementos con clase:"tablalinks" y elimina la clase "active"
    tablalinks = document.getElementsByClassName("tablalinks");
    for (i = 0; i < tablalinks.length; i++) {
      tablalinks[i].className = tablalinks[i].className.replace(" active", "");
    }

    // Muestra la tabla actual y agrega una clase "activa" al botón que abrió la tabla.
    document.getElementById(portatiles).style.display = "block";
    eventos.currentTarget.className += " active";
  }
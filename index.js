
function nombre() {
    var nombre = document.getElementById("nombre").value;
    document.getElementById("nombre-tarjeta").textContent = nombre;
  }

  function numero() {
    var numero = document.getElementById("numero").value;
    document.getElementById("number").textContent = numero;
  }

  function vencimiento() {
    var venc = document.getElementById("ven");
    var fecha = venc.value;


    var mes = fecha.split("-")[1];
    var año = fecha.split("-")[0].substring(2);
    var fechaFormateada = mes + "/" + año;

    document.getElementById("fecha").textContent = fechaFormateada;

  }

  function cvv() {
    var cvv = document.getElementById("cvv").value;
    document.getElementById("cvv-1").textContent = cvv;
  }

  function tipo(valor) {
    var credito = document.getElementById("credito");
    var debito = document.getElementById("debito");
  
    if (valor === "credito" && credito.checked) {
      document.getElementById("tipo-tarjeta").textContent = "Tarjeta de Credito";
      debito.checked = false;
    } else if (valor === "debito" && debito.checked) {
      document.getElementById("tipo-tarjeta").textContent = "Tarjeta de Debito";
      credito.checked = false;
    } 
  }


  function mostrarSeleccion() {
    var opciones = document.getElementById("opciones");
    var opcionSeleccionada = opciones.value;
  
    document.getElementById("name-bank").textContent = opcionSeleccionada;

    if(opcionSeleccionada=="Banrural"){
      document.getElementById("frente").style.backgroundColor="rgb(9, 161, 65)";
      document.getElementById("atras").style.backgroundColor="rgb(9, 161, 65)";
    } else if(opcionSeleccionada=="Bantrab"){
      document.getElementById("frente").style.backgroundColor="rgb(31, 155, 157)";
      document.getElementById("atras").style.backgroundColor="rgb(31, 155, 157)";
    }
    else if(opcionSeleccionada=="Banco Industrial"){
      document.getElementById("frente").style.backgroundColor="rgb(9, 3, 79)";
      document.getElementById("atras").style.backgroundColor="rgb(9, 3, 79)";
    } else if(opcionSeleccionada=="xxxxxxxx"){
      document.getElementById("frente").style.backgroundColor="rgb(67, 66, 66)";
      document.getElementById("atras").style.backgroundColor="rgb(67, 66, 66)";
    }
  }

  function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("nombre-tarjeta").textContent = "";

    document.getElementById("numero").value ="";
    document.getElementById("number").textContent = "";

    document.getElementById("ven").value ="";
    document.getElementById("fecha").textContent = "";

    document.getElementById("cvv").value = "";
    document.getElementById("cvv-1").textContent = "";

    document.getElementById("name-bank").textContent = "xxxxxxxx";
  }
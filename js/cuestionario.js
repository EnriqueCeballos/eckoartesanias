const informacionCliente = document.querySelector(`datosPersonales`);
document.addEventListener("DOMContentLoaded", () => {
  //DATOS DE CONTACTO PARA NOTIFICACIONES

  let datoContact = [];
});

function guardarDatosPersonales() {
  // NOMBRE
  let nombre = document.getElementById("nombreCliente");
  datoContact.push(nombre);

  while (!isNaN(nombre)) {
    $(`.nombreCliente`).css("display", "flex");
    nombre.innerHTML += `
    <p class="nameError">INGRESE UN NOMBRE VALIDO</p>
  `;
    let nombre = document.getElementById("nombreCliente");
    datoContact.push(nombre);
  }
  // TELEFONO
  let telefono = document.getElementById("telefonoCliente");
  datoContact.push(telefono);

  while (isNaN(telefono)) {
    $(`.telefonoCliente`).css("display", "flex");
    telefono.innerHTML += `
    <p class="telError">INGRESE UN TELEFONO VALIDO</p>
  `;
    telefono = document.getElementById("telefonoCliente");
    datoContact.push(telefono);
  }
  // DIRECCION
  let direccion = document.getElementById("direccionCliente");
  datoContact.push(direccion);

  while (isNaN(direccion)) {
    $(`.direccionCliente`).css("display", "flex");
    direccion.innerHTML += `
    <p class="dirError">INGRESE UNA DIRECCION VALIDA</p>
  `;
    direccion = document.getElementById("direccionCliente");
    datoContact.push(direccion);
  }
  // EMAIL
  let email = document.getElementById("emailCliente");
  datoContact.push(email);

  while (isNaN(email)) {
    $(`.emailCliente`).css("display", "flex");
    email.innerHTML += `
    <p class="emailError">INGRESE UN CORREO ELECTRONICO VALIDO</p>
  `;
    email = document.getElementById("emailCliente");
    datoContact.push(email);
  }
}
$(`.btn-primary`).click(() => {
  $(`.compraAprobada`).empty();
  $(`.compraAprobada`).css("display", "flex");
  $(`.compraAprobada`).prepend(`
     <img class="iconoAprobar" src="../img/iconos/aprobar.png" alt="" />
    <p>¡Muchas gracias por tu compra !</p>
    <a href="../index.html"><button class="returnInicio"> VOLVER AL INICIO</button></a>
    `);

  $(`.compraAprobada`).fadeIn(5000, function () {
    $(`.compraAprobada`).fadeOut(4000);
  });
});

$(`.btn-creditCard`).click(() => {
  $(`.tarjeta_finalizarCompra`).css("display", "flex");
  $(`.btn-creditCard`).css("display", "none");
});

// function confirmarCompra() {

// }

/*
let notificaciones = prompt(
  "¿Desea pagar con tarjeta de credito/debito? Ingresa SI o NO."
);

if (notificaciones === "si") {
  preguntas();
  alert("Muchas gracias por tu compra!");
} else {
  alert(
    "Muchas gracias por tu compra, puede imprimir el comprobante y pagarlo en los locales adheridos!"
  );
}
*/

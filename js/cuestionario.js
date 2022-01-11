let datoContact = [];

let nombre = document.getElementById(`usuario-nombre`);
datoContact.push(nombre);
let email = document.getElementById(`usuario-email`);
datoContact.push(email);
let telefono = document.getElementById(`usuario-telefono`);
datoContact.push(telefono);
let error = document.getElementById(`mensaje-error`);

let tarjetaAceptada = false;

$(`.btn-primary`).click(() => {
  validarTarjetas();
  enviarFormulario();
});

$(`.btn-creditCard`).click(() => {
  $(`.tarjeta_finalizarCompra`).css("display", "flex");
});
$(`.X`).click(() => {
  $(`.tarjeta_finalizarCompra`).css("display", "none");
});

function enviarFormulario() {
  if (
    nombre.value != `` &&
    email.value != `` &&
    telefono.value != `` &&
    tarjetaAceptada
  ) {
    $(`.compraAprobada`).empty();
    $(`.compraAprobada`).css("display", "flex");
    $(`.compraAprobada`).prepend(`
     <img class="iconoAprobar" src="../img/iconos/aprobar.png" alt="" />
    <p>¡Muchas gracias por tu compra ${nombre.value}!</p>
    <p>Se ha enviado la confirmacion del pago al correo ${email.value}</p>
    <a href="datos.html"><button class="returnInicio"> CERRAR</button></a>
    `);

    $(`#input-nombre_error`).css("display", "none");

    $(`#input-mail_error`).css("display", "none");

    $(`#input-telefono_error`).css("display", "none");
    $(`.compraAprobada`).fadeIn(6000, function () {
      $(`.compraAprobada`).fadeOut(4000);
    });
  } else {
    $(`#input-nombre_error`).css("display", "block");

    $(`#input-mail_error`).css("display", "block");

    $(`#input-telefono_error`).css("display", "block");
  }
}

// if (nombre.value != null || nombre.value != ``) {
//   mensajeError.push(`Ingresa un nombre valido`);
//   $(`#input-nombre_error`).css("display", "block");
// }
// if (email.value != null || email.value != ``) {
//   mensajeError.push(`Ingresa un email valido`);
//   $(`#input-mail_error`).css("display", "block");
// }
// if (telefono.value != null || telefono.value != ``) {
//   mensajeError.push(`Ingresa un telefono valido`);
//   $(`#input-telefono_error`).css("display", "block");

let creditCardName = document.getElementById("creditCardName");
let creditCardHasta = document.getElementById("creditCardHasta");
let creditCardNumber = document.getElementById("creditCardNumber");
let creditCardCVC = document.getElementById("creditCardCVC");
$(`#btn-secundary`).click(() => {
  validarTarjetas();
});

function validarTarjetas() {
  if (
    creditCardName.value != `` &&
    creditCardNumber.value.length === 16 &&
    creditCardNumber.value != `` &&
    creditCardHasta.value.length === 5 &&
    creditCardHasta.value != null &&
    creditCardHasta.value != `` &&
    creditCardCVC.value.length === 3 &&
    creditCardCVC.value != ``
  ) {
    $(`.acceptCard`).toggle("slow").css("display", "flex");
    tarjetaAceptada = true;
  } else {
    $(`#creditCardName`).css("border", "2px solid red"),
      $(`.deniedCard`).css("display", "block");

    $(`#creditCardHasta`).css("border", "2px solid red"),
      $(`.deniedCard`).css("display", "block");

    $(`#creditCardNumber`).css("border", "2px solid red"),
      $(`.deniedCard`).css("display", "block");

    $(`#creditCardCVC`).css("border", "2px solid red"),
      $(`.deniedCard`).css("display", "block");
  }
}

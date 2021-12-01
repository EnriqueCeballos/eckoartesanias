


let continuarProceso = document.createElement(`div`);
continuarProceso.classList.add("informacionDeCliente");
continuarProceso.onclick = () =>{
  preguntas();
  continuarProceso.innerHTML += `
  <input type="text" class="nombreCliente">
  <input type="text" class="telefonoCliente">
  <input type="text" class="tarjetaCliente">
  <input type="text" class="correoCliente">
  
  `

} 

function compraMuñecos( ){

// SELECCION DE PERSONAJE

let informacion = "";
  
for (const producto of listaProductos) {
  informacion += `\n${producto.id}. ${producto.personaje}`;
}
let idPersonaje= parseInt(prompt("Comprar muñeco: " + informacion));
let personajeSeleccionado = listaProductos.find(producto => producto.id === idPersonaje);

while(isNaN(idPersonaje) || !personajeSeleccionado) {

  idPersonaje = parseInt(prompt("Comprar muñeco: " + informacion));
  personajeSeleccionado = listaProductos.find(producto => producto.id === idPersonaje);
}


//CANTIDAD COMPRADA

let cantidadMuñecos = parseInt(prompt("Ingrese la cantidad de muñecos que desea comprar (Disponible: " +  listaProductos.stock+ ")" ));

while (isNaN(cantidadMuñecos) || cantidadMuñecos <= 0) {

    cantidadMuñecos = parseInt(prompt("Ingrese la cantidad de Muñecos que desea comprar: "));
}

if (cantidadMuñecos <= listaProductos.stock && listaProductos.stock > 0) {
  listaProductos.vender(cantidadMuñecos);

  alert("Monto a pagar: $ " + (listaProductos.precio * cantidadMuñecos));
 
  } else {
      alert("No hay muñecos disponibles");
  }


//DATOS DE CONTACTO PARA NOTIFICACIONES

let datoContact = [];

let continuarProceso = document.createElement(`div`);
continuarProceso.classList.add("informacionDeCliente");
continuarProceso.onclick = () =>{

  preguntas();
  continuarProceso.innerHTML += `
  <input type="text" placeholder="Nombre" id="nombreCliente">${nombre}
  <input type="text" placeholder="Telefono" id="telefonoCliente">${telefono}
  <input type="text" placeholder="Direccion" id="direccionCliente">${direccion}
  <input type="text" placeholder="Correo electronico" id="correoCliente">${correo}
    `
} 

function preguntas() {

  let nombre = document.getElementById("nombreCliente");
  datoContact.push(nombre);

  while(!(isNaN(nombre))) {
      alert("Nombre no Valido");
      nombre = prompt("Ingresar tu nombre completo.");
      datoContact.push(nombre);
  }   

 //  SALUDO PERSONALIZADO

 let saludo =  document.getElementById("saludo");
 saludo.innerHTML =`<h2>¡Muchas gracias por tu compra, ${nombre}!</h2>`;

  let telefono = document.getElementById("telefonoCliente");
  datoContact.push(telefono);

  while(isNaN(telefono)) {
      alert("Numero no Valido");
      telefono = document.getElementById("telefonoCliente");;
      datoContact.push(telefono);
 }

  let direccion = document.getElementById("direccionCliente");;
  datoContact.push(direccion);
 
  while(isNaN(direccion)) {
      alert("Numero no Valido");
      direccion = document.getElementById("direccionCliente");
      datoContact.push(direccion);
  }   

  let correo = document.getElementById("correoCliente");;
  datoContact.push(correo);        

}

let notificaciones = prompt("¿Desea pagar con tarjeta de credito/debito? Ingresa SI o NO.");


if (notificaciones === "si") {
  preguntas()
  alert("Muchas gracias por tu compra!");
} else {
  alert("Muchas gracias por tu compra, puede imprimir el comprobante y pagarlo en los locales adheridos!");
}
}


//  CREACION DE CLASE PARA AGREGAR PRODUCTOS
class Producto{
constructor(idProduct, personaje, precio, stock){
    this.idProduct = idProduct;
    this.personaje = personaje;
    this.precio = precio;
    this.stock = stock;
    }
    vender(cantidad){
        this.stock -= cantidad;

    }
}

let listaProductos = [

  // MODELO NUMERO 1
  {
    id: 1,
    precio: 500,
    personaje:"Superheroes",
    modelos: [

      new Producto (1, "Buzzlightyear", 500, 0),
      new Producto (2, "Flash", 500, 4),
      new Producto (3, "Capitan America", 500, 5),
      new Producto (4, "Iron Man", 500, 5),
      new Producto (5, "Superman", 500, 3),
      new Producto (6, "Batman", 500, 10),

    ]
  },
  
  //  MODELO NUMERO 2
  {
    id: 2,
    precio: 300,
    personaje:"Dibujos Animados",
    modelos:[

      new Producto (1, "Steve", 300, 5),
      new Producto (2, "Sherk", 300, 5),
      new Producto (3, "Chavo", 300, 4),
      new Producto (4, "Perrito", 300, 1),
      new Producto (5, "Diamante", 300, 1),
      new Producto (6, "C3P0", 300, 2),
    ]
  },

  //  MODELO NUMERO 3
  {
    id: 3,
    precio: 300,
    personaje:"Infantiles",
    modelos:[

      new Producto (1, "Ben 10", 300, 6),
      new Producto (2, "Hello Kitty", 300, 1),
      new Producto (3, "Venellope", 300, 2),
      new Producto (4, "Doctora Juguete", 300, 1),
      new Producto (5, "Dora la Exploradora", 300, 3),
      new Producto (6, "Wally", 300, 1),
    ]
  }

]

//  ORDENAMIENTO DE ARRAYS

listaProductos.sort(function(a, b) {
  
  if (a.personaje > b.personaje) {
    return 1;
  }
  if (a.personaje < b.personaje ) {
    return -1;
  }
  if(a.personaje = b.personaje){
 return 0;
  }});



// SELECCION DE PERSONAJE

let informacion = "";
  
for (const producto of listaProductos) {
  informacion += `\n${producto.id}. ${producto.personaje}`;
}

let idPersonaje = parseInt(prompt("Comprar muñequitos: " + informacion));
let personajeSeleccionado = listaProductos.find(producto => producto.id === idPersonaje);

while(isNaN(idPersonaje) || !personajeSeleccionado) {

  idPersonaje = parseInt(prompt("Comprar muñeco: " + informacion));
  personajeSeleccionado = listaProductos.find(producto => producto.id === idPersonaje);
}


// SELECCION DE MODELO

let informacion2 = "";

for(const modelo of personajeSeleccionado.modelos) {
    informacion2 += `\n${modelo.idProduct}. ${modelo.personaje}. $ ${modelo.precio}`;
}

let idModelo = parseInt(prompt("Seleccione el modelo que desea comprar:  " + informacion2));
let modeloSeleccionado = personajeSeleccionado.modelos.find(modelo => modelo.idProduct === idModelo);

while(isNaN(idModelo) || !modeloSeleccionado) {

  idModelo = parseInt(prompt("Seleccione el modelo que desea comprar: " + informacion2));
  modeloSeleccionado = personajeSeleccionado.modelos.find(modelo => modelo.idProduct === idModelo);
}


//CANTIDAD COMPRADA

let cantidadMuñecos = parseInt(prompt("Ingrese la cantidad de muñecos que desea comprar (Disponible: " +  modeloSeleccionado.stock + ")" ));

while (isNaN(cantidadMuñecos) || cantidadMuñecos <= 0) {
    // alert("Ingrese un valor valido");
    cantidadMuñecos = parseInt(prompt("Ingrese la cantidad de Muñecos que desea comprar: "));
}

if (cantidadMuñecos <= modeloSeleccionado.stock && modeloSeleccionado.stock > 0) {
  modeloSeleccionado.vender(cantidadMuñecos);

  alert("Monto a pagar: $ " + (modeloSeleccionado.precio * cantidadMuñecos));
 
  } else {
      alert("No hay muñecos disponibles");
  }


//DATOS DE CONTACTO PARA NOTIFICACIONES

let datoContact = [];

function preguntas() {

  let nombre = prompt("Ingresar tu nombre completo.");
  datoContact.push(nombre);

  while(!(isNaN(nombre))) {
      alert("Nombre no Valido");
      nombre = prompt("Ingresar tu nombre completo.");
      datoContact.push(nombre);
  }   

  let telefono = parseInt(prompt("Ingrese un numero de telefono de contacto."));
  datoContact.push(telefono);

  while(isNaN(telefono)) {
      alert("Numero no Valido");
      telefono = prompt("Ingrese un numero de telefono de contacto.");
      datoContact.push(telefono);
 }

  let tarjeta = parseInt(prompt("Ingresa tu numero de tarjeta."));
  datoContact.push(tarjeta);
 
  while(isNaN(tarjeta)) {
      alert("Numero no Valido");
      tarjeta = prompt("Ingresa tu numero de tarjeta.");
      datoContact.push(tarjeta);
  }   

  let correo = prompt("Ingresa tu E-mail");
  datoContact.push(correo);        

  alert("Datos de contacto:\n" + nombre + "\n" + telefono + "\n" + tarjeta +"\n" + correo + "\n");
}

let notificaciones = prompt("¿Desea pagar con tarjeta de credito/debito? Ingresa SI o NO.");

notificaciones = notificaciones.toLowerCase();

if (notificaciones === "si") {
  preguntas()
  alert("Muchas gracias por tu compra!");
} else {
  alert("Muchas gracias por tu compra, puede imprimir el comprobante y pagarlo en los locales adheridos!");
}


// METODO DE BUSQUEDA DENTRO DEL ARRAY

const buscarModelo = listaProductos.find((modelos)=>
{
  return modelos.personaje == "Infantiles"
});

const baratos = listaProductos.filter((p) => {p.precio == 300});



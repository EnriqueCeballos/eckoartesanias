
//  CREACION DE CLASE PARA AGREGAR PRODUCTOS
class Producto{
constructor(idProduct, personaje, precio, stock, img){
    this.idProduct = idProduct;
    this.personaje = personaje;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
    }
    vender(cantidad){
        this.stock -= cantidad;

    }
}

const listaProductos = [

  // MODELO SUPERHEROES
  {id: 1, precio: 500, personaje:"Buzzlightyear", stock: 6, img:`img/mini/buzz.jpg` },
  {id: 2, precio: 500, personaje: "Flash", stock: 5, img: `img/mini/flash.jpg` },
  {id: 3, precio: 500, personaje: "Capitan America", stock: 6, img: `img/mini/america2.jpg`},
  {id: 4, precio: 500, personaje: "Iron Man", stock: 3, img: `img/mini/iron.jpg`},
  {id: 5, precio: 500, personaje: "Thor", stock: 3, img: `img/mini/thor.jpg` },
  {id: 6, precio: 500, personaje: "Batman", stock: 6, img: `img/mini/batman.jpg` },

  //  MODELO DIBUJOS
  {id: 7, precio: 300, personaje:"Harry Potter", stock: 3, img: `img/mini/harry.jpg`},
  {id: 8, precio: 300, personaje: "Sherk", stock: 4, img: `img/mini/sherk.jpg`},
  {id: 9, precio: 300, personaje: "Chavo", stock: 5, img: `img/mini/chavo.jpg`},
  {id: 10, precio: 300, personaje: "Perrito", stock: 1, img: `img/mini/perrito.jpg`},
  {id: 11, precio: 300, personaje: "Diamante", stock: 1, img:`img/mini/diamond.jpg` },
  {id: 12, precio: 300, personaje: "C3P0", stock: 2, img: `img/mini/c3p0.jpg`},

  //  MODELO INFANTIL
  {id: 13, precio: 300, personaje:"Vampirina", stock: 6, img: `img/mini/vampirina.jpg`},
  {id: 14, precio: 300, personaje:"Hello Kitty", stock: 1, img: `img/mini/helloKitty.jpg`},
  {id: 15, precio: 300, personaje:"Vanellope", stock: 2, img: `img/mini/vanellope.jpg`},
  {id: 16, precio: 300, personaje:"Pocoyo", stock: 1, img: `img/mini/pocoyo.jpg`},
  {id: 17, precio: 300, personaje: "Steve", stock: 5, img: `img/mini/steve.jpg` },
  {id: 18, precio: 300, personaje:"Stich", stock: 1, img: `img/mini/stich.jpg`},

]

const contenedorMuñecos = document.querySelector(`.galleryProduct`);
const carritoCompras = document.querySelector('.carritoCompras');
let muñecosEnEspera = [];

document.addEventListener("DOMContentLoaded", () => {
    mostrarMuñecos();

    function mostrarMuñecos() {

     listaProductos.forEach((muñecos) => { 

      const cardProduct = document.createElement(`div`);
      cardProduct.classList.add(`cardProduct`); 


      const imagen = document.createElement(`img`);
      imagen.classList.add(`imagen-producto`);
      imagen.src = muñecos.img; 


      const nombreMuñeco = document.createElement(`h3`);
      nombreMuñeco.textContent = muñecos.personaje; 
      nombreMuñeco.classList.add("nombre-muñeco");


      const btnBuy = document.createElement(`button`);
      btnBuy.textContent = "Agregar al carrito";
      btnBuy.classList.add(`buy`);
      btnBuy.onclick = () => {
          agregarFavorito(muñecos.id);
          }
        
      btnBuy.innerHTML = `
          <button class="buy"><a href="pages/carrito.html">Agregar al carrito</a></button>`

      // btnBuy.appendChild(pageBuy);
      cardProduct.appendChild(imagen);
      cardProduct.appendChild(nombreMuñeco);
      cardProduct.appendChild(btnBuy);

      contenedorMuñecos.appendChild(cardProduct);

  })
}})

// CARRITO 
function agregarFavorito () {

  const muñecoSeleccionado = listaProductos.find(muñeco => muñeco.id === id);

// GUARDAR EL PRODUCTO
  muñecosEnEspera.push(muñecoSeleccionado);

  mostrarMuñecosEnEspera(muñecosEnEspera);
}

function mostrarMuñecosEnEspera (arreglo) {

  limparHTMLPrevio();

  arreglo.forEach(personaje => {

      contenedorMuñecos.innerHTML +- 
      `<div class = "carritoList">

          <img src = "${personaje.img}" class= "imagenCompra"/>
          <h2>${personaje.personaje}</h2>

      </div>`
  })

}

function limparHTMLPrevio () {
  contenedorMuñecos.innerHTML = "";
}
let filterGallery = document.getElementsByClassName("filterGallery");
let carritoGeneral = document.createElement(`div`);
carritoGeneral.classList.add(`carritoGeneral`);
carritoGeneral.innerHTML = `

           <img src="img/iconos/carritoAgregar.png" alt="">
          `;

   // STORAGE

function guardarCarrito(){
  let carritoString = JSON.stringify(listaProductos);
  localStorage.setItem("carrito", carritoString);

  function obtenerCarrito() {
    let carritoString = localStorage.getItem("carrito");
    let carrito = JSON.parse(carritoString)

    carritoDeCompra = carrito;
  }
}
const guardarLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

for (const producto of listaProductos){
  guardarLocal(producto.id, producto)

}

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


//CANTIDAD COMPRADA

let cantidadMuñecos = parseInt(prompt("Ingrese la cantidad de muñecos que desea comprar (Disponible: " +  listaProductos.stock + ")" ));

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

function preguntas() {

  let nombre = prompt("Ingresar nombre completo.");
  datoContact.push(nombre);

  while(!(isNaN(nombre))) {
      alert("Nombre no Valido");
      nombre = prompt("Ingresar tu nombre completo.");
      datoContact.push(nombre);
  }   

 //  SALUDO PERSONALIZADO

 let saludo =  document.getElementById("saludo");
 saludo.innerHTML =`<h2>¡Muchas gracias por tu compra, ${nombre}!</h2>`;

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

}

let notificaciones = prompt("¿Desea pagar con tarjeta de credito/debito? Ingresa SI o NO.");


if (notificaciones === "si") {
  preguntas()
  alert("Muchas gracias por tu compra!");
} else {
  alert("Muchas gracias por tu compra, puede imprimir el comprobante y pagarlo en los locales adheridos!");
}


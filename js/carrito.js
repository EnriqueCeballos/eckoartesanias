// CARRITO
let listaCarrito = obtenerCarrito();

function infoCarrito() {
  if (listaCarrito == null || listaCarrito == undefined) return;
  for (const producto of listaCarrito) {
    mostrarMuñecosEnEspera(producto);
  }
}
function mostrarMuñecosEnEspera(personaje) {
  const listaCarrito = document.querySelector(`.listaCarrito`);

  const carritoDiv = document.createElement(`div`);
  carritoDiv.setAttribute("id", personaje.id);
  carritoDiv.classList.add(`carritoCard`);

  const carritoImg = document.createElement(`img`);
  carritoImg.classList.add(`carritoImg`);
  carritoImg.src = `../${personaje.img}`;

  const carritoTittle = document.createElement(`h2`);
  carritoTittle.textContent = personaje.personaje;
  carritoTittle.classList.add(`carritoTittle`);

  const carritoText = document.createElement(`p`);
  carritoText.textContent = `$${personaje.precio}`;
  carritoText.classList.add(`carritoText`);

  // const precioTotal = document.getElementsByClassName("subTotal");
  // precioTotal.textContent = `$${subTotal()}`;
  // precioTotal = () => subTotal();

  const eliminar = document.createElement("button");
  eliminar.textContent = "Eliminar";
  eliminar.classList.add("eliminarProducto");
  eliminar.onclick = () => eliminarProducto(personaje.id);

  carritoDiv.appendChild(carritoImg);
  carritoDiv.appendChild(carritoTittle);
  carritoDiv.appendChild(carritoText);
  carritoDiv.appendChild(eliminar);
  // carritoDiv.appendChild(precioTotal);

  listaCarrito.appendChild(carritoDiv);
}

// STORAGE

function guardarCarrito(listaCarrito) {
  let carritoString = JSON.stringify(listaCarrito);
  localStorage.setItem("carrito", carritoString);
}
function obtenerCarrito() {
  let carritoString = localStorage.getItem("carrito");
  let carrito = JSON.parse(carritoString);
  return carrito;
}

function eliminarProducto(id) {
  listaCarrito = listaCarrito.filter((producto) => producto.id !== id);
  let productoEliminado = document.getElementById(id);
  productoEliminado.remove();
  guardarCarrito(listaCarrito);
}

infoCarrito();

// function subTotal(a, b) {
//   const resultado = a.precio + b.precio;
// }

// CARRITO
let listaCarrito = obtenerCarrito();

let totalAPagar = 0;

function infoCarrito() {
  if (listaCarrito == null || listaCarrito == undefined) return;
  for (const producto of listaCarrito) {
    mostrarMunhecosEnEspera(producto);
  }
}

function mostrarMunhecosEnEspera(nombre) {
  const listaCarrito = document.querySelector(`.listaCarrito`);

  const carritoDiv = document.createElement(`div`);
  carritoDiv.setAttribute("id", nombre.id);
  carritoDiv.classList.add(`carritoCard`);

  const carritoImg = document.createElement(`img`);
  carritoImg.classList.add(`carritoImg`);
  carritoImg.src = `../${nombre.img}`;

  const carritoTittle = document.createElement(`h2`);
  carritoTittle.textContent = nombre.nombre;
  carritoTittle.classList.add(`carritoTittle`);

  const carritoText = document.createElement(`p`);
  carritoText.textContent = `$${nombre.precio}`;
  carritoText.classList.add(`carritoText`);

  const eliminar = document.createElement("button");
  eliminar.textContent = "Eliminar";
  eliminar.classList.add("eliminarProducto");
  eliminar.onclick = () => eliminarProducto(nombre.id);

  carritoDiv.appendChild(carritoImg);
  carritoDiv.appendChild(carritoTittle);
  carritoDiv.appendChild(carritoText);
  carritoDiv.appendChild(eliminar);

  listaCarrito.appendChild(carritoDiv);
}

function precioAPagar() {
  const pagoTotal = document.querySelector(`#pagoTotal`);

  const costoEnvio = document.querySelector(`#costoEnvio`);
  costoEnvio.textContent = `ENVIO: $500`;

  const totalAPagar = document.createElement(`#totalAPagar`);
  totalAPagar.textContent = `TOTAL: $${totalAPagar}`;

  pagoTotal.appendChild(costoEnvio);
  pagoTotal.appendChild(totalAPagar);
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
  totalAPagar -= producto.precio;

  const btnAtras = $(".previusPage");
  btnAtras.on("click", () => {
    totalAPagar = 0;
    localStorage.clear();
  });
  productoEliminado.remove();
  guardarCarrito(listaCarrito);
  mostrarAlertaEliminar();
}

function mostrarAlertaEliminar() {
  $(`.alertaProducto`).empty();
  $(`.alertaProducto`).prepend(`
      
      <p>
      <img class="iconoAprobar" src="/img/iconos/borrar.png" alt="" />
      Se elimino el producto del carrito correctamente
      </p>
      `);

  $(`.alertaProducto`).fadeIn(2000, function () {
    $(`.alertaProducto`).fadeOut(2000);
  });
}
infoCarrito();

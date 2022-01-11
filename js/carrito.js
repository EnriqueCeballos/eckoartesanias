// CARRITO
let listaCarrito = obtenerCarrito();

function infoCarrito() {
  let totalAPagar = 0;
  if (listaCarrito == null || listaCarrito == undefined) return;
  for (const producto of listaCarrito) {
    totalAPagar += producto.precio;
    mostrarMunhecosEnEspera(producto);

    // precioAPagar(precio);
  }
  precioAPagar(totalAPagar);
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

function precioAPagar(precio) {
  const costoEnvio = document.querySelector(`#costoEnvio`);
  costoEnvio.textContent = `ENVIO: $500`;

  const precioTotal = document.querySelector(`#precioTotal`);
  precioTotal.innerHTML = ``;
  precioTotal.textContent = `TOTAL: $${precio}`;
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

  // const btnAtras = $(".previusPage");
  // btnAtras.on("click", () => {
  //   localStorage.clear();
  // });
  productoEliminado.remove();
  guardarCarrito(listaCarrito);
  mostrarAlertaEliminar();
  let totalAPagar = 0;
  for (const producto of listaCarrito) {
    totalAPagar += producto.precio;
  }
  precioAPagar(totalAPagar);
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

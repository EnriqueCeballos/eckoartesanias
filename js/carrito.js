// CARRITO
let listaCarrito = obtenerCarrito();

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

  const costoEnvio = document.getElementById(`costoEnvio`);
  costoEnvio.textContent = `ENVIO: $500`;

  const totalAPagar = document.getElementById(`totalAPagar`);
  totalAPagar.textContent = `TOTAL: $${nombre.precio}`;

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

// STORAGE

function guardarCarrito(listaCarrito) {
  let carritoString = JSON.stringify(listaCarrito);
  localStorage.setItem("carrito", carritoString);
  // let contador = document.getElementsByClassName(`.numberContenedor`);
  // contador.textContent = carritoString.length().value;
}
function obtenerCarrito() {
  let carritoString = localStorage.getItem("carrito");
  let carrito = JSON.parse(carritoString);
  return carrito;
}

function eliminarProducto(id) {
  listaCarrito = listaCarrito.filter((producto) => producto.id !== id);
  let productoEliminado = document.getElementById(id);
  // totalAPagar -= precio;

  // const btnAtras = $(".previusPage");
  // btnAtras.on("click", () => {
  //   totalAPagar = 0;
  //   localStorage.clear();
  // });
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

// CORREGIR

// function removeSectionCart(section, price, id) {
//   section.on("click", (e) => {
//     e.target.parentNode.parentNode.remove();
//     totalAPagar -= price;
//     etiquetaTotal.html(`$ ${totalAPagar}`);

//     if (totalAPagar === 0) {
//       buyContainer.css("display", "none");
//     }
//   });
// }

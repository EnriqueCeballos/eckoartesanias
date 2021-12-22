const contenedorMunhecos = document.querySelector(`.galleryProduct`);
const carritoCompras = document.querySelector(".carritoCompras");

let carrito = [];
function mostrarMunhecos() {
  $(`.galleryProduct`).empty();
  listaProductos.forEach((munhecos) => {
    const cardProduct = document.createElement(`div`);
    $(cardProduct).addClass(`cardProduct prod-${munhecos.id}`);

    const nombreMunheco = document.createElement(`h3`);
    nombreMunheco.classList.add(`nombre-munheco`);
    nombreMunheco.textContent = munhecos.nombre;

    const imagen = document.createElement(`img`);
    imagen.classList.add(`imagen-producto`);
    imagen.src = munhecos.img;

    const details = document.createElement(`div`);
    details.classList.add(`viewDetails`);

    const pText = document.createElement(`p`);
    pText.classList.add("pText");
    pText.textContent = `Precio: $${munhecos.precio}`;

    const btnDiv = document.createElement(`div`);
    btnDiv.classList.add(`btnDiv`);

    const btnBuy = document.createElement(`button`);
    btnBuy.textContent = "🛒";
    btnBuy.classList.add(`buy`);

    const btnDetails = document.createElement(`button`);
    btnDetails.textContent = "Detalles";
    btnDetails.classList.add(`buttonsDetails`);
    // btnBuy.onclick = () => agregarFavorito(munhecos.id);
    cardProduct.appendChild(nombreMunheco);
    cardProduct.appendChild(imagen);
    cardProduct.appendChild(details);
    cardProduct.appendChild(btnDiv);
    details.appendChild(pText);
    btnDiv.appendChild(btnDetails);
    btnDiv.appendChild(btnBuy);
    contenedorMunhecos.appendChild(cardProduct);

    $(`.prod-${munhecos.id} .buy`).click(() => {
      agregarFavorito(munhecos.id);
      mostrarAlertaCompra();
    });

    $(`.prod-${munhecos.id} .buttonsDetails`).click(() => {
      $(`.prod-${munhecos.id} .pText`).toggle("slow");
    });
  });
}
$(`document`).ready(function () {
  mostrarMunhecos();
});

function agregarFavorito(nombreID) {
  let munhecoSeleccionado = listaProductos.find(
    (nombre) => nombre.id === nombreID
  );
  carrito.push(munhecoSeleccionado);
  guardarCarrito();
  // mostrarAlertaCompra();
}

function mostrarAlertaCompra() {
  $(`.compraProducto`).empty();
  $(`.compraProducto`).prepend(`
      
      <p>
      <img class="iconoAprobar" src="/img/iconos/aprobar.png" alt="" />
      Se agrego el producto al carrito
      </p>`);

  $(`.compraProducto`).fadeIn(2000, function () {
    $(`.compraProducto`).fadeOut(2000);
  });
}

// GUARDAR EL PRODUCTO

function guardarCarrito() {
  let carritoString = JSON.stringify(carrito);
  localStorage.setItem("carrito", carritoString);
}

let filterGallery = document.getElementById(`filterGallery`);
let carritoGeneral = document.createElement(`div`);
carritoGeneral.classList.add(`carritoGeneral`);
carritoGeneral.innerHTML = `

          <a href="pages/carrito.html">
          <div class="fondoCarritoGeneral"><img src="img/iconos/carritoAgregar.png" alt="">
          </div></a>`;

filterGallery.appendChild(carritoGeneral);
$(`textNav`).css("color", "white").slideUp(1000).delay(1000).slideDown(1000);

$(`textNav`).animate(
  {
    opacity: `0`,
  },
  "slow",
  function () {}
);

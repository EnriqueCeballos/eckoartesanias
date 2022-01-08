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

    // DIV QUE MUESTRA EL BOTTON DETALLES
    const details = document.createElement(`div`);
    details.classList.add(`viewDetails`);

    const textDescripcion = document.createElement(`p`);
    textDescripcion.classList.add("textDescripcion");
    textDescripcion.textContent = `${munhecos.descripcion}`;

    const textMedidas = document.createElement(`p`);
    textMedidas.classList.add("textMedidas");
    textMedidas.textContent = `${munhecos.medidas}`;

    // DIV QUE CONTIENE PRECIO Y STOCK
    const priceStock = document.createElement(`div`);
    priceStock.classList.add(`priceStock`);

    const precioMunheco = document.createElement(`p`);
    precioMunheco.classList.add("precioMunheco");
    precioMunheco.textContent = `Precio: $${munhecos.precio}`;

    const stock = document.createElement(`p`);
    stock.classList.add("contadorStock");
    stock.textContent = `Stock: ${munhecos.stock}`;

    const btnDiv = document.createElement(`div`);
    btnDiv.classList.add(`btnDiv`);

    const btnBuy = document.createElement(`button`);
    btnBuy.textContent = "🛒";
    btnBuy.classList.add(`buy`);

    const btnDetails = document.createElement(`button`);
    btnDetails.textContent = "Detalles";
    btnDetails.classList.add(`buttonsDetails`);

    cardProduct.appendChild(nombreMunheco);
    cardProduct.appendChild(imagen);
    cardProduct.appendChild(priceStock);
    cardProduct.appendChild(details);
    cardProduct.appendChild(btnDiv);
    priceStock.appendChild(precioMunheco);
    priceStock.appendChild(stock);
    details.appendChild(textDescripcion);
    details.appendChild(textMedidas);

    btnDiv.appendChild(btnDetails);
    btnDiv.appendChild(btnBuy);
    contenedorMunhecos.appendChild(cardProduct);

    $(`.prod-${munhecos.id} .buy`).click(() => {
      agregarFavorito(munhecos.id);
      mostrarAlertaCompra();
      sumarNumero(munhecos.precio);
    });

    $(`.prod-${munhecos.id} .buttonsDetails`).click(() => {
      $(`cardProduct prod-${munhecos.id}`).css("height", "550px;");
      $(`.prod-${munhecos.id} .textDescripcion`).toggle("slow"),
        $(`.prod-${munhecos.id} .textMedidas`).toggle("slow");
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
  mostrarAlertaCompra();
  // vender();
}

function sumarNumero(a, b) {
  let productoComprado = document.getElementById(`.totalAPagar`);
  textContent = `$${a.precio + b.precio}`;
}
// function vender() {
//   let stock = false;
//   for (const munhecos of stock) {
//     if (munhecos.stock > 0) stock = true;
//   }
//   return stock;
// }

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

          <div class="numberContenedor">${carrito.length}</div>
          <a href="carrito.html">
          <div class="fondoCarritoGeneral"><img src="../img/iconos/carritoAgregar.png" alt="">
          
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

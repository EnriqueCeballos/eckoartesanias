const contenedorMunhecos = document.querySelector(`.galleryProduct`);
const carritoCompras = document.querySelector(".carritoCompras");

let carrito = [];

$(`document`).ready(function () {
  mostrarMunhecos();

  function mostrarMunhecos() {
    listaProductos.forEach((munhecos) => {
      const cardProduct = document.createElement(`div`);
      cardProduct.classList.add(`cardProduct`);

      const imagen = document.createElement(`img`);
      imagen.classList.add(`imagen-producto`);
      imagen.src = munhecos.img;

      const nombreMunheco = document.createElement(`h3`);
      nombreMunheco.classList.add("nombre-munheco");
      nombreMunheco.textContent = munhecos.personaje;

      const pText = document.createElement(`p`);
      pText.classList.add("pText");
      pText.textContent = `Precio: $${munhecos.precio}`;

      const btnBuyNow = document.createElement(`div`);
      btnBuyNow.classList.add(`buyNow`);

      const btnBuy = document.createElement(`button`);
      btnBuy.textContent = "Detalles";
      btnBuy.classList.add(`buttonsBuy`);
      btnBuy.onclick = () => agregarFavorito(munhecos.id);

      btnBuy.innerHTML = `
        <p class="textCard">Detalles</p>
          <button class="buy${munhecos.id}">🛒</button>
        `;

      $(`.textCard`).click(() => {
        $(`.nombre-munheco`).show("slow", function () {
          $(`.pText`).show("slow");
        });
      });

      $(`.buy${munhecos.id}`).click(() => {
        $(`.compraProducto`)
          .prepend(`<img class="iconoAprobar" src="/img/iconos/aprobar.png" alt="" />
            <p>Se agrego ${munhecos.personaje} al carrito</p>`);
        $(`.alertaProducto`).fadeIn(1000, function () {
          $(`.alertaProducto`).fadeOut(1000);
        });
      });

      cardProduct.appendChild(imagen);
      cardProduct.appendChild(nombreMunheco);
      cardProduct.appendChild(pText);
      cardProduct.appendChild(btnBuyNow);
      btnBuyNow.appendChild(btnBuy);
      contenedorMunhecos.appendChild(cardProduct);
    });
  }
});

function agregarFavorito(personajeID) {
  let munhecoSeleccionado = listaProductos.find(
    (personaje) => personaje.id === personajeID
  );
  carrito.push(munhecoSeleccionado);
  guardarCarrito();
}

// munhecoSeleccionado = listaProductos.find(function(munhecosEnEspera){

//   if(munhecosEnEspera.id == personajeID)
//     return true;
//   else
//     return false;
// })

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

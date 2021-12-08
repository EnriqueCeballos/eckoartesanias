const contenedorMunhecos = document.querySelector(`.galleryProduct`);
const carritoCompras = document.querySelector(".carritoCompras");

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  mostrarMunhecos();

  function mostrarMunhecos() {
    listaProductos.forEach((munhecos) => {
      // $(`body`).prepend(`
      // <div class="cardProduct">
      //   <img class="imagen-producto" src="${munhecos.img}" alt="" />
      //   <h3 class="nombre-munheco">${munhecos.personaje}</h3>
      //   <p class="pText">Precio: $${munhecos.precio}</p>
      //   <div class="buyNow">
      //   <button class="buttonsBuy"><a href="pages/product.html">Detalles</a></button>
      //   <button class="buy">🛒</button>
      //   </div>
      // </div>`);
      const cardProduct = document.createElement(`div`);
      cardProduct.classList.add(`cardProduct`);

      const imagen = document.createElement(`img`);
      imagen.classList.add(`imagen-producto`);
      imagen.src = munhecos.img;

      const nombreMunheco = document.createElement(`h3`);
      nombreMunheco.textContent = munhecos.personaje;
      nombreMunheco.classList.add("nombre-munheco");

      const pText = document.createElement(`p`);
      pText.textContent = `Precio: $${munhecos.precio}`;
      pText.classList.add("pText");

      const btnBuyNow = document.createElement(`div`);
      btnBuyNow.classList.add(`buyNow`);

      const btnBuy = document.createElement(`button`);
      btnBuy.textContent = "Detalles";
      btnBuy.classList.add(`buttonsBuy`);
      btnBuy.onclick = () => agregarFavorito(munhecos.id);

      btnBuy.innerHTML = `
      <a href="pages/product.html">Detalles</a></button>
        <button class="buy${munhecos.id}">🛒</button>
      `;
      $(`.buy${munhecos.id}`).on(`click`, function () {
        alert(`Agregaste ${munhecos.nombre} al carrito`);
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

  // munhecoSeleccionado = listaProductos.find(function(munhecosEnEspera){

  //   if(munhecosEnEspera.id == personajeID)
  //     return true;
  //   else
  //     return false;
  // })

  // GUARDAR EL PRODUCTO
  carrito.push(munhecoSeleccionado);
  guardarCarrito();
}
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

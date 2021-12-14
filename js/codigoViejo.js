// CREACION DE CARD DE PRODUCTOS

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

cardProduct.appendChild(imagen);
cardProduct.appendChild(nombreMunheco);
cardProduct.appendChild(pText);
cardProduct.appendChild(btnBuyNow);
btnBuyNow.appendChild(btnBuy);
contenedorMunhecos.appendChild(cardProduct);

function agregarFavorito(personajeID) {
  let munhecoSeleccionado = listaProductos.find(
    (personaje) => personaje.id === personajeID
  );
}


$(`.galleryProduct`).prepend(`
<div class="cardProduct">
  <img class="imagen-producto" src="${munhecos.img}" alt="" />
  <h3 class="nombre-munheco">${munhecos.personaje}</h3>
  <p class="pText">Precio: $${munhecos.precio}</p>
  <div class="buyNow">
  <button class="buttonsBuy"><a href="pages/product.html">Detalles</a></button>
  <button class="buy">🛒</button>
  </div>
</div>`);

$(`.buy`).on(`click`, function (agregarFavorito) {
  let munhecoSeleccionado = listaProductos.find(
    (personaje) => personaje.id === agregarFavorito
  );

  
  $(`.buy${munhecos.id}`).on(`click`, function () {
    alert(`Agregaste ${munhecos.nombre} al carrito`);
  });

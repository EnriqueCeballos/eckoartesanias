

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

      const pText = document.createElement(`p`);
      pText.textContent = `Precio: $${muñecos.precio}`;
      pText.classList.add("pText");
    
      const btnBuy = document.createElement(`button`);
      btnBuy.textContent = "Comprar ahora";
      btnBuy.classList.add(`buttonsBuy`);
      btnBuy.onclick = () => {
          agregarFavorito(muñecos.id);
          }
        
      btnBuy.innerHTML = `
    
        <div class="buyNow">
        <a href="pages/carrito.html">Comprar ahora</a>
        
            <button class="buy"><a href="carritoGeneral">🛒</a></button>
          </div>
        
      `

      // btnBuy.appendChild(pageBuy);
      cardProduct.appendChild(imagen);
      cardProduct.appendChild(nombreMuñeco);
      cardProduct.appendChild(pText);
      cardProduct.appendChild(btnBuy); 
     
      contenedorMuñecos.appendChild(cardProduct);

  })
}})

let filterGallery = document.getElementById(`filterGallery`);
let carritoGeneral = document.createElement(`div`);
carritoGeneral.classList.add(`carritoGeneral`);
carritoGeneral.innerHTML = `

          <a href="pages/carrito.html">
          <div class="fondoCarritoGeneral"><img src="img/iconos/carritoAgregar.png" alt="">
          </div></a>`;

filterGallery.appendChild(carritoGeneral);


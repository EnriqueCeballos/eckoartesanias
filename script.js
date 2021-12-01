

const contenedorMuñecos = document.querySelector(`.galleryProduct`);
const carritoCompras = document.querySelector('.carritoCompras');
const listaDeEspera = document.querySelector(`.carritoLista`);

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
      btnBuy.onclick = () => agregarFavorito()
          
        
      btnBuy.innerHTML = `
    
        <div class="buyNow">
        <a href="pages/carrito.html">Comprar ahora</a>
        
            <button class="buy">🛒</button>
          </div>
        
      `
      cardProduct.appendChild(imagen);
      cardProduct.appendChild(nombreMuñeco);
      cardProduct.appendChild(pText);
      cardProduct.appendChild(btnBuy); 
      contenedorMuñecos.appendChild(cardProduct);
  })
}})

  function agregarFavorito(personajeID) {

    let muñecoSeleccionado = listaProductos.find(personaje => personaje.id === personajeID);

    muñecoSeleccionado = listaProductos.find(function(muñecosEnEspera){
     
      if(muñecosEnEspera.id == personajeID)
        return true;
      else 
        return false;
    })

  // GUARDAR EL PRODUCTO
    muñecosEnEspera.push(listaProductos.id);
  
    mostrarMuñecosEnEspera();
  }



  function mostrarMuñecosEnEspera (personaje) {

    listaProductos.forEach(personaje => {
          
      const carrito = document.createElement(`div`);
      carrito.classList.add(`carritoCard`); 

      const carritoImg = document.createElement(`img`);
      carritoImg.classList.add(`carritoImg`);
      carritoImg.src = personaje.img; 

      const carritoTittle = document.createElement(`h2`);
      carritoTittle.textContent = personaje.personaje; 
      carritoTittle.classList.add(`carritoTittle`);

      const carritoText = document.createElement(`p`);
      carritoText.textContent = `$${personaje.precio}`; 
      carritoText.classList.add(`carritoText`);       

      listaDeEspera.appendChild(carritoImg);
      listaDeEspera.appendChild(carritoTittle);
      listaDeEspera.appendChild(carritoText);

      listaDeEspera.appendChild(carrito);
    })
  
  }

let filterGallery = document.getElementById(`filterGallery`);
let carritoGeneral = document.createElement(`div`);
carritoGeneral.classList.add(`carritoGeneral`);
carritoGeneral.innerHTML = `

          <a href="pages/carrito.html">
          <div class="fondoCarritoGeneral"><img src="img/iconos/carritoAgregar.png" alt="">
          </div></a>`;

filterGallery.appendChild(carritoGeneral);


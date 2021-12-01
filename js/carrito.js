
// CARRITO 

function agregarFavorito () {

    const muñecoSeleccionado = listaProductos.find(personaje => personaje.id === id);
  
  // GUARDAR EL PRODUCTO
    muñecosEnEspera.push(muñecoSeleccionado);
  
    mostrarMuñecosEnEspera(muñecosEnEspera);
  }
  
  function mostrarMuñecosEnEspera (e) {
  
    limparHTMLPrevio();
  
    e.forEach(personaje => {
  
        
      const carrito = document.createElement(`div`);
      carrito.classList.add(`carritoCard`); 


      const carritoImg = document.createElement(`img`);
      imagen.classList.add(`carritoImg`);
      imagen.src = personaje.img; 


      const carritoTittle = document.createElement(`h2`);
      carritoTittle.textContent = personaje.personaje; 
      carritoTittle.classList.add(`carritoTittle`);

      const carritoText = document.createElement(`p`);
      carritoText.textContent = personaje.personaje; 
      carritoText.classList.add(`carritoText`);


      carrito.appendChild(carritoImg);
      carrito.appendChild(carritoTittle);
      carrito.appendChild(carritoText);

    
        contenedorMuñecos.innerHTML += 
        `<div id="carrito" class="carritoCard">
                <img src="${personaje.img}" alt="" class="carritoImg">
                <h2 class="carritoTittle">${personaje.personaje}</h2>
                <p class="carritoText">${personaje.precio}</p>
        </div>`
    })
  
  }
  
  function limparHTMLPrevio () {
    contenedorMuñecos.innerHTML = "";
  }

     // STORAGE
  
  function guardarCarrito(){
    let carritoString = JSON.stringify(listaProductos);
    localStorage.setItem("carrito", carritoString);
  
    function obtenerCarrito() {
      let carritoString = localStorage.getItem("carrito");
      let carrito = JSON.parse(carritoString);
  
      // carritoDeCompra = carrito;
    }
  }
 
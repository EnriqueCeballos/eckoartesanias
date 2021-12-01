
// CARRITO 


document.addEventListener("DOMContentLoaded", () => {

  


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
})
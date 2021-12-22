//  CREACION DE CLASE PARA AGREGAR PRODUCTOS
class Producto {
  constructor(idProduct, nombre, precio, stock, img) {
    this.idProduct = idProduct;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
  }
  vender(cantidad) {
    if (cantidad >= this.stock) {
      this.stock -= cantidad;
    }
  }
}

let listaProductos = [];
let copiaListaProductos = [];

const guardarLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
obtenerProductosJSON();

async function obtenerProductosJSON() {
  await $.getJSON(`../data/productos.json`, function (data) {
    listaProductos = [...data];
    copiaListaProductos = [...data];
  });
  guardarLocal("productos", listaProductos);
}

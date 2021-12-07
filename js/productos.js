//  CREACION DE CLASE PARA AGREGAR PRODUCTOS
class Producto {
  constructor(idProduct, personaje, precio, stock, img) {
    this.idProduct = idProduct;
    this.personaje = personaje;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
  }
  vender(cantidad) {
    this.stock -= cantidad;
  }
}

const listaProductos = [
  // MODELO SUPERHEROES
  {
    id: 1,
    precio: 500,
    personaje: "Iron Man",
    stock: 6,
    img: `img/mini/iron.jpg`,
  },
  {
    id: 2,
    precio: 500,
    personaje: "Flash",
    stock: 5,
    img: `img/mini/flash.jpg`,
  },
  {
    id: 3,
    precio: 500,
    personaje: "Capitan America",
    stock: 6,
    img: `img/mini/america2.jpg`,
  },
  {
    id: 4,
    precio: 500,
    personaje: "Buzzlightyear",
    stock: 3,
    img: `img/mini/buzz.jpg`,
  },
  { id: 5, precio: 500, personaje: "Thor", stock: 3, img: `img/mini/thor.jpg` },
  {
    id: 6,
    precio: 500,
    personaje: "Batman",
    stock: 6,
    img: `img/mini/batman.jpg`,
  },

  //  MODELO DIBUJOS
  {
    id: 7,
    precio: 300,
    personaje: "Harry Potter",
    stock: 3,
    img: `img/mini/harry.jpg`,
  },
  {
    id: 8,
    precio: 300,
    personaje: "Sherk",
    stock: 4,
    img: `img/mini/sherk.jpg`,
  },
  {
    id: 9,
    precio: 300,
    personaje: "Chavo",
    stock: 5,
    img: `img/mini/chavo.jpg`,
  },
  {
    id: 10,
    precio: 300,
    personaje: "Perrito",
    stock: 1,
    img: `img/mini/perrito.jpg`,
  },
  {
    id: 11,
    precio: 300,
    personaje: "Diamante",
    stock: 1,
    img: `img/mini/diamond.jpg`,
  },
  {
    id: 12,
    precio: 300,
    personaje: "C3P0",
    stock: 2,
    img: `img/mini/c3p0.jpg`,
  },

  //  MODELO INFANTIL
  {
    id: 13,
    precio: 300,
    personaje: "Vampirina",
    stock: 6,
    img: `img/mini/vampirina.jpg`,
  },
  {
    id: 14,
    precio: 300,
    personaje: "Hello Kitty",
    stock: 1,
    img: `img/mini/helloKitty.jpg`,
  },
  {
    id: 15,
    precio: 300,
    personaje: "Vanellope",
    stock: 2,
    img: `img/mini/vanellope.jpg`,
  },
  {
    id: 16,
    precio: 300,
    personaje: "Pocoyo",
    stock: 1,
    img: `img/mini/pocoyo.jpg`,
  },
  {
    id: 17,
    precio: 300,
    personaje: "Steve",
    stock: 5,
    img: `img/mini/steve.jpg`,
  },
  {
    id: 18,
    precio: 300,
    personaje: "Stich",
    stock: 1,
    img: `img/mini/stich.jpg`,
  },
];

const guardarLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

guardarLocal("productos", listaProductos);

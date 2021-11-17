// CLASE 5 - OBJETOS

class Producto{
constructor(personaje, precio, stock){
    this.personaje = personaje;
    this.precio = precio;
    this.stock = stock;
    this.vendido = false;
    }
    vender(){
        this.vendido = true;
    }
}

let producto1 = new Producto("Steve", 300, 5);
let producto2 = new Producto("Sherk", 300, 5);
let producto3 = new Producto("Buzzlightyear", 300, 1);
let producto4 = new Producto("Flash", 300, 4);
let producto5 = new Producto("Capitan America", 300, 5);
let producto6 = new Producto("Chavo", 300, 4);
let producto7 = new Producto("Iron Man", 300, 5);
let producto8 = new Producto("Perrito", 300, 1);
let producto9 = new Producto("Diamante", 300, 1);
let producto10 = new Producto("C3P0", 300, 2);


producto1.vender();
producto2.vender();
producto5.vender();
producto9.vender();

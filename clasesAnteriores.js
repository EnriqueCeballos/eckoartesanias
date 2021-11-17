
//  CLASE 2 

let consigna = alert("Bienvenido a Ecko Artesanias, responda unas preguntas con Si o No para continuar");
let nombre = prompt("¿Cuál es tu nombre?");
let preguntaUno = prompt("¿Conoce nuestros productos?");

if ((preguntaUno === "Si") || (preguntaUno ==="SI") || (preguntaUno ==="si")){
    alert("Gracias por confiar en nosotros");
} else{
    alert("Esperamos que le gusten nuestros productos");
}

let preguntaDos = prompt("¿Sabe de que material estan fabricados nuestros muñecos?");
if ((preguntaUno === "Si") || (preguntaUno ==="SI") || (preguntaUno ==="si")){
    alert("Es nuestra forma de ayudar con la ecologia del planeta");
} else{
    alert("De madera reciclada y tornillos viejos que fueron recuperados");
}

alert("Bienvenido a nuestra pagina " + nombre);






// CLASE 3

let cantProductos = 0;
let num;

do{
    num = parseInt(prompt("Ingrese la cantidad que desea comprar"));
    alert("Usted esta llevando " + num + " producto/s");
    cantProductos++;
}
while(num != 0)

console.log(`En total hay ${num} producto en el carrito`);
alert(`En total hay ${num} producto en el carrito`);








// CLASE 4

let productos = parseInt(prompt("Cantidad de productos"));
let montoFinal = 0;
let precioProducto = 300;

function calculo(cantidad){
    montoFinal = cantidad * precioProducto;
    return montoFinal;
}

let productosTotal = (productos);

if(!isNaN(productosTotal) && productosTotal !== 0){

    const cantidadProducto = calculo(productosTotal);
    alert("$ " + cantidadProducto);

} else {
    alert("La cantidad ingresada deber ser mayor a 0");
}

 let otraCompra = prompt("Desea realizar otra compra? SI/NO");

do{  
    if ((otraCompra === "Si") || (otraCompra ==="SI") || (otraCompra ==="si")){
    calculo();

} else {
    alert("Gracias por visitar nuestra pagina");
} 

}while (otraCompra != No);
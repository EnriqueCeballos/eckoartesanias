
// CLASE 1
// VARIABLES
// let num1 = parseInt(prompt("Ingrese un número"));
// let num2 = parseInt(prompt("Ingrese un número"));
// let num3 = parseInt(prompt("Ingrese un número"));
// let num4 = parseInt(prompt("Ingrese un número"));

// // OPERACIONES
// let promedio =  (num1 + num2 + num3 + num4) / 4;

// console.log(promedio);

// alert(promedio);



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


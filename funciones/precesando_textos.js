'use strict'

var num = 234;

var texto1 = "soy el texto uno";
var texto2 = "SOY EL TEXTO DOS";

var dato1 = num.toString();
var dato2 = texto1.toUpperCase();
var dato3 = texto2.toLowerCase();

console.log(dato1);
console.log(dato2);
console.log(dato3);

//calcular longitud

var nom = "";
console.log(nom.length);

//busquedas en textos

var busqueda = texto1.indexOf("un");
console.log(busqueda);

var busqueda2 = texto1.search("el");
console.log(busqueda2);

var busqueda3 = texto1.lastIndexOf("e");
console.log(busqueda3);

var busqueda4 = texto1.match("e");
console.log(busqueda4);

var busqueda5 = texto1.match(/el/g); //me hace una busqueda global del elemento y lo coloca en un array
console.log(busqueda5);

var busqueda6 = texto1.substr(2,6); //saca las letras apartir de la posicion 2 y los seis siguientes
console.log(busqueda6);

var busqueda7 = texto1.slice(2);//corta des la posicion 2 y deja el resto
console.log(busqueda7);

var busqueda8 = texto1.slice(2, 6);//corta des la posicion 2 y la posiscion 6
console.log(busqueda8);

var busqueda9 = texto1.split(" ");//corta des la posicion 2 y deja el resto
console.log(busqueda9);

//otra funcion es el metodo trim() -> hace que quite los espacios por delante y por detras de nuestro string
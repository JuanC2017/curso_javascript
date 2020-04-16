'use strict'

var arreglo5 = ["texto0","texto1","texto2","texto3"];
var arreglo_numeros = [12,20,33,50,17];

var busqueda = arreglo5.find(function(texto) {
	return texto == "texto3";
});

console.log(busqueda);

var busqueda2 = arreglo5.find(texto => texto == "texto2");
console.log(busqueda2);

var busqueda3 = arreglo5.findIndex(texto => texto == "texto3");
console.log(busqueda3);

var busqueda4 = arreglo_numeros = arreglo_numeros.some(num => num > 30);
console.log(busqueda4);
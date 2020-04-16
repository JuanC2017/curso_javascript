'use strict'

var frutas = [];

var elemento ; 

while(typeof elemento == 'string'){
	
	elemento = prompt("Digita la fruta a ingresar: ");
	frutas.push(elemento);
	if (elemento == 0) {
		break;
	}
	
	
	
}

frutas.pop(elemento);
console.log(frutas);
var fruteria = frutas.join(); // le join convierte los elementos de un array en string serapados por comas
console.log(fruteria);

document.write("<h2>Llenado de arrays</h2>");
document.write("<ul>");
frutas.forEach((elemento)=>{
	document.write("<li>"+elemento+"</li>");
});

document.write("</ul>");


/*
aqui convertimos lista e cadenas a un array con la funcion -> split
*/

var cadena = "texto1, texto2, texto3"; 
var cadena_array = cadena.split(", ");
console.log(cadena_array);


/*
con la funcion -> sort ordenamos un array alfafeticamente
*/

frutas.sort();
console.log(frutas);


/* 
con la funcion ->reverse la ordenamos alfabeticamente pero al reves
*/
frutas.reverse();
console.log(frutas);


/*quito el primer elemento --->mango<--- del array*/
var  indice = frutas.indexOf("mango");
if (indice >= -1) {
	frutas.splice(indice, 1);
}

console.log(frutas);
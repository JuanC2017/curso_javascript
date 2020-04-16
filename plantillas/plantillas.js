'use strict'

var nombre = prompt("Digita tu nombre: ");
var apellido = prompt("digita tu apellido: ");

var texto = `
	<h2> Hola que tal </h2>
	<h4> Mi nombre es: ${nombre}</h4>
	<h4> Mi apellido es: ${apellido}</h4>

`;

document.write(texto);
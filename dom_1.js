"use strict"


function cambiaColor(color) {
	parrafo.style.background = color;
}

var parrafo = document.querySelector('.p1');

parrafo.innerHTML = "Texto probando desde el inner";
//parrafo.style.color = "red";

console.log(parrafo);
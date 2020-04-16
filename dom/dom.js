'use strict'

function cambiaColor(color) {
	caja.style.background = color;
}

var caja = document.getElementById("primera_caja");
var caja2 = document.getElementById("segunda_caja").innerHTML; // saca el texto
var caja3 = document.getElementById("tercera_caja");
var caja4 = document.querySelector(".cuarta_caja");
caja4.style.background = "brown";
caja4.innerHTML = "soy el nuevo texto de la caja 4"

caja3.innerHTML = "texto nuevo";
caja.style.background = "red";
caja3.style.color = "green";

console.log(caja);
console.log(caja2);
console.log(caja3);

/*conseguir los elementos por su etiqueta*/

var todosLosDivs = document.getElementsByTagName('div'); //crea un array de divs
var contenido = todosLosDivs[2].textContent;
console.log(todosLosDivs);
console.log(contenido);

for (var i = 0; i < todosLosDivs.length; i++) {
	var parrafo = document.createElement("p");
	var textos = document.createTextNode(todosLosDivs[i].textContent);
	parrafo.appendChild(textos);
	document.querySelector("#miseccion").appendChild(parrafo);
	console.log(todosLosDivs[i]);
}


/*Conseguir elementos por su clase*/
var divRojos = document.getElementsByClassName('rojo');
// for(let div in divRojos){
// 	if (divRojos[div].ClassName == "rojo") {
// 		divRojos[div].style.background = "red";
// 	}
	
// }

for (var i = 0; i <divRojos.length; i++) {
	divRojos[i].style.background = "red";
}

var pruebaHora = document.getElementsByClassName('hora');

function horaColombia() {

	var fullHora = new Date();
	var h = fullHora.getHours();
	var m = fullHora.getMinutes();
	var s = fullHora.getSeconds();
	document.getElementById('horaColombia').innerHTML = h+":"+m+":"+s;
}

/*
for (var i = 0; i <pruebaHora.length; i++) {
	pruebaHora[i].style.background = "black";
	 
}
*/
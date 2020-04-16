'use strict'

var arreglo1 = ["juan", "carlos", "londoño", "blanquicett"];
var arreglo2 = new Array("php", "python", "go");
var elemento = parseInt(prompt("Digita el indice a mirar del array: "));

while(elemento > 4 || isNaN(elemento)){
	elemento = parseInt(prompt("Digita un indice correcto a mirar del array: "));
}

alert(arreglo1[elemento]);
console.log(arreglo1);
console.log(arreglo2[2]);


document.write("<h2> Recorriendo arrays con forEach </h2>");
document.write("<ul>");
arreglo2.forEach((elemento, index, data)=>{
	document.write("<li>"+elemento+"</li>");
	console.log(data);
});
document.write("</ul>");

/*

recorriendo con for de la forma clasica de recorrer un arreglo

*/

document.write("<h2>Recorriendo el array con for: la forma clasica de hacerlo</h2>");
document.write("<ul>");

for (var i = 0; i < arreglo1.length; i++) {
	document.write("<li>"+arreglo1[i]+"</li>"); 
}


document.write("</ul>");


/*
Recorriendo un arreglo con -->for in<----
*/

document.write("<h2>Recorriendo arreglo con for in</h2>");
var arreglo3 = ["texto1", 'texto2', 'texto3', 'texto4', "texto5"];

for (let arreglos in arreglo3) {
	document.write("<li>"+arreglo3[arreglos]+"</li>")
}



 


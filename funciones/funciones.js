'use strict'

//funcion con parametros

function calculadora(x, y) {

	//conjunto de instrucciones a ejecutar
	document.write("suma: "+(x+y)+"<br>");
	document.write("resta: "+(x-y)+"<br>");
	document.write("*******************"+"<br>");

	console.log("suma: "+(x+y));
	console.log("resta: "+(x-y));
	console.log("*******************");
	
}


/*
for (var i = 0; i <= 10; i++) {
	console.log(i);
	calculadora(i, 3);	
}
*/

//funciones con parametros opcionales

function calculadora2(x, y, mostrar = false) {


	if (mostrar == false) {
		//conjunto de instrucciones a ejecutar
	document.write("suma: "+(x+y)+"<br>");
	document.write("resta: "+(x-y)+"<br>");
	document.write("*******************"+"<br>");
	}else{
		console.log("suma: "+(x+y));
		console.log("resta: "+(x-y));
		console.log("*******************");
	}
	

	
}

//funciones dentro de otras

function porPantalla(x, y) {
	document.write("suma: "+(x+y)+"<br>");
	document.write("resta: "+(x-y)+"<br>");
	document.write("*******************"+"<br>");
}

function porConsola(x, y) {
	console.log("suma: "+(x+y));
		console.log("resta: "+(x-y));
		console.log("*******************");
}

function calculadora3(x, y, mostrar=false) {
	if (mostrar == false) {
		porConsola(x, y);
	} else {
		porPantalla(x, y);
	}
}

calculadora3(2, 5, true);
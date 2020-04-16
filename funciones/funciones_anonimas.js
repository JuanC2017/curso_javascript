'use strict'

//Funciones anonimas
//son funciones que no tienen nombre

var pelicula = function (nombre) {
	return "la peliculas es: "+nombre;
}

//funciones de callback
//es una funcion dentro de otra y que se utiliza como parametro

function sumas(num1, num2, sumaYmuestra, sumaPorDos) {
	var sumar = num1 + num2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumas(4, 5, function (dato) {
	console.log("la suma es: "+dato);
}, function (dato) {
	console.log("La suma por dos es: "+(dato*2));
});

//Funciones de flecha
//es lo mismo que los callbacks pero sin la palabra function y la flacha viene despues de la variable

sumas(6, 10, flecha =>{
	console.log("La suma es: "+flecha);
}, flecha =>{
	console.log("la divicion por dos es: "+(flecha/2));
});
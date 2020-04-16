'use strict'

/*
Hacer un programa que imprima los nuúmeros entre dos números
*/


 var num1 = parseInt(prompt("Introduce el primer numero: "));
 var num2 = parseInt(prompt("Introduce el segundo numero: "));




 for (var i = num1; i < num2; i++) {
 	document.write(i);
 }

 for (var i = num1; i > num2; i--) {
 	document.write(i);
 }


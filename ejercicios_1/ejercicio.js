'use strict'

var num1 = parseInt(prompt("Digita el primer numero: "));
var num2 = parseInt(prompt("Digita el segundo numero: "));


while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
 	num1 = parseInt(prompt("Digita el primer numero: "));
	num2 = parseInt(prompt("Digita el segundo numero: "));
}

if (num1 > num2) {
	alert("El primer numero es mayor: "+ num1);
}else if (num2 > num1) {
	alert("El segundo numero es mayor: "+ num2);
}else if (num1 == num2) {
	alert("Los numeros son iguales: " +num1+" '&' "+num2);
}
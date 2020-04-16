'use strict'
var num1 = parseInt(prompt("Digita el primer número: "));
var num2 = parseInt(prompt("Digita el segundo número: "));	

while(isNaN(num1) && isNaN(num2)){
 num1 = parseInt(prompt("Digita el primer número: "));
 num2 = parseInt(prompt("Digita el segundo número: "));	
}
if (num1 > num2) {
	document.write("El primer número es mayor");

}else if	(num1 < num2){
	document.write("El segundo número es mayor");
}
else{
	document.write("los números son iguales");
}





	
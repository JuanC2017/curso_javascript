"use strict"

var a = 30;
var b = 30;

if (a == b) {
	document.write("a y b son iguales <br>");
} else {
	document.write("a y b no son iguales <br>");
}

var c = prompt("Digite un número: ");
c =  Number(c);
document.write(typeof c + "<br>");
var total = a*c;
//document.write(total);

switch(c){
	case 0: document.write(total + "<br>");
	break;
	case 1: document.write(total + "<br>");
	break;
	case 2: document.write(total + "<br>");
	break;
	default: document.write("Valor fuera del switch" + "<br>");
	break; 
}



while(c <= total){
	document.write(c + "<br>");
	c +=c;
}


document.write("Aqui abajo empieza el do while" + "<br>");

do{
	document.write(c + "<br>");
	c +=1;
}while(c <= total);

document.write("Aqui abajo empieza el for" + "<br>" + "<br>");

var fruits = ["Banana", "Orange", "Apple", "Mango"];

for (var i = 0; i < fruits.length; i++) {
 document.write(fruits[i] + "<br>");
}
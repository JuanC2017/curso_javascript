'use strict'

var edad1 = 34;
var edad2 = 12;
var ano = 2018;
if (edad1 > edad2) {

	console.log(edad1+" Es mayor que "+edad2);

}else{
	console.log(edad1+" Es menor "+edad2);
}

/*if anidados*/

if (edad1 >= 18 ) {
	console.log("Eres Mayor de edad");
	if (edad1 <= 33) {
		console.log("todavia eres milenial");
	}else if (edad1 >=80){
		console.log("eres anciano");
	}else{
		console.log("ya no eres milenial");
	}
}else{
	console.log("Eres menor de edad");
}

if (ano == 2008 || (ano >= 2018 && ano == 2028)) {
	console.log("El año acaba en 8");
} else {
	console.log("año no registrado");
}
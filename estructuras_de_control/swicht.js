'use strict'

var edad = 18;
var imprime =  "";


switch(edad){
	case 18:
	imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25:
	imprime = "Ya eres mayor de edad";
	break;
	case 40:
	imprime = "Crisi de los cuarentas";
	break;
	case 80:
	imprime = "Eres un anciano";
	default:
	imprime = "Tu edad es neutral";
	break;
}

console.log(imprime);

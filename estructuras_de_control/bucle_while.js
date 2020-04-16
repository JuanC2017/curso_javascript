'use strict'


//while
var year = 2018;

while(year <= 2025){
	console.log(year);
	if (year == 2020) { //asi rompemos una iteracion, se usa el break en un condicional
		break;
	}
	year++;

}

//Do while

var years = 30;

do{
	alert("solo cuando sea diferente a 20");

	years--;
}while(years > 25)
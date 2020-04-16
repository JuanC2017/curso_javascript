function getNumero(numero:number) { //asi defino el tipo del parametro que entra
	return 'el numero es: '+numero;
}

function getNumero2(numero:number):string { //asi defino el tipo del parametro que entra y el que devuelve
	return 'el numero es: '+numero;
}

/*
da error cuando ingresas el mismo tipo de parametro que entra al que sale
*/



console.log(getNumero(89));

console.log(getNumero2(99));
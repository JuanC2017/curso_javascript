'use strict'

window.addEventListener('load', function () {
	console.log('cargado DOM json');

var bicicleta = {
	color: 'rojo',
	modelo: 'bmx',
	frenos: 'disco',
	velovidad: '60km',
	cambiaColor: function (nuevo_color){
		//bicicleta.color = nuevo_color o puede ser
		this.color = nuevo_color;
	}


};


console.log(bicicleta);
bicicleta.cambiaColor('azul');
console.log(bicicleta);




});


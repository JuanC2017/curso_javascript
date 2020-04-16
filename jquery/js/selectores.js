'use strict'

$(document).ready(function() {
	console.log('todo cargado');

	//selector de id

	var amarillo = $('#amarillo').css('color','yellow').css('background','gray');
	console.log(amarillo);
	var rojo = $('#rojo').css('color','red').css('background','gray');
	var verde = $('#verde').css('color','green').css('background','gray');

	//seleccionando el selector de clase con jquery

	var comun = $('.comun').css('width','400px');

	/* añadiendo clases a una etiqueta*/

	//$('.comun').click(function(){
	//	$(this).addClass('zebra'); //añadiendo  clase a una etiqueta
//	});

	var parrafos = $('p').css('cursor', 'pointer'); //aqui seleccionamos la eqiqueta p para colocarle estilos y le añadimos el estilo pointer al cursor
	parrafos.click(function(){
		if (!$(this).hasClass('zebra')) { //hacemos la condicion para colocarle la clase
			$(this).addClass('zebra');		//le añadimos la clase
		}else{
			$(this).removeClass('zebra'); //y aqui se la quitamos si la tiene
		}
		

	});


	/*selectores de atributos*/

	$('[title=google]').css('font-family','Arial').css('color', 'blue');
	$('[title=facebook]').css('color','blue');


	/*selecionando varios elementos del dom para optimizar cargarlo*/
	$('p, a').addClass('grande');

});
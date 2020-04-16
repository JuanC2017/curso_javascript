'use strict'

$(document).ready(function(){
	console.log('DOM cargado');
	var cajas = $('#animacion');

	cajas.click(function () {
	$('#caja3').animate({
		left:'1000px'
	}, 1000).animate({
		marginTop: '350px'
	}, 1000).animate({
		left: '8px'
	}, 1000).animate({
		marginTop: '0px'
	});
});

	cajas.click(function () {
	$('#caja2').animate({
		left:'1000px'
	}, 3000).animate({
		marginTop: '350px'
	}, 1000).animate({
		left: '8px'
	}, 1000).animate({
		marginTop: '0px'
	});
});
});


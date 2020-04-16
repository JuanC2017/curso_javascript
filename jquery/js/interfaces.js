'use strict'

$(document).ready(function () {
	console.log('DOM cargado');

	//mover elemento por la pagina
	$('.elemento').draggable();

	//redimencionar elementos
	$('.elemento').resizable();

	//selecionar elementos
	
   //$( ".lista-seleccionable" ).selectable();
 
	//

	//ordenar como quiera 
	$('.lista-seleccionable').sortable();

	//drop
	$('#elemento-movido').draggable();
	$('#area').droppable({
		drop:function (argument) {
			console.log('has puesto algo adentro de este div');
		}
	});

	//efectos con jQuery UI
	//todos abajos son efectos, en la documentacion más 

	/*$('#mostrar').click(function () {
		$('#caja-efectos').fadeToggle('slow');	
	});*/
/*
	$('#mostrar').click(function () {
		$('#caja-efectos').effect('explode');	
	});*/
/*
	$('#mostrar').click(function () {
		$('#caja-efectos').toggle('explode');	
	});*/

/* $('#mostrar').click(function () {
		$('#caja-efectos').toggle('blind','fast');	
	});*/

/*
	$('#mostrar').click(function () {
		$('#caja-efectos').toggle('slide');	
	});*/

/*	$('#mostrar').click(function () {
		$('#caja-efectos').toggle('drop');	
	});*/

/*	$('#mostrar').click(function () {
		$('#caja-efectos').toggle('fold');	
	});*/

	$('#mostrar').click(function () {
		$('#caja-efectos').toggle('clip');	
	});

	//tootip
	$('#mis-datos').tooltip()


	//Dialog

	$('#mostrar-popup').click(function () {
		$('#popup').dialog();
	});


	//calendario con datapicker
	$('#calendario').datepicker();

	//Tabs
	$('#pestanas').tabs();






});
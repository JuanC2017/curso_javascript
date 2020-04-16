'use strict'

$(document).ready(function () {
	console.log('DOM cargado');


	//eventos mouse over y mouse out
	var caja = $('#caja').css('transition','300ms');
	caja.mouseover(function(){
		$(this).css('cursor', 'pointer');
		$(this).css('background','red');
	});

	caja.mouseout(function(){
		$(this).css('background','yellow');
	});

	//evento hover 
	caja.hover(function(){ //tiene dentro dos funciones de callback
		$(this).css('width','500px');
		$(this).css('height','500px');
	},function(){
		$(this).css('width','250px');
		$(this).css('height','250px');
	});


	//evento click y docleclick
	caja.click(function(){
		
		$(this).css('transform', 'rotate(45deg)');
	});
	//doble click
	caja.dblclick(function(){
		$(this).css('cursor', 'pointer');
		$(this).css('background', 'green');
		$(this).css('transform', 'rotate(90deg)');
	});

	//eventos focus y blur

	var nom = $('#nombre');
	nom.focus(function(){
		$(this).css('border', '2px solid green');
	});
	nom.blur(function(){
		$(this).css('border', '1px solid #ccc');
		$('#datos').show().text($(this).val());
	});


	//mousedown y mouseup
	nom.mouseup(function(){
		$(this).css('border-color','gray');
	});

	nom.mouseup(function(){
		$(this).css('border-color','black');
	});

	//evento mousemove

	reloadLinks(); //llamamos a la funcion de los links

	$('#envio').removeAttr('disabled').click(function(){
		$('#menu').prepend('<li><a href="' + $("#add_link").val()+'"></a></li>');
		reloadLinks(); //llamamos a la funcion de los links
	});

	$(document).mousemove(function(){
		$('body').css('cursor', 'none');//con esto ocultamos el raton
		console.log('aqui en X: '+event.clientX);
		console.log('aqui en Y: '+ event.clientY);
		$('#sigueme').css('left',event.clientX).css('top',event.clientY);
		
	});

	/*
	más metodos

	hide()--->velocidad que puede ser fast, normal
	show()--->velocidad que puede ser fast, normal
	fadein()--->velocidad que puede ser fast, normal
	fadeout()--->velocidad que puede ser fast, normal
	fadeTo()-->tiene dos parametros que son la velocidad y la opacidad -->slow, o,3
	fadeToggle()
	slideUp()
	slideDown()
	

	*/

});

//seleccionando atributos

function reloadLinks() {
		$('a').each(function(index){
		var that = $(this);
		var enlaces = $(this).attr('href');
		that.text(enlaces);
		console.log(enlaces);
		
	});
	}
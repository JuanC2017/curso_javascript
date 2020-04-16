'use strict'


//este es el evento que carga el javascript cuando todo el html se carga
window.addEventListener('load', function(){

		function cambiarColor() {
		console.log("me has dado click");
		var parrafo2 = parrafo.style.background;
		var botton = color.style.background;
		if (botton == "green" & parrafo2 == "green") {
			color.style.background = "red";
			parrafo.style.background = "red";
		} else {
			color.style.background = "green";
			parrafo.style.background = "green";
		}


		return true;
	}

	//evento click
	var color = document.querySelector('.boton');
	var parrafo = document.querySelector('.pcambio');

	color.addEventListener('click', function(){

		cambiarColor();
	});


	//evento mouse over

	color.addEventListener('mouseover', function(){
		color.style.background = "blue";
	});


	//evento mouse out

	color.addEventListener('mouseout', function(){
		color.style.background = "yellow";
	});

	//focus

	var input = document.querySelector('#campo_nombre')

	input.addEventListener('focus', function(){
		console.log("[focus] estas dentro del focus");
		color.style.border_color = "green";
	});

	//focus

	var input = document.querySelector('#campo_nombre')

	input.addEventListener('blur', function(){
		console.log("[blur] salistes del focus osea es blur");
		color.style.border_color = "green";
	});


	//keydown

	var input = document.querySelector('#campo_nombre')

	input.addEventListener('keydown', function(event){
		console.log("[keydown], capturando las letras pulsadas ", String.fromCharCode(event.keyCode));
		color.style.border_color = "green";
	});


	//keypress

	var input = document.querySelector('#campo_nombre')

	input.addEventListener('keypress', function(event){
		console.log("[keypress]capturando las teclas presionadas ", String.fromCharCode(event.keyCode));
		color.style.border_color = "green";
	});


	//keyup

	var input = document.querySelector('#campo_nombre')

	input.addEventListener('keyup', function(event){
		console.log("[keyup] capturando las teclas que se dejan de presionar ", String.fromCharCode(event.keyCode));
		color.style.border_color = "green";
	});

	//timers -- setInterval ---

	


	//timers -- setTimeout

	var tiempo = setTimeout(function(){
		console.log('me ejecuto en 5 segundos');
		var tc = document.querySelector(".tiempoCambio2");
		if (tc.style.fontSize == "60px") {
			tc.style.fontSize = "40px";
		} else {
			tc.style.fontSize = "60px";
		}
	}, 5000);

	function intervalo() {

	var tiempo = setInterval(function(){
		console.log('me ejecuto cada 1 segundos');
		var tc = document.querySelector(".tiempoCambio");
		if (tc.style.fontSize == "60px") {
			tc.style.fontSize = "40px";
		} else {
			tc.style.fontSize = "60px";
		}
	}, 1000);
	
	return tiempo;

	}

	var tiempo = intervalo();

	//parar
	var stop = document.querySelector("#parar");

	stop.addEventListener('click', function(){
		alert("Has parado el intervalo del bucle");
		clearInterval(tiempo);
	});
	
	//iniciar
	var start = document.querySelector("#iniciar");
	
	start.addEventListener('click', function(){
		alert("Has iniciado el intervalo del bucle");
		intervalo();
	});

});

//Eventos del ratón



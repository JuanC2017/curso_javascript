'use strict'

function getBom() {
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	console.log("----------------"); 	
	console.log(screen.width);
	console.log(screen.height);
	console.log(window.location);

}

function abrirVentana(url) {
	window.open(url);
	window.open(url, "", "width=400, height=300");
}

abrirVentana("https://google.com");
getBom();
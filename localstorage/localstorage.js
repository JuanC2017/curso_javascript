'use strict'


window.addEventListener('load', ()=>{

	//localstorage


	//comprobando disponiblidad del localstorage
	if (typeof(Storage !==  'undefined')) {
		console.log("localstorage compatible y disponible")
	} else {
		console.log("incompatible localstorage")

	}


	//guardar datos en el localstorage
	localStorage.setItem("titulo", "curos de angular");

	//recuperar elemento
	var l = localStorage.getItem("titulo");
	console.log(l);

	document.querySelector(".localstorage").innerHTML = l; // ó => localStorage.getItem("titulo"); en vez de la variable l

	//guardar objetos
	var usuario = {
		nombre: "juan", 
		apellido: "londoño", 
		email: "jjjjuan@prueba.com",
		web: "boston.com"
	}

	localStorage.setItem("usuario", JSON.stringify(usuario));

	//recuperar objetos del localstorage
	var userjs = JSON.parse(localStorage.getItem('usuario'));
	console.log(userjs);
	document.querySelector('.localstorage').append(" - "+ userjs.nombre+" - "+userjs.web);

	//borrar en el localsorage
	localStorage.removeItem("aqui va la variable o el objeto a borrar");
	localStorage.clear("aqui va la variable o el objeto a borrar");




});

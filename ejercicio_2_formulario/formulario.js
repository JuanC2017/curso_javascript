'use strict'


window.addEventListener('load', function(){
	console.log("DOM cargado");

	var formulario = document.querySelector('#formulario');
	var box_dashed = document.querySelector('.dashed');
	box_dashed.style.display = 'none';

	formulario.addEventListener('submit', ()=>{
		console.log('capturando el evento submit');
		//document.write('capturando el submit');

		var nombre = document.querySelector('#nombre').value;
		var apellido = document.querySelector('#apellido').value;
		var edad = parseInt(document.querySelector('#edad').value);
		console.log(typeof(edad));
		if (nombre.trim() == null || nombre.trim().length == 0 || !isNaN(nombre)) {
			document.querySelector('#error_nombre').innerHTML = 'Nombre erroneo<br>';
			document.querySelector('#error_nombre').style.color = 'red';
			alert('el nombre no es valido');
			return false;
		}

		if (apellido.trim() == null || apellido.trim().length == 0 || !isNaN(nombre)) {
			alert('el apellido no es valido');
			return false;
		}

		if (edad == null || edad <= 0 || isNaN(edad)) { //!isNaN(edad) es igual a isNaN(edad) == false
			alert('el edad no es valido');
			return false;
		}

		

		box_dashed.style.display = 'block';

		var parrafo = document.createElement('p');
		var nombre_box = document.querySelector('#nombre_box span');
		var apellido_box = document.querySelector('#apellido_box span');
		var edad_box = document.querySelector('#edad_box span');

		nombre_box.innerHTML = nombre;
		apellido_box.innerHTML = apellido;
		edad_box.innerHTML = edad;

		

	});





});
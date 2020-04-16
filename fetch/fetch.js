'use strict'

window.addEventListener('load', function(){

	//Fetch (ajax) y peticiones a servicios / api rest

	

	var div_usuarios = document.querySelector('#usuarios');
	var div_usuarios2 = document.querySelector('#usuarios2');
	var div_janet = document.querySelector('#janet');

	fetch('https://jsonplaceholder.typicode.com/users')
		.then(data => data.json())
		.then(users =>{
		var	usuarios = users.data;
			console.log(users);
			users.map((users, i) =>{
				var nombre = document.createElement('h4');
				nombre.innerHTML = i + ". "+ users.name + " - " + users.username;
				div_usuarios.appendChild(nombre);

				 document.querySelector('.loading').style.display = "none";

			});
		});

//otra llamada aqui abajo

	fetch('https://reqres.in/api/users')
		.then(function(data){
			return data.json() 
		})
		.then(users =>{
			listadoUsuarios(users.data);
			//console.log(usuarios2);
			
			return getInfo();
		})
		.then(data =>{
			console.log(data);
			return getJanet();

		})
		//añadiendo mas promesas
		.then(data => data.json())
		.then(user =>{
			mostrarJanet(user.data);
			
		
		})

		//capturando errores en las promesas
		.catch(error =>{
			alert('error en las peticiones');
			console.log('error en las promesas');
		});
		
		

	
function getUsuarios() {

	return fetch('https://reqres.in/api/users?page=2');
}

function getJanet() {


	return fetch('https://reqres.in1/api/users/2');
}


//creando promesas 

function getInfo() {

	var profesor = {
		nombre: 'juan',
		apellido: 'londoño',
		url: 'marlonventas.000webhostapp.com '
	};

	return new Promise((resolve, reject)=>{
		var profsor_string;
		setTimeout(function () {
		profsor_string = JSON.stringify(profesor);
		if (typeof profsor_string != 'string' || profsor_string == '')return reject('error 1');

		return resolve(profsor_string);
			
		}, 8000);
		
		
	});
}


	//mejorando las promesas y fetch
	function listadoUsuarios(usuarios2) {
		
		usuarios2.map((users, i) =>{
				var full_nombre2 = document.createElement('h4');
				full_nombre2.innerHTML = i +". "+ users.first_name + " - " + users.last_name;
				div_usuarios2.appendChild(full_nombre2);

				document.querySelector('.usuarios2_loading').style.display = "none";

			});


	}

	function mostrarJanet(user) {
		
		
				var janet = document.createElement('h4');
				var avatar_janet = document.createElement('img');
				janet.innerHTML = ". "+ user.first_name + " - " + user.last_name;
				avatar_janet.src = user.avatar;
				div_janet.appendChild(janet);
				div_janet.appendChild(avatar_janet);

				document.querySelector('.janet_loading').style.display = "none";

		


	}
	
	

});
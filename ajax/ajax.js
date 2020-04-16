'use strict'

$(document).ready(function () {
	console.log('DOM cargado');

	//metodo load

	//$('#caja').load('https://jsonplaceholder.typicode.com/todos/1');

	//metodo Get y Post

	$.get('https://reqres.in/api/users', function(response){
		response.data.forEach((element, i)=>{
			$('#caja').append('<p>'+element.first_name+  " " +element.last_name+'</p>')
		});
		
		console.log(response);
	});

	

	$('#formulario').submit(function (e) {
		e.preventDefault();
		var user = {
		name: $('input[name = "name"]').val(),
		last_name: $('input[name = "last_name"]').val(),
		age: $('input[name = "age"]').val(),
		email: $('input[name = "email"]').val()
	};
	/*
	console.log(user);

	$.post($(this).attr('action'),user,function (response){ //puede llevar 3 parametros el ultimo siempre un callback
			console.log(response);
	});

	
	});
*/

$.ajax({
	type: 'POST',
	url: $(this).attr('action'),
	data: user,
	beforeSend: function () {
		console.log('enviando usuario....');
	},
	success: function (response) {
		console.log(response);
	},
	error: function(){
		console.log('A occurido un error');
	},
	timeout: 1000,

});


});

	});
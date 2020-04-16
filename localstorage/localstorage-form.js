'use strict'


window.addEventListener('load', function() {
	var formulario = document.querySelector('#formulario');

	formulario.addEventListener('submit', function(){
		console.log('entras');
	var texto = document.querySelector('#formulario_input').value;
	if (texto.length >= 1 ) {
		localStorage.setItem(texto, texto);
	}
	
	});

	var ul = document.querySelector('#lista_de_textos');
	for(var i in localStorage){
		
		if (typeof(localStorage[i]) == 'string') {
			
			var li = document.createElement('li');
			li.append(localStorage[i]);
			ul.append(li);
		}
		
		console.log(localStorage[i]); 
	}
	
	var formulario = document.querySelector('#formulariob');

	formulariob.addEventListener('submit', function(){
		console.log('entras');
	var texto = document.querySelector('#formulario_input_b').value;
	if (texto.length >= 1 ) {
		localStorage.removeItem(texto);
	}
	
	});
	
	//

});
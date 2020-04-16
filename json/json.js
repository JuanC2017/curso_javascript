'use strict'

//JSON  -  Javascript Object Notation


window.addEventListener('load', ()=>{

	var pelicula = {
	titulo: "superman",
	year: 2017,
	pais: "estados unidos"
	};

	var peliculas = [
		{titulo: "supercampeones", year: 2016, pais: "china"},
		pelicula
	];

	var caja_peliculas = document.querySelector('#peliculas');
	var index;
	for(index in peliculas){
		var p = document.createElement('p');
		p.append(peliculas[index].titulo+" ");
		p.append(peliculas[index].year+" ");
		p.append(peliculas[index].pais);
		caja_peliculas.append(p);
	}


	console.log(peliculas);

});


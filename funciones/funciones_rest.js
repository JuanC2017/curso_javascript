'use strict'

//funciones rest y spread

function listadoFrutas(f1, f2, ...resto) {
	console.log("fruta1: "+ f1);
	console.log("fruta2: "+ f2);
	console.log("resto: "+ resto);

}

//tipo rest
listadoFrutas("manzana", "naranja", "uva", "coco", "melon");


//tipo spread
var frutas = ['naranja', 'manzana']
listadoFrutas(...frutas, "uva", "coco", "melon");
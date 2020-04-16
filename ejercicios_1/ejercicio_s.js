'use strict'

var num = parseInt(prompt("Digita un numero para la tabla de multiplicar: "));

document.write("<h2>Tabla del "+num+"</h2>");
for (var i = 1; i <= 10; i++) {
	document.write( i+" x " +num+ " = "+ (num*i)+"<br>");
}

//todas las tablas

for (var j = 1; j <=10; j++) {
	document.write("<h2>Tabla del "+j+"</h2>");
	for (var i = 1; i <= 10; i++){
		document.write( i+" x " +j+ " = "+ (num*j)+"<br>");
	}
}

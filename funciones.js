/*
Funciones, hacer una calculadora
*/


var num1 = parseInt(prompt("Digite el primer numero: "));
var num2 = parseInt(prompt("Digite el segundo numero: "));



function calculadora(num1, num2) {
	document.write("la suma de los numeros es: " + (num1+num2));
}

calculadora(num1, num2);

function sumame (num1, num2, param3, param4, param5){
	var sumar = num1 + num2;

	param3(sumar);
	param4(sumar);
	param5(sumar);
	return sumar;

}

sumame(num1,num2, function(dato) {
	
	console.log("La division entre 2 es: ", (dato/2));

}, function(dato) {
	console.log("La multiplicacion por dos es: ", (dato*2))
}, (numseno) => {
	console.log("El seno de la suma es: ", (Math.sin(numseno)));
});



var nombre = "Esto es una prueba de split";
var nombre2 = "  Esto es una prueba de split  ";
var cortar = nombre.split();
var cortar2 = nombre.split("");
var cortar3 = nombre.split(" ");
var cortar4 = nombre2.trim(); //este metodo trim() quita espacios por delante y por detras
console.log(cortar);
console.log(cortar2);
console.log(cortar3);
console.log(cortar4);




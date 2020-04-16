//tipos de datos

//string
let cadena: string = 'esto es una cadena';

let cadena2: string | number= 45; //esta variable puede ser tanto numero como string

type alfanumerico = string | number;
let cadena3: alfanumerico = 'alfanumerico';


//number
let num: number = 12;

//boleano
let verdadero_falso: boolean = true;


//any
let cualquiera: any = 'hola';

//arrays
var lenguajes: Array<string> =['php', 'java', 'css']; //dentro de los mayor y menor que, va el tipo de dato del array 

let years: number[] =[12,15 ,16];

let years2: any[] =[12,15 ,16, 'dosmil veinte'];


//let var
var num1 = 10;
var num2 = 12;

if (num1== 10) {
	let num1 = 20;
	var num2 = 30;
	console.log(num2);
}

console.log(num1,num2);




console.log(cadena, num, verdadero_falso, cualquiera, lenguajes, years, years2);
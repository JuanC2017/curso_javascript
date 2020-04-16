/*
la Clase es el molde del objeto

propiedades(caracteristicas del objeto)

metodos(funciones o acciones del objeto)
*/


/*
una interface es un contrato donde definimos que propiedades y que metodos son obligatorio
en una clase, entonces esa clases debe definir esas propiedades y metodos

*/

interface CamisetaBase{
	setCeligrafia(celigrafia); //estos metodo son referenciados en la clase 
	getCeligrafia();
}


//DECORADOR
function estampar(logo: string) {
	return function (target: Function) {
		target.prototype.estampacion = function():void{
			console.log('camiseta estampada de: '+logo);
		}
	}
}


@estampar('gucci gang')
class Camiseta implements CamisetaBase{
	public color: string;
	public modelo: string;
	public marca: string;
	public talla: string;
	public precio: number;
	private celigrafia: string;

	constructor(color, modelo, marca, talla, precio, celigrafia){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
		this.celigrafia = celigrafia;
	}

	public setCeligrafia(celigrafia){ //si hacemos interfaces estos metodos son los que van obligatoriamente set y get
		this.celigrafia = celigrafia;
	}

	public getCeligrafia(){
		return this.celigrafia;
	}

}

var playera = new Camiseta( 'azul', 'manga corta','adidas','s',20000,'estampado');

playera.color ;
playera.modelo  ;
playera.marca  ;
playera.talla  ;
playera.precio  ;
playera.setCeligrafia('estampado');

var polo = new Camiseta(); //saldra error en la consola pero de esta manera se hace sin constructor

polo.color = 'azul';
polo.modelo = 'manga corta';
polo.marca = 'polo assn';
polo.talla = 's';
polo.precio = 50000;
polo.setCeligrafia('tejido');

/*
La herencia, se da cuando la clase hija adquiere todos los metodos y propiedades de la clase padre y puede agregarle
las propiedades y metod exclusivo de su propia clase
*/

class CamisetaHija extends Camiseta {

	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha():boolean{
		return this.capucha;
	}
	
	
}


/*

Los decoradores es un patron de diseño que nos permite mediantes unos metadatos que nosotros definimos
cambiar .
adiciona una funcionalidad extra a cualquier clase

*/


var camisaElegante = new Camiseta('azul','maga larga', 'arturo calle', 'xs', 50000, 'estampado');

console.log(playera, polo, camisaElegante);
playera.estampacion();

var sudadera = new CamisetaHija();
sudadera.setCapucha(true);
sudadera.setCeligrafia('estampado');
console.log(sudadera);

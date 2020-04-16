/*
la Clase es el molde del objeto

propiedades(caracteristicas del objeto)

metodos(funciones o acciones del objeto)
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//DECORADOR
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('camiseta estampada de: ' + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio, celigrafia) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        this.celigrafia = celigrafia;
    }
    Camiseta.prototype.setCeligrafia = function (celigrafia) {
        this.celigrafia = celigrafia;
    };
    Camiseta.prototype.getCeligrafia = function () {
        return this.celigrafia;
    };
    Camiseta = __decorate([
        estampar('gucci gang')
    ], Camiseta);
    return Camiseta;
}());
var playera = new Camiseta('azul', 'manga corta', 'adidas', 's', 20000, 'estampado');
playera.color;
playera.modelo;
playera.marca;
playera.talla;
playera.precio;
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
var CamisetaHija = /** @class */ (function (_super) {
    __extends(CamisetaHija, _super);
    function CamisetaHija() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CamisetaHija.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    CamisetaHija.prototype.getCapucha = function () {
        return this.capucha;
    };
    return CamisetaHija;
}(Camiseta));
/*

Los decoradores es un patron de diseño que nos permite mediantes unos metadatos que nosotros definimos
cambiar .
adiciona una funcionalidad extra a cualquier clase

*/
var camisaElegante = new Camiseta('azul', 'maga larga', 'arturo calle', 'xs', 50000, 'estampado');
console.log(playera, polo, camisaElegante);
playera.estampacion();
var sudadera = new CamisetaHija();
sudadera.setCapucha(true);
sudadera.setCeligrafia('estampado');
console.log(sudadera);

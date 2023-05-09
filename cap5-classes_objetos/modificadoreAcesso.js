var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        var velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    };
    Carro.prototype.acelerar = function () {
        return this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        return this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(function () { return carro1.acelerar(); }); // Cria um array com 50 posicoes zeradas = Array(50).fill(0).forEach(() 
console.log(carro1.acelerar());
Array(40).fill(0).forEach(function () { return carro1.frear(); });
console.log(carro1.frear());
// simular "erros"
// carro1.velocidadeAtual = 300
// console.log('atual -> ' + carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 500
// console.log('máxima -> ' + carro1.velocidadeMaxima)
// carro1.alterarVelocidade(150)
// console.log('atual -> ' + carro1.velocidadeAtual)
// É a capacidade de reutilizar código
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari(modelo, velocidadeMaxima) {
        return _super.call(this, 'Ferrari', modelo, velocidadeMaxima) || this; // super = construtor da classe mae
    }
    Ferrari.prototype.acelerar = function () {
        return this.alterarVelocidade(20);
    };
    Ferrari.prototype.frear = function () {
        return this.alterarVelocidade(-15);
    };
    return Ferrari;
}(Carro));
var f40 = new Ferrari('F40', 324);
console.log("".concat(f40.marca, " ").concat(f40.modelo));
console.log(f40.acelerar());
console.log(f40.frear());

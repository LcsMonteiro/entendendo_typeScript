// Exercício 1 - Classe
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
/*
function Moto(nome) {
    this.nome = nome
    this.velocidade = 0
 
    this.buzinar = function() {
        console.log('Toooooooooot!')
    }
 
    this.acelerar= function(delta) {
        this.velocidade = this.velocidade + delta
    }
}
 
var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
*/
var Moto = /** @class */ (function () {
    function Moto(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    Moto.prototype.buzinar = function () {
        console.log('Toooooooooot!');
    };
    Moto.prototype.acelerar = function (delta) {
        this.velocidade = this.velocidade + delta;
    };
    return Moto;
}());
var moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
/*
var objeto2D = {
    base: 0,
    altura: 0
}
 
var retangulo = Object.create(objeto2D)
retangulo.base = 5
retangulo.altura = 7
retangulo.area = function() {
    return this.base * this.altura
}
console.log(retangulo.area())
*/
var Objeto2D = /** @class */ (function () {
    function Objeto2D(base, altura) {
        if (base === void 0) { base = 0; }
        if (altura === void 0) { altura = 0; }
        this.base = base;
        this.altura = altura;
    }
    return Objeto2D;
}());
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Retangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    return Retangulo;
}(Objeto2D));
var retangulo = new Retangulo(5, 7);
retangulo.base = 10;
// retangulo.altura = 7
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
/*
var estagiario = {
    _primeiroNome: ''
}
 
Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    },
    enumerable: true,
    configurable: true
})
 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
*/
var Estagiario = /** @class */ (function () {
    function Estagiario() {
        this._primeiroNome = '';
    }
    Object.defineProperty(Estagiario.prototype, "primeiroNome", {
        get: function () {
            return this._primeiroNome;
        },
        set: function (valor) {
            if (valor.length >= 3) {
                this._primeiroNome = valor;
            }
            else {
                this._primeiroNome = '';
            }
        },
        enumerable: false,
        configurable: true
    });
    return Estagiario;
}());
var estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);

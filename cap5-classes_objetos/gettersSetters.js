/*
    getter: este método surge quando você deseja acessar qualquer propriedade de um objeto. Um getter também é chamado de acessador.
    setter: Este método surge quando você deseja alterar qualquer propriedade de um objeto. Um setter também é conhecido como um modificador.


*/
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this._idade = 0;
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (valor) {
            if (valor >= 0 && valor <= 120) {
                this._idade = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);

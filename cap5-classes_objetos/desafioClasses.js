/*
Desafio Classe Produto
Atributos: nome, preco, desconto
Criar o constructor
Obs1: Desconto é opcional (valor padrão 0)
Obs2: Criar dois produtos: passando dois e tres params
*/
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    Produto.prototype.resumo = function () {
        return "".concat(this.nome, " custa R$").concat(this.precoComDesconto(), " (").concat(this.desconto * 100, "% off)");
    };
    return Produto;
}());
var blusa = new Produto('Blusa Preta', 20);
blusa.desconto = 0.15;
console.log(blusa.resumo());
var calca = new Produto('Calca azul', 50, 0.05);
console.log(calca.resumo());

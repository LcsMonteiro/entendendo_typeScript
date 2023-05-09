/* 
Desafio Classe Produto
Atributos: nome, preco, desconto
Criar o constructor
Obs1: Desconto é opcional (valor padrão 0)
Obs2: Criar dois produtos: passando dois e tres params
*/

class Produto {
    constructor(public nome: string, public preco:number, public desconto: number = 0){

    }

    public precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto *100}% off)`
    }
}


const blusa = new Produto ('Blusa Preta', 20)
blusa.desconto = 0.15
console.log(blusa.resumo())

const calca = new Produto ('Calca azul', 50, 0.05)
console.log(calca.resumo())

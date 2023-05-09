class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string,
        private velocidadeMaxima: number = 200) {
        
    }

    protected alterarVelocidade(delta: number): number { // delta =  diferenca do valor atual
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar()) // Cria um array com 50 posicoes zeradas = Array(50).fill(0).forEach(() 
console.log(carro1.acelerar())

Array(40).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

// simular "erros"
// carro1.velocidadeAtual = 300
// console.log('atual -> ' + carro1.velocidadeAtual)

// carro1.velocidadeMaxima = 500
// console.log('máxima -> ' + carro1.velocidadeMaxima)

// carro1.alterarVelocidade(150)
// console.log('atual -> ' + carro1.velocidadeAtual)

// É a capacidade de reutilizar código

class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima) // super = construtor da classe mae
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())
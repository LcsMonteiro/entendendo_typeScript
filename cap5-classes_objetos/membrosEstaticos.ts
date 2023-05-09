// Atributos e métodos estáticos
/*
Podemos definir em uma classe métodos estáticos que podem ser executados sem que a mesma tenha sido instanciada. Geralmente este recurso é utilizado para criar funções de utilidades.
No exemplo abaixo temos a classe Pessoa que possuí o método estático cpfIsValid, que valida se o número de cpf informado é valido.

class Pessoa {
    * verifica se um número de CPF é valido
    *
    * @param value numero de cpf
    * @returns

    static cpfIsValid (value) {
        return /^\d\.\d\.\d\-\d$/.test(value)
    }
}
console.log(Pessoa.cpfIsValid('999.999.999-99'))
*/

class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4))
/*
    getter: este método surge quando você deseja acessar qualquer propriedade de um objeto. Um getter também é chamado de acessador.
    setter: Este método surge quando você deseja alterar qualquer propriedade de um objeto. Um setter também é conhecido como um modificador.


*/

class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)
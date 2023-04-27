let meuNome:string = 'Larissa'
console.log(nome)

function retornaNome(): string {
    return meuNome
}

console.log(retornaNome())

// o tipo void para indicar que não retorna nada
function digaOi(): void {
    console.log('Oi')
}
digaOi()

// definindo os tipos no parametro da função
function soma(n1: number, n2: number): number {
    return n1 + n2
}
console.log(soma(2, 3))

// função como tipo
let calculo: (numero1: number, numero2: number) => number 
calculo = soma
console.log(calculo(2, 3))
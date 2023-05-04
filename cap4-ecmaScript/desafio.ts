// Desafios - Use recursos es6 para resolver os exercicios abaixo

/*Exercicio 1
var dobro = function(valor) {
    return valor * 2
}
console.log(dobro(10))
*/
let dobro = (valor: number) : number => valor * 2
console.log(dobro(10))

/* Exercicio 2
var dizerOla = function (nome) {
    if (nome === undefined) { nome = 'Pessoa' }
    console.log('Olá, ' + nome)
}
dizerOla()
dizerOla('Anna')
*/
var dizerOla = function (nome: string = 'Pessoa'): void {
    console.log('Olá, ' + nome)
}
dizerOla()
dizerOla('Anna')


/* Exercicio 3
var nums = [-3, 33, 38, 5]
Imprimir o menor valor
console.log('???')
*/
let nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))


/*Exercicio 4
var array = [55, 20]
Adicionar todos os elementos de "nums" em array
console.log(array)
*/
let array1 = [55, 20]
array1.push(...nums)
console.log(array1)

/* Exercicio 5
var notas = [8.5, 6.3, 9.4]
var nota1 = notas[0]
var nota2 = notas[1]
var nota3 = notas[2]
console.log(nota1, nota2, nota3)
*/
let notas = [8.5, 6.3, 9.4]
let [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

/*Exercicio 6
var cientista = { primeiroNome: 'Will', expeciencia: 12 }
var primeiroNome = cientista.primeiroNome
var expeciencia = cientista.expeciencia
console.log(primeiroNome, expeciencia)
*/
let cientista = { primeiroNome: 'Will', experiencia: 12 }
let {primeiroNome, experiencia} = cientista
let infoCientista = `
${primeiroNome}, experiencia: ${experiencia} anos
`
console.log(infoCientista)
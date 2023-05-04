//Rest e Spread
var numbers = [1,10,24,38,100,1022]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Lorraine']
const turmaB: string[] = ['Lorena', 'Luiz', 'Stephanie', ...turmaA]
console.log(turmaB)

function retornaArray(...args: number[]): number[] {
    return args
}
const array = retornaArray(20,2 6, 200, 345, 900)
console.log(array)\
console.log(retornaArray(...numbers))

//Rest e Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'algo', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c})
}

tuplaParam1(...tupla)


// exemplo função

function soma(n1:number, n2:number) {
    return n1 + n2
}
console.log(soma(2,2))

//arrow function
const subtrair = (n1: number, n2:number): number => n1 - n2 
console.log(subtrair(5,3))

//arrow function sem parametro
const bomDia = () => console.log('Bom Dia!')

//arrow function com 1 parametro
const falarOla = (pessoa: string) => console.log('Olá' + pessoa)
falarOla('Larissa')

//this
function normalComThis() {
    console.log(this)
}
const normalComThisEspecial = normalComThis.bind('Kitana')
normalComThisEspecial()
normalComThisEspecial()

const arrowThis = () => console.log(this)
arrowThis()

// Parametros padrão
function contagemRegressiva(inicio: number = 8) :void {
    fim: number = inicio - 5): void {
        console.log(inicio)
        while(inicio > fim) {
            inicio--
            console.log(inicio)
        }
    }
    console.log('Fim!')
}

contagemRegressiva()
contagemRegressiva(10)
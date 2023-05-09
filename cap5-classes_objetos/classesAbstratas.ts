// Classe abstrata

/*
A classe abstrata é um tipo de classe que somente pode ser herdada e não instanciada, de certa forma pode 
se dizer que este tipo de classe é uma classe conceitual que pode definir funcionalidades para que as suas 
subclasses (classes que herdam desta classe) possam implementa-las de forma não obrigatória, ou seja ao se 
definir um conjunto de métodos na classe abstrata não é de total obrigatoriedade a implementação de todos os 
métodos em suas subclasses, em uma classe abstrata os métodos declarados podem ser abstratos ou não, e suas 
implementações devem ser obrigatórias na subclasse ou não, quando criamos um método abstrato em uma classe 
abstrata sua implementação é obrigatória, caso você não implemente o mesmo o compilador criará um erro em tempo de compilação.
*/
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())
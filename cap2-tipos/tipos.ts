// string
let nome:string = 'Larissa'
console.log(nome)

// number
let idade:number = 27
console.log(idade)

// boolean
let hobbies:boolean = true
console.log(hobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)

// array do tipo string
let pessoas: string[]= ['Larissa', 'Maria', 'João']
console.log(pessoas)

// array do tipo number
let pessoasIdades: number[] = [27, 28, 29]
console.log(pessoasIdades)

// array do tipo boolean
let pessoasHobbies: boolean[] = [true, false, true]
console.log(pessoasHobbies)

// array do tipo any
let pessoasIdade: any[] = ['Larissa', 27, 'Maria', 28, 'João', 29]
console.log(pessoasIdade)

// array de tuplas
let pessoasIdadesHobbie: [number, string, boolean] = [27, 'Larissa', true]
console.log(pessoasIdadesHobbie)

let endereco: [string,number,string] = ['Rua Feliz', 101, 'Bairro bom']
console.log(endereco)

// enums - estrutura que definimos valores
enum Cor {
    Rosa,
    Vermelho,
    Azul,
    Roxo
}
let minhaCor: Cor = Cor.Rosa
console.log(minhaCor)

//any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)



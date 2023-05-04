// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)


// Destructuring (objeto)
const personagem = {
    nome: 'Kitana',
    idade: 2,
    peso: 5,
}

const { nome: n, idade: i, peso: p } = personagem
console.log(n)
console.log(i)
console.log(p)
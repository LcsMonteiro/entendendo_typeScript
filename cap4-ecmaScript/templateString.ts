const usuarioID: string = 'Kitana Bacana'
const notificacoes: string = '19'

const boasVindas = `
Boas Vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`
console.log(boasVindas)

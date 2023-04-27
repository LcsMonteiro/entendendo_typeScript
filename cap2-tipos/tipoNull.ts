// Não é possível declarar que o tipo é null, caso seja necessário, usa-se Union Types

type Contato = {
    nome: string,
    email: string | null,
    telefone: string,
    endereco: string,
    cidade: string,
}

const contato1: Contato = {
    nome: 'João',
    email: null,
    telefone: '1234567890',
    endereco: 'Rua ABC',
    cidade: 'São Paulo',
}

console.log(contato1)
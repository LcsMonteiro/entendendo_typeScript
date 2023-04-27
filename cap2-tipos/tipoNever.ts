function erro(msg:string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Notebook',
    preco: -2499,
    validarProduto() {
        if(!this.nome || this.nome.trim().length ==0) {
            erro('O nome é obrigatório')
        }
        if(this.preco <= 0) {
            erro('O preço é inválido')
        }
    }
}
produto.validarProduto()
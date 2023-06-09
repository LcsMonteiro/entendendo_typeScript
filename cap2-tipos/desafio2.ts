// Desafio
// Transforme o código abaixo em Typescript

/* let contaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  },
};

let correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
*/
// Código em Typescript

interface ContaBancaria {
  saldo: number;
  depositar(valor: number): void;
}

interface Correntista {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  },
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);

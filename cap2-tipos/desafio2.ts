// Desafio

type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => number;
};

function saldoConta(saldo: number, valor: number): number {
  return saldo + valor;
}

let contaBancaria = {
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

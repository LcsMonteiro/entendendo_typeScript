//Desafio

/*
Criar um objeto funcionário com:
- Array de strings com os nomes dos supervisores;
- Função de bater ponto que recebe a hora e retorna uma string;
        -Ponto normal (<= 8)
        -Ponto fora do horário (> 8)
*/

let funcionario: {
  supervisores: string[];
  baterPonto: (horas: number) => string;
} = {
  supervisores: ["Maria", "João"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto normal";
    } else {
      return "Ponto fora do horário";
    }
  },
};

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))
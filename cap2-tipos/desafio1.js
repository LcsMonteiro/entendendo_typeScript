//Desafio
/*
Criar um objeto funcionário com:
- Array de strings com os nomes dos supervisores;
- Função de bater ponto que recebe a hora e retorna uma string;
        -Ponto normal (<= 8)
        -Ponto fora do horário (> 8)
*/
var funcionario = {
    supervisores: ["Maria", "João"],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return "Ponto normal";
        }
        else {
            return "Ponto fora do horário";
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

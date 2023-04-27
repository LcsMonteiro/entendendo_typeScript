type Funcionario = {
    supervisores: string[],
    baterPonto: (horas:number) => string
}

let funcionario1: Funcionario = {
    supervisores: ["Maria", "João"],
    baterPonto(horario: number): string {
      if (horario <= 8) {
        return "Ponto normal";
      } else {
        return "Ponto fora do horário";
      }
    },
  };
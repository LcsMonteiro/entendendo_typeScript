class Data {
    public dia: number // são publicos por padrão caso não defirnismos os modificadores de acesso
    public mes: number
    public ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number= 2000){ // constructor com valor padrão
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

 const aniversario = new Data(30, 12, 1995);
 console.log(aniversario)

 class DataEperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number= 2000){ 

    }
}

 const aniversarioEsperto = new DataEperta(30, 12, 1995);
 console.log(aniversario)




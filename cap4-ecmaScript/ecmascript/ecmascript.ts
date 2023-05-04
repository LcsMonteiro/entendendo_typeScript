// hoisting
console.log(teste)
teste = 'teste'
// só o tipo var que é elevado, se por exemplo ser utilizado o let, dará um erro

//var
// o tipo var tem dois tipos de escopo, ou ela é global, ou é delimitada dentro de uma função
let estaFrio = true
if(estaFrio){
    var acao = 'Colocar casaco'
}
console.log(acao)

/* o mesmo exemplo acima usando let ou const seria diferente pois tem escopo de bloco
let estaFrio = true
if(estaFrio){
    let acao = 'Colocar casaco'
    console.log(acao)
}
*/


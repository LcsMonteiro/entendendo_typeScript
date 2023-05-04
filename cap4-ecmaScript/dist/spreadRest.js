var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Rest e Spread
var numbers = [1, 10, 24, 38, 100, 1022];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Lorraine'];
var turmaB = __spreadArrays(['Lorena', 'Luiz', 'Stephanie'], turmaA);
console.log(turmaB);
function retornaArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var array = retornaArray(20, 26, 200, 345, 900);
console.log(array);
console.log(retornaArray.apply(void 0, numbers));
//Rest e Spread (Tupla)
var tupla = [1, 'algo', false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c + ")\n}\n\ntuplaParam1(...tupla)\n\n");
}

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Rest e Spread
var numbers = [1, 10, 24, 38, 100, 1022];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Lorraine'];
var turmaB = __spreadArray(['Lorena', 'Luiz', 'Stephanie'], turmaA, true);
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
    console.log("1) ".concat(a, " ").concat(b, " ").concat(c));
}
tuplaParam1.apply(void 0, tupla);
var aluno = { nome: 'Larissa' };
var alunoNotas = __assign(__assign({}, aluno), { matematica: 10 });
console.log(alunoNotas);

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

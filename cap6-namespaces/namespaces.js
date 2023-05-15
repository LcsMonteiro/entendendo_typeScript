var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        var Pi = 3.14;
        function circunferencia(raio) {
            return Pi * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        var Pi = 3.14;
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));

//callback
function esperar3s(callback) {
    setTimeout(function () {
        callback('3 segundos depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
//Promise
function esperar3sPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('3 segundos depois promise...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(function (dado) {
    return console.log(dado);
});
// Promise usando api
fetch('https://swapi.dev/api/people/1')
    .then(function (res) { return res.json; })
    .then(function (personagem) { return console.log(personagem); });
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme.title))

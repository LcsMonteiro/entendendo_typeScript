//callback
function esperar3s(callback) {
    setTimeout(function () {
        callback('3 segundos depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
/* Promise
function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3 segundos depois promise...')
        }, 3000)
    })
}

esperar3sPromise()
   .then(dado =>
        console.log(dado))
        */
// Promise usando api
fetch('https://swapi.dev/api/people/1')
    .then(function (res) { return res.json; })
    .then(function (personagem) { return personagem.films; })
    .then(function (films) { return fetch(films[0]); })
    .then(function (resFilm) { return resFilm.json(); })
    .then(function (filme) { return console.log(filme.title); });

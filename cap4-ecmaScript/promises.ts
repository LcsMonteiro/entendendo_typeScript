//callback
function esperar3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3 segundos depois...')
    }, 3000)
}
esperar3s(function(resultado: string) {
    console.log(resultado)
})

//Promise
function esperar3sPromise() {
    return new Promise((resolve: any, reject: any) => {
        setTimeout(() => {
            resolve('3 segundos depois promise...')
        }, 3000)
    })
}

esperar3sPromise()
   .then(dado => 
        console.log(dado))


// Promise usando api
fetch('https://swapi.dev/api/people/1')
.then(res => res.json)
   .then(personagem => console.log(personagem))
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme.title))

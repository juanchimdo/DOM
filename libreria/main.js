document.addEventListener('DOMContentLoaded', function() {


    //VARIABLES//

    const buscarIsbn = document.querySelector('.buscarIsbn')
    const isbn = document.querySelector('.isbn')
    const buscarAutor = document.querySelector('.buscarAutor')
    const autor = document.querySelector('.autor')
    const ranking = document.querySelector('.ranking')

    //EVENTOS//

    buscarIsbn.addEventListener('click',buscarLibro)
    buscarAutor.addEventListener('click',busquedaPorAutor)
    ranking.addEventListener('click',masBuscados)


    //  FUNCIONES   //

    function buscarLibro () {
        let noEstaEnLaLista = true
        for (let i = 0; i < libros.length; i++) {
            if (libros[i].isbn === isbn.value) {
                noEstaEnLaLista = false
                if (libros[i].disponible === true) {
                    console.log ('el libro esta disponible')
                } else {
                    console.log ('el libro no esta disponible')
                }
            }
        }
        if (noEstaEnLaLista === true) {
            console.log ('El libro no esta en la lista')
        }
    }
    function busquedaPorAutor () {
        let autorNoDisponible = true
        for (let i = 0; i < libros.length; i++) {
            if (libros[i].autor === autor.value && libros[i].disponible === true) {
                autorNoDisponible = false
                console.log (libros[i].titulo)
            }
        }
        if (autorNoDisponible === true) {
            console.log ('No hay ningun libro disponible de ese autor')
        }
    }   
    function masBuscados () {
        const rankingLibros = []
        function compareNumbers(a, b) {
            return b.contadorAlquilado - a.contadorAlquilado
        }
        let librosOrdenados = libros.sort(compareNumbers)
        librosOrdenados.splice(10)
        for (let i = 0; i < librosOrdenados.length; i++) {
            rankingLibros.push(
                {
                    titulo : librosOrdenados[i].titulo,
                    reservas : librosOrdenados[i].contadorAlquilado
                }
            )
        }
        console.log('Los 10 libros que mas se piden son los siguientes')
        return console.log(rankingLibros)
    }
})

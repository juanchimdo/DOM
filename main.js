window.onload = function () {
    const titulo = document.querySelector('h1')
    const parrafo = document.querySelector('p')
    const imagen1 = document.querySelector('.logo')
    const imagen2 = document.querySelector('.firma')
    const nombre = document.querySelector('#nombre')

    titulo.style.display = 'none'
    parrafo.style.color = 'violet'
    parrafo.style.fontSize = '50px'
    parrafo.style.border = 'solid black 2px'
    parrafo.style.borderRadius = '8px'
    
    nombre.addEventListener ('click', function (){
        if (nombre.style.color === 'black') {
            nombre.style.color = 'white'
        } else {
            nombre.style.color = 'black'
        }
    })
}
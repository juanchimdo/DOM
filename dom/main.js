window.onload = function () {
    const titulo = document.querySelector('h1')
    const parrafo = document.querySelector('p')
    const logo = document.querySelector('.logo')
    const firma = document.querySelector('.firma')
    const nombre = document.querySelector('#nombre')

    titulo.style.display = 'none'
    parrafo.style.color = 'violet'
    parrafo.style.fontSize = '50px'
    parrafo.style.border = 'solid black 2px'
    parrafo.style.borderRadius = '8px'
    
    firma.addEventListener ('click', function () {
        if (nombre.style.display === 'block') {
            nombre.style.display = 'none'
        } else {
            nombre.style.display = 'block'
        }
    })
}
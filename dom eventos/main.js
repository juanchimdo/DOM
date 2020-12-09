window.onload = function () {
    const boton = document.querySelector('.boton')
    const input = document.querySelector('.input')
    const cartel = document.querySelector('.cartel')
    input.focus()
    
    function verificar (){
        if (input.value>=18) {
            cambiarHTML(cartel,'BIENVENIDO','green')
        } else {
            cambiarHTML(cartel,'Lo siento, eres menor de edad','red')
        }
    }

    function apretarEnter(event){
        if (event.key==='Enter') {
            verificar()
        }
    }

    boton.addEventListener('click', verificar)
    input.addEventListener('keypress', apretarEnter)
}

function cambiarHTML (elemento,mensaje,color) {
    elemento.innerHTML = mensaje
    elemento.style.visibility = 'visible'
    elemento.style.background = color
}
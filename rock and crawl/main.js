// const clientes = [
//     {
//         nombre : 'El caballo de troya',
//         telefono : '0173638293',
//         sesiones : [
//             {
//                 duracion : '0:59',
//                 fecha : '2020-05-04'
//             },
//             {
//                 duracion : '1:30',
//                 fecha : '2020-04-27'
//             },
//             {
//                 duracion : '1:20',
//                 fecha : '2020-04-20'
//             },
//             {
//                 duracion : '0:40',
//                 fecha : '2020-03-22'
//             }
//         ],
//         pagos : [
//             {
//                 monto : 50,
//                 fecha : '2020-04-29'
//             }
//         ]
//     },
//     {
//         nombre : 'Los Javascript',
//         telefono : '387498301',
//         sesiones : [
//             {
//                 duracion : '0:34',
//                 fecha : '2020-02-20'
//             },
//             {
//                 duracion : '1:30',
//                 fecha : '2020-03-14'
//             },
//             {
//                 duracion : '2:30',
//                 fecha : '2020-05-03'
//             }
//         ],
//         pagos : [
//             {
//                 monto : 120,
//                 fecha : '2020-05-10'
//             }
//         ]
//     },
//     {
//         nombre : 'Minecraft',
//         telefono : '0327897203',
//         sesiones : [
//             {
//                 duracion : '0:15',
//                 fecha : '2020-01-10'
//             },
//             {
//                 duracion : '0:40',
//                 fecha : '2020-01-26'
//             },
//             {
//                 duracion : '1:00',
//                 fecha : '2020-02-04'
//             },
//             {
//                 duracion : '0:35',
//                 fecha : '2020-02-22'
//             }
//         ],
//         pagos : [
//             {
//                 monto : 50,
//                 fecha : '2020-02-29'
//             },
//             {
//                 monto : 70,
//                 fecha : '2020-03-22'
//             }
//         ]
//     }
// ]


const clientes = []

function nuevoCliente (){
    let seguirAgregando = true
    while (seguirAgregando === true) {
        const banda = new Object()
        banda.nombre = prompt('Ingrese el nombre de la banda')
        banda.telefono = prompt('Ingrese un numero de teléfono')
        banda.sesiones = [] 
        let nuevaSesion = true
        while (nuevaSesion === true) {
            const sesion = new Object()
            sesion.duracion = prompt('ingrese la duracion de la sesion')
            sesion.fecha = prompt('ingrese la fecha de la sesion')
            banda.sesiones.push(sesion)
            if (prompt('Desea agregar otra sesion?') === 'no') {
                nuevaSesion = false
            }            
        }
        banda.pagos = []
        let nuevoPago = true
        while (nuevoPago === true) {
            const pago = new Object()
            pago.monto = prompt('ingrese monto del pago')
            pago.fecha = prompt('ingrese fecha de pago')
            banda.pagos.push(pago)
            if ( prompt ('Desea agregar un nuevo pago?') === 'no') {
                nuevoPago = false
            }            
        }
        clientes.push(banda)
        if ( prompt('Desea agrgar un nuevo cliente?') === 'no') {
            seguirAgregando = false
        }
    }
    console.log (clientes)
}
function apretarEnter (e) {
    if (e.key === 'Enter') {
        nuevoCliente()
    }    
}

document.addEventListener('DOMContentLoaded', function () {

const agregarCliente = document.querySelector('.agregarCliente')
const BODY = document.getElementsByTagName('BODY') [0]


agregarCliente.addEventListener('click', nuevoCliente)
BODY.addEventListener('keypress', apretarEnter)

})


// ARREGLAR ERRORES EN LA INTRODUCCION DE DATOS
// SUGERIR FORMATO DE RESPUESTA
// QUE PASA AL APRETAR CANCELAR
// DEFINIR FUNCIONES MAS CORTAS
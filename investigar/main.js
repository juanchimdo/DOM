function calcularVuelto (precioAPagar, montoQueSePaga) {
	let billetes1000 = 0
	let billetes500 = 0
	let billetes200 = 0
	let billetes100 = 0
	let billetes50 = 0
	let billetes20 = 0
	let billetes10 = 0
	let billetes5 = 0
	let monedas = 0
	let vuelto = montoQueSePaga - precioAPagar
	if (vuelto>=1000) {
		billetes1000 = Math.trunc(vuelto/1000)
		vuelto = vuelto - 1000 * billetes1000
	}
	if (vuelto>=500) {
		billetes500 = Math.trunc(vuelto/500)
		vuelto = vuelto - 500 * billetes500
	}
	if (vuelto>=200) {
		billetes200 = Math.trunc(vuelto/200)
		vuelto = vuelto - 200 * billetes200
	}
	if (vuelto>=100) {
		billetes100 = Math.trunc(vuelto/100)
		vuelto = vuelto - 100 * billetes100
	}
	if (vuelto>=50) {
		billetes50 = Math.trunc(vuelto/50)
		vuelto = vuelto - 50 * billetes50
	}
	if (vuelto>=20) {
		billetes20 = Math.trunc(vuelto/20)
		vuelto = vuelto - 20 * billetes20
	}
	if (vuelto>=10) {
		billetes10 = Math.trunc(vuelto/10)
		vuelto = vuelto - 10 * billetes10
	}
	if (vuelto>=5) {
		billetes5 = Math.trunc(vuelto/5)
		vuelto = vuelto - 5 * billetes5
	}
	return 'su vuelto es de ' + billetes1000 + ' billetes de 1000, ' + billetes500 + ' billetes de 500, ' + billetes200 + ' billetes de 200, ' + billetes100 + ' billetes de 100, ' + billetes50 + ' billetes de 50, ' + billetes20 + ' billetes de 20, ' + billetes10 + ' billetes de 10, ' + billetes5 + ' billetes de 5 y ' + vuelto + ' en monedas.'
}

const precio = 1450
const monto = 2000

console.log (calcularVuelto(precio,monto))


function dibujarTriangulo (alturaTriangulo) {
	const h = Math.trunc(alturaTriangulo/2)
	let asterisco = '*'
	for (var i = 0; i < h; i++) {
		console.log(asterisco)
		asterisco += '*'
	}
	for (var i = h; i >= 0; i--) {
		console.log(asterisco)
		asterisco = asterisco.slice (1)
	}
}

const d = 8

console.log (dibujarTriangulo(d))






















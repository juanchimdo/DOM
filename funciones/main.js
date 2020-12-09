function calcularAreaRectangulo(b, a) {
	const areaRectangulo = b*a
	return areaRectangulo
}

let base = 4;
let altura = 5;

console.log (calcularAreaRectangulo (base, altura))


function calcularPrecioTotal (pu, cu, ce) {
	const precioQueDebeAbonarElCliente = pu*cu+ce
	return precioQueDebeAbonarElCliente
}

let precioUnitario = 25
let cantidadDeUnidades = 10
let costoDelEnvio = 15

console.log (calcularPrecioTotal(precioUnitario, cantidadDeUnidades, costoDelEnvio))


function dejarPasar (e) {
	if (e>=18) {
		return true
	} else {
		return false
	}
}

let edad = 18

console.log (dejarPasar(edad))
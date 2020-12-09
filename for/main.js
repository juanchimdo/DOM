function imprimirNumeros(numero) {
	for (var i = 1; i <= numero; i++) {
		console.log(i)
	}
}

function imprimirOtrosNumeros (numeroDesde,numeroHasta) {
	if (numeroDesde<numeroHasta) {
		for (var i = numeroDesde+1; i < numeroHasta; i++) {
			console.log (i)
		}
	}
}


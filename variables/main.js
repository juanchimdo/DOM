const miComidaPreferida = {
	nombre : 'Paella',
	cantidadDeVecesQueComi : 20,
	cantidadDeVecesQueMeCocinaron : 15,
	ingredientes : ['arroz', 'mariscos', 'arvejas', 'tomate', 'mejillones', 'cebolla', 'morron', 'ajo', 'azafran', 'sal', 'aceite de oliva']
}

function calculo () {
	if (miComidaPreferida.ingredientes.length > 5) {
		return true
	} else {
		return false
	}
}

miComidaPreferida.llevaMasDeCincoIngredientes = calculo ()

miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron

console.log (miComidaPreferida)
function contarEspacios(texto) {
	let espacios = 0
	for (var i = 0; i < texto.length; i++) {
		if (texto[i]===' ') {
			espacios = espacios +1
		}
	}
	return espacios
}

const text1 ='kjnsdjkewn kjndewkjdn kndlqdlq nkdnlqwn klwdqw jnlqdl jnd n lndlwqndl jwnw'

console.log (contarEspacios(text1))


function buscarTweets (lista, texto) {
	let tweets = []
	for (var i = 0; i < lista.length; i++) {
		if (lista[i].includes (texto)) {
			tweets.push (lista[i])
		}
	}
	return tweets
}


const listaDeTweets = [
	'la papa esta caliente',
	'no me gusta la carne', 
	'estamos aburridos', 
	'la cocina esta limpia', 
	'me gusta el pastel de papa',
	'quienes estan aburridos',
	'la cocina esta sucia'
]

const text2 = 'la cocina esta'

console.log (buscarTweets(listaDeTweets,text2))


function censurarTexto (frase, expresiones) {
	let fraseCensurada = frase
	for (var i = 0; i < expresiones.length; i++) {
		if (frase.includes(expresiones[i])) {
			let asteriscos = '*'
			for (var j = 0; j < expresiones[i].length-1; j++) {
				asteriscos = asteriscos + '*'
			}
			fraseCensurada = fraseCensurada.replace (expresiones[i], asteriscos)
		}
	}
	return fraseCensurada
}

const text3 = 'estamos todo el dia metidos y la puta madre que lo pario, la concha de la lora, pelotudo de mierda'

const listaExpresiones = [
	'puta',
	'puto',
	'concha',
	'pelotudo',
	'forro',
	'forra',
	'conchudo',
	'mierda'
]

console.log (censurarTexto(text3, listaExpresiones))






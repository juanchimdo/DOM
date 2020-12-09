function duplicarNumero(listaDeNumeros) {
	for (var i = 0; i < listaDeNumeros.length; i++) {
		listaDeNumeros[i] = listaDeNumeros [i]*2
	}
	return listaDeNumeros
}

const lista1 = [2,5,8,3,10]

console.log (duplicarNumero(lista1))



function multiplicar (listaDeNumeros) {
	let resultado = 1
	for (var i = 0; i < listaDeNumeros.length; i++) {
		resultado = resultado * listaDeNumeros[i]
	}
	return resultado
}

const lista2 = [3,5,8,12]

console.log (multiplicar(lista2))


function calcularPromedio (listaDeNumeros) {
	let suma = 0
	for (var i = 0; i < listaDeNumeros.length; i++) {
		suma = suma + listaDeNumeros [i]
	}
	const resultado = suma / listaDeNumeros.length
	return resultado
}

const lista3 = [4,1,7,4,8]

console.log (calcularPromedio(lista3))
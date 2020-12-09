function calcularResultadoDeExamen(notaDeExamen) {
	if (notaDeExamen <4) {
		return 'Aplazado'
	}
	if (notaDeExamen>=4 && notaDeExamen<=6) {
		return 'A recuperar'
	}
	if (notaDeExamen>6 && notaDeExamen<10) {
		return 'Aprobado'
	}
	if (notaDeExamen=10) {
		return 'Sobresaliente'
	}
}

let notaDeExamen = 8;

console.log (calcularResultadoDeExamen(notaDeExamen))


function sonHermanos (o1, o2) {
	if (o1.madre ===o2.madre && o1.padre === o2.padre) {
		return true
	} else {
		return false
	}
}

const obj1 = {
	madre : 'Maria',
	padre : 'Eduardo'
}

const obj2 = {
	madre : 'Maria',
	padre : 'Eduardo'
}

console.log (sonHermanos(obj1, obj2))


function contarEspacios (t) {
	let espacios = t.split (' ')
	espacios = espacios.length -1
	return espacios
}


let texto ='kcejnewn doiwqoidwjoq iwdjqoiw oidqwoiwmq iqwdoiwqm jbjhwqbxjwq jxkwqnjq'

console.log (contarEspacios (texto))
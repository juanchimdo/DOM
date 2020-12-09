/*
Definir dibujarTriangulo que reciba una altura del triángulo e imprima en consola un triángulo
con esa altura hecho con asteriscos
*/

function dibujarTriangulo(altura) {
  for (let i = 1; i <= altura; i++) {
    console.log(obtenerGuiones(calcularGuiones(i, altura)))
  }
}

function obtenerGuiones(cantidad) {
  let guiones = ''

  for (let i = 0; i < cantidad; i++) {
    guiones += '-'
  }

  return guiones
}

function calcularGuiones(numeroDeLinea, altura) {
  /*
    Si el numero de linea es menor o igual a la mitad de la altura,
    devolvemos el numero de linea.

    Si el numero no es menor o igual, devolvemos la altura más 1
    menos el numero de linea actual.
  */

  if (numeroDeLinea <= altura / 2) {
    return numeroDeLinea
  }

  return altura + 1 - numeroDeLinea
}

dibujarTriangulo(7)

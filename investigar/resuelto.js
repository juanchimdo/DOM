/*
Definir una función llamada obtenerRecetaPorIngrediente que reciba dos parámetros:
el primero, una lista de comidas (un objeto con nombre y lista de ingredientes),
y el segundo, el nombre de un ingrediente. Debe devolver todas las recetas que puedan
hacerse con este ingrediente.
*/

function obtenerRecetasPorIngrediente(listaDeRecetas, ingrediente) {
  const listaDeRecetasConIngrediente = []

  for (let i = 0; i < listaDeRecetas.length; i++) {
    const receta = listaDeRecetas[i]

    for (let j = 0; j < receta.ingredientes.length; j++) {
      const ingredienteDeReceta = receta.ingredientes[j]

      if (ingredienteDeReceta === ingrediente) {
        listaDeRecetasConIngrediente.push(receta)
      }
    }
  }

  return listaDeRecetasConIngrediente
}

const recetas = [
  {
    nombre: 'Tortilla de batata',
    ingredientes: ['batata', 'cebolla', 'morron'],
  },
  {
    nombre: 'Tortilla de papa',
    ingredientes: ['papa', 'huevo', 'cebolla', 'morron'],
  },
  {
    nombre: 'Pastel de batata',
    ingredientes: ['ajo', 'leche', 'batata'],
  }
]

const recetasConBatata = obtenerRecetasPorIngrediente(recetas, 'batata')

console.log(recetasConBatata)

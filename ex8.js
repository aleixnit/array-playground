// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

function cortaPorAqui(corteIzq, corteDer, array) {
    const indexIzq = array.findIndex(animal => animal === corteIzq);
  const indexDer = array.findIndex(animal => animal === corteDer);
  
  if (indexIzq === -1 || indexDer === -1) {
    // Uno o ambos elementos no se encontraron en el array
    return [];
  }
  
  const start = Math.min(indexIzq, indexDer);
  const end = Math.max(indexIzq, indexDer) + 1;
  
  return array.slice(start, end);
}


/**
 * Utiliza de manera combinada y adecuadamente el método .findIndex y .slice para 'cortar' un array entre dos elementos. Para simplificar, el primer animal siempre está 'a la izquierda' del segundo animal por el que queremos cortar
 */

let animales = ["Elefante", "Tigre", "Leopardo", "Ñu", "Pantera"];

console.log(cortaPorAqui("Elefante", "Leopardo", animales)); // ["Elefante", "Tigre", "Leopardo"]
console.log(cortaPorAqui("Tigre", "Ñu", animales)); // ["Tigre", "Leopardo", "Ñu"]
console.log(cortaPorAqui("Tigre", "Tigre", animales)); // ["Tigre"]


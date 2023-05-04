// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

const palabrasConE = words.filter(word => word.includes("e"))

console.log(palabrasConE); // TODO [ 'elite', 'exuberant']

// Usa el método filter para filtrar las palabras que empiezan por vocal
// BONUS: Usa una expresión regular!

const palabrasVocales = words.filter(word => {
    const primeraLetra = word.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(primeraLetra);
  });
  
  console.log(palabrasVocales); // TODO [ 'elite', 'exuberant', 'away']

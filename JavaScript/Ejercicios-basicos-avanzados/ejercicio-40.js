/*Crea una función llamada findArrayIndex que reciba como parámetros un array de
textos y un texto y devuelve la posición del array cuando el valor del array sea
igual al valor del texto que enviaste como parámetro.

Haz varios ejemplos y compruébalos.

Usando la función anterior benefíciate de poder conocer el índice del array
para crear una función llamada removeItem que, pasándole un array y un texto
como parámetros (los mismos parámetros que en el anterior ejercicio), llame a
la función anteriormente creada findArrayIndex y obtén el índice para
posteriormente usar la función de javascript .splice() para eliminar el elemento
del array.

Es decir, tienes que crear una función que elimine elementos del array y retorne
el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan
correctamente.*/

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  return array.indexOf(text);
}

console.log("=======INDICE DE LUKE=======");
console.log(findArrayIndex(mainCharacters, "Luke"));
console.log("=======INDICE DE LEIA=======");
console.log(findArrayIndex(mainCharacters, "Leia"));
console.log("=======INDICE DE OBI-WAN=======");
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));

function eliminarElementosArray(array, text) {
  const indice = findArrayIndex(array, text);
  array.splice(indice, 1);
}

console.log("=======ARRAY COMPLETO=======");

console.log(mainCharacters);

console.log("=======QUITAMOS A LUKE=======");

eliminarElementosArray(mainCharacters, "Luke");

console.log(mainCharacters);

console.log("=======QUITAMOS A LEIA=======");

eliminarElementosArray(mainCharacters, "Leia");

console.log(mainCharacters);

console.log("=======QUITAMOS A OBI-WAN=======");

eliminarElementosArray(mainCharacters, "Obi-Wan");

console.log(mainCharacters);

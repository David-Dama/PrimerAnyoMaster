/*Calcular promedio mezclado: Crea una función que reciba por parámetro un
array y cuando es un valor number lo sume y de lo contrario cuente la longitud
del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.*/

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let sumaTotal = 0;

  list.forEach((element) => {
    if (typeof element === "string") {
      sumaTotal += element.length;
    } else if (typeof element === "number") {
      sumaTotal += element;
    }
  });

  return sumaTotal;
}

console.log(averageWord(mixedElements));

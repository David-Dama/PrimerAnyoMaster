/*Buscador de nombres: Crea una función que reciba por parámetro un array y el
 valor que desea comprobar que existe dentro de dicho array. Esta función
 comprueba si existe el elemento, y en caso de que exista nos devuelve un true
  y la posición de dicho elemento y por la contra un false.*/

const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, name) {
  let encontrado = false;
  let indexDelNombre;

  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === name) {
      encontrado = true;
      indexDelNombre = i;
    }
  }

  if (encontrado) {
    return `El nombre ha sido encontrado en la posición ${indexDelNombre}!`;
  } else {
    return "El nombre no ha sido encontrado";
  }
}

console.log(nameFinder(names, "Tony"));
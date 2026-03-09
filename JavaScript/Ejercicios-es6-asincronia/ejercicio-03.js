/*3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().*/

const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const users1Names = users1.map((user) => user.name);

console.log("===== EJERCICIO 1 =====");

console.log(users1Names);
/*3.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'.*/

const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const users2ConAnacleto = users2.map((user) => {
  if (user.name[0] === "A") {
    return "Anacleto";
  }
  return user.name;
});

console.log("===== EJERCICIO 2 =====");
console.log(users2ConAnacleto);

/*3.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string '(Visitado)'
cuando el valor de la propiedad isVisited = true.*/

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesConVisitado = cities.map((citie) => {
  if (citie.isVisited === true) {
    citie = citie.name + " visitado";
    return citie;
  } else {
    return none;
  }
});

console.log("===== EJERCICIO 3 =====");

console.log(citiesConVisitado);

/*1.1 En base al siguiente javascript, crea variables en base a las propiedades
del objeto usando object destructuring e imprimelas por consola.

Cuidado, no hace falta hacer destructuring del array, solo del objeto.*/

const game = {
  title: "The Last of Us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;

console.log("===== EJERCICIO 1 =====");

console.log(title);
console.log(gender);
console.log(year);

/*1.2 Basándonos en el siguiente javascript, usa destructuring para crear 3 variables
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprímelo por consola.*/

const fruits = ["Banana", "Strawberry", "Orange"];

let [fruit1, fruit2, fruit3] = fruits;

console.log("===== EJERCICIO 2 =====");

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

/*1.3 En base al siguiente javascript, usa destructuring para crear 2
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();

console.log("===== EJERCICIO 3 =====");

console.log(name);
console.log(race);

/*1.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo.*/

const car = { name2: "Mazda 6", itv: [2015, 2011, 2020] };

const {
  name2,
  itv: [anyo1, anyo2, anyo3],
} = car;

console.log("===== EJERCICIO 4 =====");

console.log(name2);
console.log(anyo1);
console.log(anyo2);
console.log(anyo3);

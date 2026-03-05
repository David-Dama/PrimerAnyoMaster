/*2.1 Dado el siguiente array, crea una copia usando spread operators.*/
const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

console.log("===== EJERCICIO 1 =====");

console.log(pointsListCopy);

/*2.2 Dado el siguiente objeto, crea una copia usando spread operators*/
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toyCopy = { ...toy };

console.log("===== EJERCICIO 2 =====");

console.log(toyCopy);

/*2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usandospread operatos.*/
const pointsListEj3 = [32, 54, 21, 64, 75, 43];
const pointsLis2Ej3 = [54, 87, 99, 65, 32];

const arrayPointsMezclados = [...pointsListEj3, ...pointsLis2Ej3];

console.log("===== EJERCICIO 3 =====");

console.log(arrayPointsMezclados);

/*2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.*/
const toyEj4 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const toysMezclados = { ...toyEj4, ...toyUpdate };

console.log("===== EJERCICIO 4 =====");

console.log(toysMezclados);

/*2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos.*/
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

// Crear copia eliminando la posición 2
const colorsCopy = [...colors.slice(0, 1), ...colors.slice(2)];

console.log(colorsCopy);

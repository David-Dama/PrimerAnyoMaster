/*Mixed For...of e includes: Usa un bucle for...of para recorrer todos los
juguetes y elimina los que incluyan la palabra gato (también podéis crear uno
nuevo con solo los que NO incluyan esa palabra).

Recuerda usar la función .includes() para comprobar la palabra.*/

const toys = [
  { id: 5, name: "Transformers" },
  { id: 11, name: "LEGO" },
  { id: 23, name: "Hot Wheels" },
  { id: 40, name: "Rascador de gato" },
  { id: 40, name: "FurReal Friends gato interactivo" },
  { id: 60, name: "Nerf Blaster" },
  { id: 71, name: "Sylvanian Families - Familia gato" },
];

const toysWithoutCat = [];

for (const juguete of toys) {
  if (!juguete.name.includes("gato")) {
    toysWithoutCat.push(juguete);
  }
}

console.log(toysWithoutCat);

//Otra manera seía usar el for...of como dice el ejercicio pero usando un
//contador para saber en que posicion está la palabra gato y quitar esa opcion,
//quedaria así

/*
const toys = [
  { id: 5, name: "Transformers" },
  { id: 11, name: "LEGO" },
  { id: 23, name: "Hot Wheels" },
  { id: 40, name: "Rascador de gato" },
  { id: 40, name: "FurReal Friends gato interactivo" },
  { id: 60, name: "Nerf Blaster" },
  { id: 71, name: "Sylvanian Families - Familia gato" },
];
for (const juguete of toys) {
  let i = 0;
  i++;

  if (juguete.name.includes("gato")) {
    toys.splice(i, 1);
  }
}
console.log(toys);*/

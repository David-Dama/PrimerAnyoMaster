/*Usa un bucle y dos condiciones para imprimir por consola el nombre de los
usuarios que sean menor de edad precedido del texto "Usuarios menores de edad:"
y otro que imprima a los usuarios mayores de edad, precedido del texto
"Usuarios mayores de edad:". */

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

//Creamos dos listas para almacenar mayores y menores
let listaMayores = [];
let listaMenores = [];

//Bucle
for (const persona of users) {
  if (persona.years > 18) {
    listaMayores.push(persona.name);
  } else {
    listaMenores.push(persona.name);
  }
}

//Salida
console.log(
  `Las personas menores son: ${listaMenores.join(", ")}\nLas personas mayores son: ${listaMayores.join(", ")}`,
);

//el .join lo que hace es que pone la secuencia de caracteres que le indiquemos entre parentesis
//entre elemento y elemento del array
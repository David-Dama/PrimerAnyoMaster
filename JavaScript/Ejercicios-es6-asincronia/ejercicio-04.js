/* 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean mayor que 18 */
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ages1Mas18 = ages1.filter((edad) => edad > 18);

console.log("===== EJERCICIO 1 =====");

console.log(ages1Mas18);

/* 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par. */
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ages2Pares = ages2.filter((edad) => edad % 2 === 0);

console.log("===== EJERCICIO 2 =====");

console.log(ages2Pares);

/* 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */
const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamers1LOL = streamers1.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends",
);

console.log("===== EJERCICIO 3 =====");

console.log(streamers1LOL);

/* 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion .includes() para la comprobación. */
const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamer2ConU = streamers2.filter((streamer) => {
  return streamer.name.includes("u");
});

console.log("===== EJERCICIO 4 =====");

console.log(streamer2ConU);

/* 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.

Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
.age sea mayor que 35. */

const streamer3Ej5 = streamers2.filter((streamer) => {
  if (streamer.gameMorePlayed.includes("Legends")) {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return streamer;
  }
});

console.log("===== EJERCICIO 5 =====");

console.log(streamer3Ej5);

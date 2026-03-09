/* 7.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
.filter() y usa .reduce() para conseguir la media de sus .score.
La función .find() también podría ayudarte para encontrar el genero 'RPG' en el
array .genders. */
const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhalla", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The Last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  { name: "Legend of Zelda: Breath of the wild", genders: ["RPG"], score: 10 },
];

const rpgGames = videogames.filter((game) => game.genders.includes("RPG"));
const mediaRPG =
  rpgGames.reduce((acc, game) => acc + game.score, 0) / rpgGames.length;
console.log("Media de RPG:", mediaRPG);

//Hay varias maneras, esta es la más logica paa mi
let conteo = 0;
let juegosRPG = videogames.reduce((acc, cur) => {
  if (cur.genders.includes("RPG")) {
    acc += cur.score;
    conteo++;
  }
  return acc;
}, 0);

console.log(juegosRPG / conteo);

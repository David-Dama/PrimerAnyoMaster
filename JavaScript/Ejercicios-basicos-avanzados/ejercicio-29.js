/*Agrupa las películas de Star Wars por década de lanzamiento en un objeto
 donde las claves son las décadas y los valores son arrays de películas.*/

const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

let ordenadoPorDecadas = {
  1970: [],
  1980: [],
  1990: [],
  2000: [],
  2010: [],
};

for (let i = 0; i < starWarsMovies.length; i++) {
  const year = starWarsMovies[i].releaseYear;
  const title = starWarsMovies[i].title;

  if (year >= 1970 && year < 1980) {
    ordenadoPorDecadas[1970].push(title);
  } else if (year >= 1980 && year < 1990) {
    ordenadoPorDecadas[1980].push(title);
  } else if (year >= 1990 && year < 2000) {
    ordenadoPorDecadas[1990].push(title);
  } else if (year >= 2000 && year < 2010) {
    ordenadoPorDecadas[2000].push(title);
  } else if (year >= 2010 && year < 2020) {
    ordenadoPorDecadas[2010].push(title);
  }
}

console.log(ordenadoPorDecadas);

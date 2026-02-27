/*Dada una lista de canciones, clasifícalas en un objeto donde las claves sean
los géneros y los valores sean arrays de canciones de ese género.*/

const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

let clasificadas = {};

for (let i = 0; i < tracks.length; i++) {
  const genero = tracks[i].genre;

  // Hacemos que, si nos e ha creado ya la clave y el array, se cree
  if (!clasificadas[genero]) {
    clasificadas[genero] = [];
  }

  // Añadimos la canción
  clasificadas[genero].push(tracks[i].title);
}
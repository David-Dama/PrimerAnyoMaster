/*Buscar la palabra más larga: Completa la función que tomando un array de
strings como argumento devuelva el más largo, en caso de que dos strings tenga
la misma longitud deberá devolver el primero.*/

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  //Variables
  let palabraMasLarga;
  let numCaracteresPalabraMasLarga = 0;

  //Hacemos un for-each para recorrer todo el grupo
  //No ponemos un igual ya que queremos el primero que sale si hay mismo numero
  //de caracteres, en caso de que queramos el ultimo ponemos un =
  stringList.forEach((avenger) => {
    let numCaracteresPalabra = avenger.length;

    //Si es más larga que la anterior, reescribimos las variables
    if (numCaracteresPalabra > numCaracteresPalabraMasLarga) {
      numCaracteresPalabraMasLarga = numCaracteresPalabra;
      palabraMasLarga = avenger;
    }
  });

  return palabraMasLarga;
}
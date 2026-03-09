/*Crea una función llamada swap que reciba un array y dos parametros que sean
indices del array.

La función deberá intercambiar la posición de los valores de los indices que
hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento
por otro dentro del array.

Retorna el array resultante.*/

let array = [1, 2, 3, 4, 5];

function swap(array, index1, index2) {
  // guardamos temporalmente el valor del primer índice
  const temp = array[index1];

  // ponemos el valor del segundo índice en el primero
  array[index1] = array[index2];

  // ponemos el valor temporal en el segundo índice
  array[index2] = temp;

  // retornamos el array modificado
  return array;
}

console.log(swap(array, 1, 3));

/*Calcular un promedio es una tarea extremadamente común, así que prueba a
implementar esa funcionalidad en la siguiente función.*/

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let totalNotas = 0;

  numberList.forEach((nota) => {
    totalNotas += nota;
  });

  return totalNotas / numberList.length;
}

console.log(average(numbers));

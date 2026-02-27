/*Usa un for para remplazar todas las comidas que no sean veganas con las
frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (const comida of foodSchedule) {
  let contadorFrutasUsadas = 0;

  if (comida.isVegan === false){
    comida.name = fruits[contadorFrutasUsadas++];
    comida.isVegan = true;
  }
}

console.log(foodSchedule);
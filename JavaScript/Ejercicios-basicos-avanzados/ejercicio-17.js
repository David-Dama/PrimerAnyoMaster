/*For...in: Usa un for...in para imprimir por consola los datos del alienígena

Debería tener este formato cada uno de los console.log:
  "La propiedad ____ tiene cómo valor: ____"*/

const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

for (const clave in alien) {
  console.log(`La propiedad ${clave} tiene como valor: ${alien[clave]}`);
}
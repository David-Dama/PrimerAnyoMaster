/*Desarrolla una función que busque en un array de objetos representando
mutantes si existe alguno con un poder específico y retorne un mensaje
indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder.*/

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
  { name: "xd", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  const mutantesEncontrados = [];

  for (const mutante of mutants) {
    if (mutante.power === power) {
      mutantesEncontrados.push(mutante.name);
    }
  }

  if (mutantesEncontrados.length === 0) {
    return "No se encontró ningún mutante con ese poder";
  }

  return `Mutantes encontrados: ${mutantesEncontrados.join(", ")}`;
}

console.log(findMutantByPower(mutants, "steel skin"));

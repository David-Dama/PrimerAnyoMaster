/*Includes: Haz un bucle y muestra por consola todos aquellos valores del array
 que incluyan la palabra "Camiseta".*/

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

products.forEach((product) => {
  if (product.includes("Camiseta")) {
    console.log(product);
  }
});

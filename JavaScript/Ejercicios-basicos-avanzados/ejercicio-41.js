/*Crea una función llamada rollDice() que reciba como parámetro el número de
caras que queramos que tenga el dado que deberá simular el código dentro de la
función.

Que la función use el parámetro para simular una tirada de dado y retornar el
resultado.

Si no se te ocurre como hacer un número aleatorio no te preocupes.
Busca información sobre la función de JavaScript Math.random()*/

function rollDice(numCaras) {
  /*El metodo Math.random genera un número entero desde 0 incluidos hasta 1 sin
  incluir.
  Lo que hacemos es multiplicar ese número por el número de caras -1
  (explicación de xq -1 después)

  Usamos el metodo Math.round que redondea al siguiente número entero siempre.

  Como se dijo antes, Math.random va desde 0 INCLUIDO hasta 1 SIN INCLUIR,
  por lo tanto, si sale 0 sin decimales en ell random, obtendríamos el número
  0, y un dado no tiene el número 0, por lo que sumamos a 1, pero sí usásemos el
  número de caras al multiplicar, iríamos una cara por delante, por lo que
  ponemos numCaras-1*/

  const numeroRandom = Math.round(Math.random() * (numCaras - 1)) + 1;
  console.log(numeroRandom);
}

rollDice(6);

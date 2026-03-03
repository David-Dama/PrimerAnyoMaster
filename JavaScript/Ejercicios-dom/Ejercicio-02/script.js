// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConP = document.createElement("div");
const pDentro = document.createElement("p");

divConP.appendChild(pDentro);
document.body.appendChild(divConP);
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// loop con javascript.
const divCon6P = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  divCon6P.appendChild(p);
}

document.body.appendChild(divCon6P);
// 2.4 Inserta dinamicamente con javascript en un html una p con el
// texto 'Soy dinámico!'.
const pConTexto = document.createElement("p");

pConTexto.textContent = "Soy dinamico!";

document.body.appendChild(pConTexto);
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const cambiarH2 = document.querySelector(".fn-insert-here");

cambiarH2.textContent = "Wubba Lubba dub dub";
// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ulDinamico = document.createElement("ul");
document.body.appendChild(ulDinamico);
for (let i = 0; i < apps.length; i++) {
  const li = document.createElement("li");
  ulDinamico.appendChild(li);
  li.textContent = apps[i];
}
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementosAEliminar = document.querySelectorAll(".fn-remove-me");

for (const elementoAEliminar of elementosAEliminar) {
  elementoAEliminar.remove();
}
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.
const pEnMedio = document.createElement("p");
const divs = document.querySelectorAll("div");

pEnMedio.innerText = "En Medio";
divs[0].after(pEnMedio);
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// .fn-insert-here
const divsConClass = document.querySelector("div.fn-insert-here");
const pEnMedio2 = document.createElement("p");

pEnMedio2.textContent = "Voy dentro";
divsConClass.append(pEnMedio2);

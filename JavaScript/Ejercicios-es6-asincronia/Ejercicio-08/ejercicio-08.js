/*Para obtener los datos con los que jugar necesitaremos estudiar la documentación
de la API y buscar la url necesaria para los datos que queramos, para este paso os
pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url
que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide
siguiente tendréis la url directa de esos datos.

URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters*/
let personajes = [];

fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((data) => {
    personajes.push(...data);

    const select = document.getElementById("character-list");

    for (let personaje of personajes) {
      const opcion = document.createElement("option");

      opcion.innerText = personaje.fullName;

      select.appendChild(opcion);
    }

    const imagen = document.getElementsByClassName("character-image");
    imagen[0].src = personajes[0].imageUrl;

    select.addEventListener("change", () => {
      const personajeSeleccionado = select.value;

      for (let personaje of personajes) {
        if (personajeSeleccionado === personaje.fullName) {
          imagen[0].src = personaje.imageUrl;
        }
      }
      })
  });
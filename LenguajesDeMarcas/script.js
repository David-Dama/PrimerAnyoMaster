const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

// Función para actualizar el carrusel
function updateCarousel(newIndex) {
  const total = slides.length;
  slides.forEach((slide) => {
    slide.classList.remove("active", "left", "right");
    slide.style.display = "none";
    slide.style.transform = "";
  });

  // Índices importantes
  const prevIndex = (newIndex - 1 + total) % total;
  const nextIndex = (newIndex + 1) % total;

  // Slide central
  slides[newIndex].classList.add("active");
  slides[newIndex].style.display = "block";

  // Slides laterales visibles
  slides[prevIndex].classList.add("left");
  slides[prevIndex].style.display = "block";

  slides[nextIndex].classList.add("right");
  slides[nextIndex].style.display = "block";

  current = newIndex;
}

// Botones
nextBtn.addEventListener("click", () => {
  const newIndex = (current + 1) % slides.length;
  updateCarousel(newIndex);
});

prevBtn.addEventListener("click", () => {
  const newIndex = (current - 1 + slides.length) % slides.length;
  updateCarousel(newIndex);
});

// Inicializar
updateCarousel(current);

//Formulario
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function(e) {
  e.preventDefault(); // Evita que la página se recargue

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  alert("Formulario enviado correctamente");

  formulario.reset(); // Limpia el formulario
});
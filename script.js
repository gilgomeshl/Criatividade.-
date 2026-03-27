// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: false,
  mirror: true,
  offset: 120,
  delay: 0,
});

// Typewriter effect para o título inicial
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
  const texto = typewriter.textContent;
  typewriter.textContent = '';
  let i = 0;
  function digitar() {
    if (i < texto.length) {
      typewriter.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 80);
    }
  }
  digitar();
}

// Menu mobile
const burger = document.querySelector(".btn-toggle");
const nav = document.querySelector(".nav");

if (burger) {
  burger.addEventListener("click", () => {
    if (!nav) return;
    nav.classList.toggle("open");
  });
}

// Scroll suave para links de navegação
document.querySelectorAll(".nav a, .contact-btn").forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || !id.startsWith("#")) return;
    event.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    if (nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
    }
  });
});


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
document.addEventListener("DOMContentLoaded", () => {
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

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Scroll suave para links internos
  document.querySelectorAll(".nav a, .contact-btn").forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || !id.startsWith("#")) return;
      event.preventDefault();
      const target = document.querySelector(id);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      if (nav && nav.classList.contains("open")) {
        nav.classList.remove("open");
      }
    });
  });
});

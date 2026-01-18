document.addEventListener("DOMContentLoaded", () => {

  // Fade-in do texto do vídeo
  const heroText = document.querySelector(".hero-overlay");
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(20px)";

    setTimeout(() => {
      heroText.style.transition = "all 1s ease";
      heroText.style.opacity = 1;
      heroText.style.transform = "translateY(0)";
    }, 300);
  }

  // Header aparece suavemente ao rolar
  const header = document.querySelector(".header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }

    header.style.transition = "transform 0.4s ease";
    lastScroll = currentScroll;
  });

});

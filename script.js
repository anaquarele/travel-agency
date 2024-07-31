document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let slideIndex = 0;

  function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".slider").style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }

  document.querySelector(".next").addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlidePosition();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  });

  window.addEventListener("resize", updateSlidePosition); // Ajusta a posição ao redimensionar a janela

  updateSlidePosition(); // Define a posição inicial
});
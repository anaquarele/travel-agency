let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffs  || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.top = '-65px'; // Ajuste a altura conforme necessário
  } else {
    // Scroll up
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});




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
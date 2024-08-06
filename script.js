

/*BARRA SUPERIOR*/
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffs  || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {

    navbar.style.top = '-65px'; 
  } else {

    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});


/*  */

function showContent() {
  document.querySelector('#intro .intro-content').style.opacity = '50';
}


setTimeout(showContent, 50);




/*CARROSSEL DE FOTOS*/

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

  window.addEventListener("resize", updateSlidePosition); 

  updateSlidePosition(); 
});


/*CARDS DE CIDADES*/

function showInfo(element) {
  const info = element.querySelector('.info');
  if (info) {
      info.style.display = 'flex';
  }
}

function hideInfo(element) {
  const info = element.querySelector('.info');
  if (info) {
      info.style.display = 'none';
  }
}





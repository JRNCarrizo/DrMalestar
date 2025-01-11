document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
  item.addEventListener('click', () => {
      const navbarCollapse = document.getElementById('navbarNav');
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
      });
      bsCollapse.hide();
  });
});


fetch('navegador.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navegador').innerHTML = data;
});
fetch('cardPrincipal.html')
.then(response => response.text())
.then(data => {
    document.getElementById('cardPrincipal').innerHTML = data;
});
fetch('cartelera.html')
.then(response => response.text())
.then(data => {
    document.getElementById('cartelera').innerHTML = data;
});
fetch('videos.html')
.then(response => response.text())
.then(data => {
    document.getElementById('videos').innerHTML = data;
});

// carrusel

const carousel = document.querySelector('#customCarousel');
const items = carousel.querySelectorAll('.carousel-item');

carousel.addEventListener('slide.bs.carousel', (event) => {
  const nextIndex = event.to;
  items.forEach((item, index) => {
    const images = item.querySelectorAll('img');
    images.forEach((img) => img.style.transform = 'scale(1)');
    if (index === nextIndex) {
      images[1].style.transform = 'scale(1.2)';
    }
  });
});

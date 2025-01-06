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
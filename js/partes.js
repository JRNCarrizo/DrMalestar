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
fetch('form.html')
.then(response => response.text())
.then(data => {
    document.getElementById('form').innerHTML = data;
});
fetch('final.html')
.then(response => response.text())
.then(data => {
    document.getElementById('final').innerHTML = data;
});
fetch('biografia.html')
.then(response => response.text())
.then(data => {
    document.getElementById('biografia').innerHTML = data;
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

// tamaño de foto al clikear
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src; // Establece la fuente de la imagen modal
    captionText.innerHTML = img.alt; // Agrega el texto alternativo como título
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Oculta el modal
}


// Mail

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


    
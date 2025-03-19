// Header versteckt sich beim Runterscrollen
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Beim Scrollen nach unten: Header ausblenden
    navbar.style.top = "-80px";
  } else {
    // Beim Scrollen nach oben: Header anzeigen
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Fade-In-Effekt für die Kategorien, wenn sie in den Viewport scrollen
document.addEventListener('DOMContentLoaded', function () {
  const categories = document.querySelector('.categories');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        categories.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });
  if (categories) {
    observer.observe(categories);
  }
});

// Dezente Logo-Animation mit Anime.js
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector('.logo');
  logo.addEventListener('mouseenter', function () {
    anime({
      targets: logo,
      scale: [1, 1.1, 1],
      duration: 800,
      easing: 'easeInOutQuad'
    });
  });
});

// Header-Management: Versteckt den Header beim Scrollen nach unten
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Intersection Observer für sanfte Fade-In-Effekte bei Kategorien und Partnern
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.categories, .partners');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => observer.observe(section));
});

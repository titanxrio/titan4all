// Hide navbar on scroll down, show on scroll up
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

// Intersection Observer for smooth fade-in effects
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.categories, .partners, .hero, .product-hero, .titan-intro');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => observer.observe(section));
});

// Advanced Button Hover Animation using Anime.js
document.addEventListener("DOMContentLoaded", function () {
  const ctas = document.querySelectorAll('.cta');
  ctas.forEach(cta => {
    cta.addEventListener('mouseenter', function() {
      anime({
        targets: cta,
        scale: [1, 1.1, 1],
        duration: 800,
        easing: 'easeInOutQuad'
      });
    });
  });
});

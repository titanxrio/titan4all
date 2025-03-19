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

// Intersection Observer for fade-in effects on sections
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.hero, .categories, .partners, .product-hero, .titan-intro');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => observer.observe(section));
});

// Advanced Button Animations using Anime.js for multiple variants
document.addEventListener("DOMContentLoaded", function () {
  // Hero CTA (Variant 1)
  document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('mouseenter', function() {
      anime({
        targets: button,
        scale: [1, 1.1, 1],
        duration: 800,
        easing: 'easeInOutQuad'
      });
    });
  });
  
  // Product Page Button (Variant 2)
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
      anime({
        targets: button,
        translateY: [-2, 0],
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
  });
  
  // Titan CTA-alt (Variant 3)
  document.querySelectorAll('.cta-alt').forEach(button => {
    button.addEventListener('mouseenter', function() {
      anime({
        targets: button,
        rotate: [0, 3, 0],
        duration: 600,
        easing: 'easeInOutSine'
      });
    });
  });
});

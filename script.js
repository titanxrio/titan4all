// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for on-scroll animations
  const animateElements = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.style.opacity = 1;
        entry.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.3 });
  animateElements.forEach(el => observer.observe(el));
});

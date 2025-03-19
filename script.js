// script.js
document.addEventListener('DOMContentLoaded', () => {
  // On-Scroll Animation: Elemente werden sichtbar, wenn sie ins Blickfeld kommen
  const animateElements = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.style.opacity = 1;
        entry.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.3 });
  
  animateElements.forEach(el => observer.observe(el));
});

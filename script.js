// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Beispiel: Man könnte hier weitere dynamische Animationen oder Interaktionen hinzufügen.
  const animElements = document.querySelectorAll('.animate');
  const triggerAnimation = () => {
    animElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.style.animationPlayState = 'running';
      }
    });
  };
  window.addEventListener('scroll', triggerAnimation);
  triggerAnimation();
});

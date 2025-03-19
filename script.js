/* script.js */

// Subtle glitch effect on hover using Anime.js for the logo element
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector('.logo');
  logo.addEventListener('mouseenter', function() {
    anime({
      targets: '.logo',
      translateX: [0, 5, -5, 0],
      duration: 800,
      easing: 'easeInOutSine'
    });
  });
});

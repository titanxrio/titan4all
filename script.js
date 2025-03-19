// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Refined logo animation using Anime.js
  const logo = document.querySelector('.logo');
  logo.addEventListener('mouseenter', function() {
    anime({
      targets: logo,
      scale: [1, 1.1, 1],
      duration: 800,
      easing: 'easeInOutQuad'
    });
  });
});

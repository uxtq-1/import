/* ==================================================================
       Particles.js Configuration for "particles-js" Container
       ================================================================== */
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { 
      value: ["#8A2BE2", "#9370DB", "#BA55D3", "#9932CC", "#8B008B"] // Array of purple shades
    },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: false, anim: { enable: false } },
    size: { value: 3, random: true, anim: { enable: false } },
    line_linked: { enable: true, distance: 150, color: "#00ffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 3, direction: 'none', random: false, straight: false, out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 } }
  },
  custom: {
    text: "Welcome to your Future Growth with Remote Assistance", // Custom text (if used)
    clickToContinue: "Click to Continue" // Custom button text (if used)
  }
});

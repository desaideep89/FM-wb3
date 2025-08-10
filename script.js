// Parallax scrolling for hero layers
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.querySelectorAll('.hero img.layer').forEach(layer => {
    const speed = parseFloat(layer.getAttribute('data-parallax')) || 0;
    layer.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

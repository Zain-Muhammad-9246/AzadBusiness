// Smooth fade-in on scroll
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Smooth scroll for Shop Now button
document.getElementById('shopBtn').addEventListener('click', () => {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

console.log("Azad Business - Phase 2 ready!");

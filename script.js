// Fade-in sections
const sections = document.querySelectorAll('.fade-section, .product-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Smooth scroll for "Shop Now" button
document.getElementById('shopBtn').addEventListener('click', () => {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

console.log("Azad Business - Phase 3 (Dark mode + animations) loaded!");

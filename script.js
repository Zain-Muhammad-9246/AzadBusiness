// Fade-in on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTop';
scrollTopBtn.innerHTML = '↑';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll to Products when clicking "Shop Now"
document.getElementById('shopBtn').addEventListener('click', () => {
  document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});

// Fake contact form handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully! (This is just a demo)');
});

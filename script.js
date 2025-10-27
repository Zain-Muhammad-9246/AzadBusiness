// THEME TOGGLE
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// SHOP NOW SCROLL
function scrollToProducts() {
  document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
}

// FADE-IN SECTIONS
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

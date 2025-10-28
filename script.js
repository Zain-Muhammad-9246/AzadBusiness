// Loading animation
window.addEventListener('load', function() {
  const loading = document.getElementById('loading');
  setTimeout(() => {
    loading.classList.add('hidden');
  }, 1000);
});

// THEME TOGGLE
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  // Save theme preference to localStorage
  const isDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkMode);
});

// Check for saved theme preference
window.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    document.body.classList.add("dark");
  }
});

// SCROLL FUNCTIONS
function scrollToServices() {
  document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}

// FADE-IN SECTIONS
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(element => observer.observe(element));

// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Google Analytics (Optional - add your tracking ID)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Replace with your tracking ID
// Mobile & Tablet Scroll-to-Hide Header
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

function handleScroll() {
    // Only apply on mobile/tablet (screen width <= 1024px)
    if (window.innerWidth <= 1024) {
        const currentScrollY = window.scrollY;
        
        // Show header when scrolling up, hide when scrolling down
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling DOWN - hide header
            header.classList.add('hidden');
        } else {
            // Scrolling UP - show header
            header.classList.remove('hidden');
        }
        
        lastScrollY = currentScrollY;
        
        // Always show header when at top of page
        if (window.scrollY === 0) {
            header.classList.remove('hidden');
        }
    } else {
        // On desktop, ensure header is always visible
        header.classList.remove('hidden');
    }
}

window.addEventListener('scroll', handleScroll);

// Also handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
        header.classList.remove('hidden');
    }
});
// === THEME TOGGLE ===
const themeBtn = document.querySelector(".theme-btn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDarkMode = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDarkMode);
  });
}

// Check for saved theme preference
window.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    document.body.classList.add("dark");
  }
});

// === LOGIN FUNCTIONALITY ===
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Simple demo authentication
  if ((email === 'demo@azadbusiness.com' && password === 'demo123') || email) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userEmail', email);
    window.location.href = 'home.html';
  } else {
    alert('Invalid credentials. Use demo@azadbusiness.com / demo123 for demo access.');
  }
});

// === AUTH CHECK ===
function checkAuth() {
  // Don't check auth on login page
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    return;
  }
  
  if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'index.html';
    return;
  }
}

// === LOGOUT FUNCTION ===
function logout() {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('userEmail');
  window.location.href = 'index.html';
}

// === INITIALIZE ===
document.addEventListener('DOMContentLoaded', function() {
  checkAuth();
  
  // Update welcome message
  const userWelcome = document.querySelector('.user-welcome');
  if (userWelcome) {
    const userEmail = localStorage.getItem('userEmail') || 'Client';
    userWelcome.textContent = `Welcome, ${userEmail.split('@')[0]}!`;
  }
  
  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'home.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// === SCROLL FUNCTIONS ===
function scrollToServices() {
  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
}

// === FADE-IN SECTIONS ===
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(element => observer.observe(element));

// === SMOOTH SCROLLING ===
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    // Only prevent default for same-page anchors
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
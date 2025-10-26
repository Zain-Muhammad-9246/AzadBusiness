// ===== DARK MODE TOGGLE =====
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ===== FADE-IN ANIMATION ON SCROLL =====
const fadeSections = document.querySelectorAll('.fade-section, .product-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeSections.forEach(section => observer.observe(section));

// ===== SMOOTH SCROLL FROM "SHOP NOW" BUTTON =====
const shopNowBtn = document.querySelector('.hero button');
if (shopNowBtn) {
  shopNowBtn.addEventListener('click', () => {
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== CONTACT FORM HANDLER =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mdkpkenn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject)
      });

      if (response.ok) {
        alert("✅ Message sent successfully! We'll reply soon.");
        contactForm.reset();
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Network error. Check your connection and try again.");
    }
  });
}

console.log("Azad Business website loaded successfully!");

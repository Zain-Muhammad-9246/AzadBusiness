// ===== DARK MODE TOGGLE =====
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ===== FADE-IN ANIMATION =====
const fadeElements = document.querySelectorAll('.fade-section, .product-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

// ===== SHOP NOW BUTTON SCROLL =====
function scrollToProducts() {
  document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
}

// ===== CONTACT FORM =====
const contactForm = document.querySelector('.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formObj = Object.fromEntries(formData.entries());

    try{
      const response = await fetch("https://formspree.io/f/mdkpkenn",{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(formObj)
      });
      if(response.ok){
        alert("✅ Message sent successfully!");
        contactForm.reset();
      } else {
        alert("⚠️ Something went wrong, try again.");
      }
    }catch(err){
      alert("⚠️ Network error, try again.");
      console.error(err);
    }
  });
}

console.log("Azad Business website loaded successfully!");

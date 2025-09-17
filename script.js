// ---------------------------
// Mobile Menu Toggle
// ---------------------------
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// ---------------------------
// Smooth Scroll for Nav Links
// ---------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Close mobile menu after clicking
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
    }
  });
});

// ---------------------------
// Contact Form Validation
// ---------------------------
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const message = contactForm.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields!');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Message sent successfully! (Demo only, no backend attached)');
  contactForm.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const fullDesc = productCard.querySelector('.full-desc');
    const shortDesc = productCard.querySelector('.short-desc');

    if (fullDesc.style.display === 'block') {
      fullDesc.style.display = 'none';
      button.textContent = 'Read More';
    } else {
      fullDesc.style.display = 'block';
      button.textContent = 'Read Less';
    }
  });
});
// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========== MOBILE MENU ==========
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuDropdown = document.getElementById('mobileMenuDropdown');

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = mobileMenuDropdown.classList.contains('active');
  const icon = mobileMenuBtn.querySelector('i');
  
  if (!isOpen) {
    mobileMenuDropdown.classList.add('active');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  const icon = mobileMenuBtn.querySelector('i');
  mobileMenuDropdown.classList.remove('active');
  icon.classList.remove('fa-times');
  icon.classList.add('fa-bars');
}

// ========== SCROLL REVEAL ANIMATION ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in to section elements
  const elementsToAnimate = document.querySelectorAll(
    '.section-header, .category-card, .product-card, .story-grid, .testimonial-card, .newsletter-content'
  );

  elementsToAnimate.forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(el);
  });
});

// ========== WISHLIST TOGGLE ==========
document.querySelectorAll('.wishlist-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const icon = btn.querySelector('i');
    if (icon.classList.contains('far')) {
      icon.classList.remove('far');
      icon.classList.add('fas');
      icon.style.color = '#D17147';
    } else {
      icon.classList.remove('fas');
      icon.classList.add('far');
      icon.style.color = '';
    }
  });
});

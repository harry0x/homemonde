// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========== MOBILE SIDEBAR ==========
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileSidebar = document.getElementById('mobileSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeSidebar = document.getElementById('closeSidebar');

function openSidebar() {
  mobileSidebar.classList.add('active');
  sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Always ensure main panel is visible first
  showPanel('mainPanel');
}

function closeSidebarMenu() {
  mobileSidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function showPanel(panelId) {
  const panels = document.querySelectorAll('.sidebar-panel');
  panels.forEach(p => p.classList.remove('active'));
  document.getElementById(panelId).classList.add('active');
}

mobileMenuBtn.addEventListener('click', openSidebar);
closeSidebar.addEventListener('click', closeSidebarMenu);
sidebarOverlay.addEventListener('click', closeSidebarMenu);

// Level Navigation Logic
document.querySelectorAll('.trigger-panel').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const targetId = trigger.getAttribute('data-target');
    showPanel(targetId);
  });
});

document.querySelectorAll('.back-header').forEach(back => {
  back.addEventListener('click', () => {
    const backId = back.getAttribute('data-back');
    showPanel(backId);
  });
});

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

// Main JavaScript for Osmena Colleges Website

// DOM Elements
const header = document.getElementById('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const contactForm = document.getElementById('inquiry-form');

// Scroll Event for Header
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  
  // Get all sections
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${sectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });
});

// Handle Contact Form Submission
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value;
    
    // Simple form validation
    if (!name || !email || !interest || !message) {
      alert('Please fill out all fields');
      return;
    }
    
    // Simulate form submission
    alert(`Thank you, ${name}! Your inquiry about the ${interest} program has been received. We will contact you shortly at ${email}.`);
    
    // Reset form
    contactForm.reset();
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animate elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.about-stats, .course-nav, .contact-content');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial styles for animation
document.querySelectorAll('.about-stats, .course-nav, .contact-content').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.5s ease';
});

// Run animation on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);
// Course Navigation JavaScript

// DOM Elements
const courseButtons = document.querySelectorAll('.course-nav-btn');
const courseContents = document.querySelectorAll('.course-content');

// Function to show selected course content
function showCourseContent(courseId) {
  // Hide all course contents
  courseContents.forEach(content => {
    content.classList.remove('active');
  });
  
  // Remove active class from all buttons
  courseButtons.forEach(button => {
    button.classList.remove('active');
  });
  
  // Show selected course content
  const selectedContent = document.getElementById(courseId);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }
  
  // Add active class to clicked button
  const activeButton = document.querySelector(`[data-target="${courseId}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

// Add click event listeners to course buttons
courseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const courseId = button.getAttribute('data-target');
    showCourseContent(courseId);
    
    // Scroll to course details section
    const courseDetailsSection = document.querySelector('.course-details');
    if (courseDetailsSection) {
      window.scrollTo({
        top: courseDetailsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Handle direct links to course sections
window.addEventListener('load', () => {
  // Check if URL has a hash
  const hash = window.location.hash;
  if (hash && hash.startsWith('#')) {
    const courseId = hash.substring(1);
    const validCourseIds = ['criminology', 'computer-science', 'secondary-education', 
                           'elementary-education', 'business-admin', 'management-accountancy', 'hospitality'];
    
    if (validCourseIds.includes(courseId)) {
      showCourseContent(courseId);
      
      // Scroll to course details after a short delay
      setTimeout(() => {
        const courseDetailsSection = document.querySelector('.course-details');
        if (courseDetailsSection) {
          window.scrollTo({
            top: courseDetailsSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }
});

// Initialize with the first course displayed
document.addEventListener('DOMContentLoaded', () => {
  // Get the first course button and simulate a click
  const firstCourseButton = document.querySelector('.course-nav-btn');
  if (firstCourseButton) {
    firstCourseButton.classList.add('active');
    const firstCourseId = firstCourseButton.getAttribute('data-target');
    showCourseContent(firstCourseId);
  }
});
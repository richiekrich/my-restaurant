document.addEventListener('DOMContentLoaded', function() {
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
    );
  }

  // Function to handle scroll events
  function handleScroll() {
    const container = document.querySelector('.container');
    const announcementBox = document.querySelector('.announcement-box');
    
    if (isInViewport(announcementBox)) {
      announcementBox.classList.add('visible');
    }
    
    if (isInViewport(container)) {
      container.classList.add('visible');
    }
  }

  // Add scroll listener
  window.addEventListener('scroll', handleScroll);
  
  // Check on initial load too
  handleScroll();
  
  // Re-check on window resize
  window.addEventListener('resize', handleScroll);
});
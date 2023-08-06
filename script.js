document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        const targetSectionId = link.getAttribute('data-target');
        const targetSection = document.querySelector(targetSectionId);
  
        if (targetSection) {
          // Scroll to the target section smoothly
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });

  function togglePopup(projectIndex) {
    const popup = document.getElementById(`popup-${projectIndex}`);
    popup.classList.toggle('show');
  }


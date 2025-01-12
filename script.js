document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("[data-target]");
    const allSections = document.querySelectorAll("section");
  
    // Standardmäßig die "start"-Section aktivieren
    const defaultSectionId = "start"; 
    const defaultSection = document.getElementById(defaultSectionId);
    
    if (defaultSection) {
      defaultSection.classList.add("active"); // Start-Section aktivieren
    }
  
    // Event-Listener für Navigation
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("data-target");
  
        if (targetId) {
          // Alle Sections deaktivieren
          allSections.forEach(section => {
            section.classList.remove("active");
          });
  
          // Zielsection aktivieren
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.classList.add("active"); // Zielsection aktivieren
          }
        }
      });
    });
  });
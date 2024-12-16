function showSection(sectionId) {
    // Alle Sections ausblenden
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Die gewünschte Section einblenden
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Wählt alle Navigationslinks und den dynamischen Content-Bereich aus
const navLinks = document.querySelectorAll('.section-link');
const sections = document.querySelectorAll('.content-section');

// Funktion zum Anzeigen der entsprechenden Section
function showSection(sectionId) {
    sections.forEach((section) => {
        if (section.id === sectionId) {
            section.style.display = 'block';
            section.style.opacity = '1';
            section.style.visibility = 'visible';
        } else {
            section.style.display = 'none';
            section.style.opacity = '0';
            section.style.visibility = 'hidden';
        }
    });
}

// Event-Listener für alle Links in der Navigation
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Verhindert den Seitenreload
        const targetSection = link.getAttribute('data-section'); // Holen des Section-IDs
        showSection(targetSection); // Zeigt die gewünschte Section
    });
});

// Zeige standardmäßig die erste Section
showSection('home');

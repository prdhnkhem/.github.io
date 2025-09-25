document.addEventListener('DOMContentLoaded', function() {
    // --- Dynamic Dateline and Copyright Year ---
    const datelineElement = document.getElementById('dateline');
    if (datelineElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);
        datelineElement.textContent = `${formattedDate} | Damak, Nepal`;
    }

    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('is-active');

            // Add a class to body to prevent scrolling when menu is open
            document.body.classList.toggle('no-scroll');

            // Update ARIA attribute for accessibility
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
});

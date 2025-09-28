document.addEventListener('DOMContentLoaded', function() {
    // --- Theme Switcher Logic ---
    const lightModeBtn = document.getElementById('theme-toggle-light');
    const darkModeBtn = document.getElementById('theme-toggle-dark');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Event listeners for theme toggle buttons
    if (lightModeBtn && darkModeBtn) {
        lightModeBtn.addEventListener('click', () => {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        });

        darkModeBtn.addEventListener('click', () => {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        });
    }
    
    // Apply theme on initial load
    applySavedTheme();

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
            document.body.classList.toggle('no-scroll');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
});


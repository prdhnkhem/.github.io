// Hunate Movement - Main JavaScript File

// DOMContentLoaded ensures the script runs after the entire HTML page is loaded.
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the nav overlay
            mobileNav.classList.toggle('active');
            
            // Toggle the hamburger icon animation
            menuToggle.classList.toggle('active');

            // Lock or unlock body scroll
            if (mobileNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }


    // --- FUTURE: Dark Mode Toggle ---
    // The code for dark mode functionality will go here.
    
    console.log("Hunate website scripts loaded and mobile menu is active.");
});

    // 3. Copy to Clipboard functionality
    // We will add code for the contact page's "Copy" buttons here.

    console.log("Hunate website scripts loaded.");
});

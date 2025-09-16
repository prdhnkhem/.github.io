// Hunate Movement: script.js v4.0

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }

    // --- Language Switcher Logic (No changes, but included for completeness) ---
    const langSwitcher = document.getElementById('lang-switcher');
    const langSwitcherMobile = document.getElementById('lang-switcher-mobile');

    const switchLanguage = function(e) {
        e.preventDefault();
        const currentPath = window.location.pathname.split('/').pop();
        let newPath;

        if (currentPath.includes('-ne.html')) {
            newPath = currentPath.replace('-ne.html', '.html');
        } else {
            newPath = currentPath.replace('.html', '-ne.html');
        }
        window.location.href = newPath;
    };

    if (langSwitcher) {
        langSwitcher.addEventListener('click', switchLanguage);
    }
    if (langSwitcherMobile) {
        langSwitcherMobile.addEventListener('click', switchLanguage);
    }
});

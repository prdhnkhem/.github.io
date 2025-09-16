// Hunate Movement: script.js v2.0

document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.getElementById('lang-switcher');

    if (langSwitcher) {
        langSwitcher.addEventListener('click', function(e) {
            e.preventDefault();
            
            const currentPath = window.location.pathname.split('/').pop(); // Gets the filename e.g., "index.html"
            let newPath;

            if (currentPath.includes('-ne.html')) {
                // It's a Nepali page, switch to English
                newPath = currentPath.replace('-ne.html', '.html');
            } else {
                // It's an English page, switch to Nepali
                newPath = currentPath.replace('.html', '-ne.html');
            }
            
            window.location.href = newPath;
        });
    }
});

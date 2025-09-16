// Hunate Movement: script.js v1.0

document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.getElementById('lang-switcher');

    if (langSwitcher) {
        langSwitcher.addEventListener('click', function(e) {
            e.preventDefault();
            
            const currentPath = window.location.pathname;
            const isNepali = currentPath.includes('-ne.html');
            let newPath;

            // Handle the root homepage cases first
            if (currentPath.endsWith('/') || currentPath.endsWith('/index.html')) {
                newPath = '/index-ne.html';
            } else if (currentPath.endsWith('/index-ne.html')) {
                newPath = '/index.html';
            } else if (isNepali) {
                // If it's any other Nepali page, switch to English
                newPath = currentPath.replace('-ne.html', '.html');
            } else {
                // If it's any other English page, switch to Nepali
                newPath = currentPath.replace('.html', '-ne.html');
            }
            
            window.location.href = newPath;
        });
    }
})

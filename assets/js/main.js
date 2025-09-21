document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle Functionality
    const themeToggleButton = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });


    // Sub-Menu Toggle for Mobile
    const submenuItems = document.querySelectorAll('.has-submenu');

    submenuItems.forEach((item) => {
        const link = item.querySelector('a');
        link.addEventListener('click', (event) => {
            // Check if the window width is for mobile view
            if (window.innerWidth < 992) {
                // Prevent link from navigating on first click
                event.preventDefault();
                
                // Toggle the 'submenu-open' class on the parent li
                item.classList.toggle('submenu-open');
                
                // Close other open submenus
                submenuItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('submenu-open');
                    }
                });
            }
        });
    });

    // Close submenus if clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.has-submenu')) {
            submenuItems.forEach((item) => {
                item.classList.remove('submenu-open');
            });
        }
    });

});

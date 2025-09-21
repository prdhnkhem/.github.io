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


    // Sub-Menu Toggle for Mobile with "Tap Again to Go" logic
    const submenuItems = document.querySelectorAll('.has-submenu');

    submenuItems.forEach((item) => {
        const link = item.querySelector('a');
        link.addEventListener('click', (event) => {
            // Only apply this logic on mobile screen widths
            if (window.innerWidth < 992) {
                const isSubmenuOpen = item.classList.contains('submenu-open');

                // If the submenu is NOT already open...
                if (!isSubmenuOpen) {
                    // ...prevent the link from navigating.
                    event.preventDefault();

                    // First, close any other submenus that might be open.
                    submenuItems.forEach((otherItem) => {
                        otherItem.classList.remove('submenu-open');
                    });

                    // Then, open the clicked submenu.
                    item.classList.add('submenu-open');
                }
                // If the submenu IS already open, this code block is skipped, 
                // and the link's default navigation will proceed as normal on the second tap.
            }
        });
    });

    // Close all open submenus if the user clicks anywhere else on the page
    document.addEventListener('click', (event) => {
        // Check if the click was outside of a submenu item
        if (!event.target.closest('.has-submenu')) {
            submenuItems.forEach((item) => {
                item.classList.remove('submenu-open');
            });
        }
    });

});

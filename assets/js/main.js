document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle Functionality
    const themeToggleButton = document.getElementById('dark-mode-toggle');
    if (themeToggleButton) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            let theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
    }

    // Mobile Menu Functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            document.body.classList.toggle('mobile-menu-open');
        });
    }

    // Sub-Menu Toggle for Mobile
    const submenuItems = document.querySelectorAll('.has-submenu > a');
    submenuItems.forEach((link) => {
        link.addEventListener('click', (event) => {
            if (window.innerWidth < 992) {
                const parentLi = link.parentElement;
                const isSubmenuOpen = parentLi.classList.contains('submenu-open');
                
                // Close all other submenus
                document.querySelectorAll('.has-submenu').forEach(item => {
                    if (item !== parentLi) item.classList.remove('submenu-open');
                });

                // Toggle the clicked submenu
                parentLi.classList.toggle('submenu-open');

                // Prevent navigation only if a submenu exists and is being opened
                if (parentLi.querySelector('.submenu') && !isSubmenuOpen) {
                    event.preventDefault();
                }
            }
        });
    });

    // Copy to Clipboard Functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.clipboardTarget;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                navigator.clipboard.writeText(targetElement.innerText.trim()).then(() => {
                    button.textContent = 'Copied!';
                    button.classList.add('copied');
                    setTimeout(() => {
                        button.textContent = 'Copy';
                        button.classList.remove('copied');
                    }, 2000);
                });
            }
        });
    });
});

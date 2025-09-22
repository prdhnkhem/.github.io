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
            if (window.innerWidth < 992) {
                const isSubmenuOpen = item.classList.contains('submenu-open');
                if (!isSubmenuOpen) {
                    event.preventDefault();
                    submenuItems.forEach((otherItem) => {
                        otherItem.classList.remove('submenu-open');
                    });
                    item.classList.add('submenu-open');
                }
            }
        });
    });

    // Close all open submenus if the user clicks anywhere else
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.has-submenu')) {
            submenuItems.forEach((item) => {
                item.classList.remove('submenu-open');
            });
        }
    });

    // Copy to Clipboard Functionality for Contact Page
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.clipboardTarget;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                navigator.clipboard.writeText(targetElement.innerText).then(() => {
                    button.textContent = 'Copied!';
                    button.classList.add('copied');
                    setTimeout(() => {
                        button.textContent = 'Copy';
                        button.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
        });
    });

});

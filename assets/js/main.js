document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const themeToggleButton = document.getElementById('dark-mode-toggle');
    if (themeToggleButton) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            document.body.classList.toggle('mobile-menu-open');
        });
    }

    // Mobile Sub-menu Logic
    const submenuLinks = document.querySelectorAll('.main-navigation .has-submenu > a');
    submenuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (window.innerWidth < 1024) {
                const parentLi = link.parentElement;
                const isSubmenuOpen = parentLi.classList.contains('submenu-open');
                
                // If a submenu exists and it's not already open, prevent navigation and open it.
                if (parentLi.querySelector('.submenu') && !isSubmenuOpen) {
                    event.preventDefault();
                    
                    // Close any other submenus that might be open.
                    document.querySelectorAll('.main-navigation .has-submenu.submenu-open').forEach(openLi => {
                        if(openLi !== parentLi) {
                           openLi.classList.remove('submenu-open');
                        }
                    });
                    
                    // Toggle the clicked submenu.
                    parentLi.classList.add('submenu-open');
                }
                // If the submenu is already open, the link will navigate as normal on the second tap.
                // If there's no submenu, it will also navigate as normal.
            }
        });
    });

    // Copy to Clipboard
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSelector = button.dataset.clipboardTarget;
            const targetElement = document.querySelector(targetSelector);
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

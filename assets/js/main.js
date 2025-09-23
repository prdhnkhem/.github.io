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
    const mainNav = document.getElementById('main-navigation');
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            document.body.classList.toggle('mobile-menu-open');
        });
    }

    // Mobile Sub-menu Logic
    const submenuLinks = document.querySelectorAll('.has-submenu > a');
    submenuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (window.innerWidth < 1024) {
                const parentLi = link.parentElement;
                if (!parentLi.classList.contains('submenu-open')) {
                    event.preventDefault();
                    // Close other open submenus first
                    document.querySelectorAll('.has-submenu.submenu-open').forEach(openLi => {
                        if(openLi !== parentLi) {
                           openLi.classList.remove('submenu-open');
                        }
                    });
                    parentLi.classList.add('submenu-open');
                }
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

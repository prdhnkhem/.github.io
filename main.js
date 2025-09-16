// Mobile Navigation Script
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.mobile-nav-close');

if (hamburger && mobileNav && closeBtn) {
    hamburger.addEventListener('click', () => { mobileNav.classList.add('mobile-nav-active'); });
    closeBtn.addEventListener('click', () => { mobileNav.classList.remove('mobile-nav-active'); });
    
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => { mobileNav.classList.remove('mobile-nav-active'); });
    });
}

// Accordion Script for Philosophy Page
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    if (header && content) { // Check if elements exist before adding listener
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});

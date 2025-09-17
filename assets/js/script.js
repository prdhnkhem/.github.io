/* --- Show/Hide Nav Menu on Scroll --- */
const navMenu = document.getElementById('nav-menu');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.innerWidth < 767) {
        if (lastScrollY < window.scrollY) {
            navMenu.style.bottom = '-100%';
        } else {
            navMenu.style.bottom = '1rem';
        }
        lastScrollY = window.scrollY;
    }
});


/* --- Header Shadow on Scroll --- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});

/* --- Active Nav Link on Scroll --- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        const correspondingNavLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (correspondingNavLink) {
                correspondingNavLink.classList.add('active-link');
            }
        } else {
            if (correspondingNavLink) {
                correspondingNavLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);


/* --- Dark/Light Theme Toggle --- */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/* --- Accordion Functionality --- */
const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion__header');
    
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        
        toggleItem(item);

        if(openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.accordion__content');

    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
};

/* --- Copy to Clipboard Functionality --- */
function copyToClipboard(text, tooltipId) {
  navigator.clipboard.writeText(text).then(() => {
    const tooltip = document.getElementById(tooltipId);
    tooltip.innerHTML = tooltip.getAttribute('data-success');
    setTimeout(() => {
      tooltip.innerHTML = tooltip.getAttribute('data-original');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const copyAccBtn = document.getElementById('copy-acc-btn');
    if (copyAccBtn) {
        copyAccBtn.addEventListener('click', () => {
            const accNumber = document.getElementById('acc-number').innerText;
            copyToClipboard(accNumber, 'copyAccTooltip');
        });
    }

    const copyEmailBtn = document.getElementById('copy-email-btn');
    if(copyEmailBtn){
        copyEmailBtn.addEventListener('click', () => {
            const email = document.getElementById('email-address').innerText;
            copyToClipboard(email, 'copyEmailTooltip');
        });
    }
});

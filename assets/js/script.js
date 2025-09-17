/* --- Mobile Menu Functionality --- */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* --- Header Shadow on Scroll --- */
const header = document.getElementById('header');
if(header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    });
}


/* --- Dark/Light Theme Toggle --- */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
}

if(themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme);
        localStorage.setItem('selected-theme', getCurrentTheme());
    });
}

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
        accordionContent.style.height = 0;
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
};


/* --- Copy to Clipboard Functionality --- */
function copyToClipboard(text, buttonId) {
  navigator.clipboard.writeText(text).then(() => {
    const button = document.getElementById(buttonId);
    const originalText = button.innerHTML;
    button.innerText = 'Copied!';
    setTimeout(() => {
      button.innerHTML = originalText;
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
            copyToClipboard(accNumber, 'copy-acc-btn');
        });
    }
});

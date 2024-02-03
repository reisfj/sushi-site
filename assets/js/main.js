/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

// Menu show

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Menu hidden

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // Closes menu when clicking on a menu element
  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction)); // Parei em 22:09

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)
/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

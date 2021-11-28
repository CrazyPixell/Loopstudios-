'use strict';

const mobileNav = document.querySelector('.mobile-nav__list');
const btnMobile = document.querySelector('.mobile-nav__btn');

btnMobile.addEventListener('click', function () {
  mobileNav.style.visibility === 'hidden'
    ? (mobileNav.style.visibility = 'visible')
    : (mobileNav.style.visibility = 'hidden');
});

//@ts-check

const menu = document.querySelector('.header--nav');
const menuBtn = document.querySelector('.header--menu-icon');
const closeMenuBtn = document.querySelector('.header--close-icon');

menuBtn.addEventListener('click', toggleNav);
closeMenuBtn.addEventListener('click', toggleNav)

function toggleNav(){
    menu.classList.toggle('header--nav-active')
    menuBtn.classList.toggle('header--menu-icon-desactive')
    closeMenuBtn.classList.toggle('header--close-icon-active')

}


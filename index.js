
const mobileBtn = document.getElementById('mobile-cta')
var nav = document.querySelector('nav')
var mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})
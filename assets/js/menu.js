const menu = document.getElementById('navbar-container');
const menuButton = document.getElementById('menu-button');
const menuCloseButton = document.getElementById('menu-close-button');
const header = document.getElementsByTagName('header');
let yOffset = menu.offsetHeight + header[0].offsetHeight;
menu.style.transform = `translateY(-${yOffset}px)`;

window.addEventListener('resize', () => {
    yOffset = menu.offsetHeight + header[0].offsetHeight;
    menu.style.transform = `translateY(-${yOffset}px)`;
})

menuButton.addEventListener('click', () => {
    menuButton.style.display = 'none'
    menuCloseButton.style.display = 'block'
    menu.style.transform = `translateY(${header[0].offsetHeight}px)`;
});

menuCloseButton.addEventListener('click', () => {
    menuCloseButton.style.display = 'none'
    menuButton.style.display = 'block'
    menu.style.transform = `translateY(-${yOffset}px)`;
});
const menu = document.getElementById('navbar-container');
const menuButton = document.getElementById('menu-control');
const menuCloseIcon = document.getElementById('menu-close-icon');
const menuOpenIcon = document.getElementById('menu-open-icon');
const header = document.getElementsByTagName('header');
let yOffset = menu.offsetHeight + header[0].offsetHeight;
let menuShown = false;

menu.style.transform = `translateY(-${yOffset}px)`;

window.addEventListener('resize', () => {
    yOffset = menu.offsetHeight + header[0].offsetHeight;
    menu.style.transform = `translateY(-${yOffset}px)`;
    toggleMenu(menuShown = true)
})

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuShown = !menuShown
    if (menuShown) {
        menuOpenIcon.style.display = 'none'
        menuCloseIcon.style.display = 'block'
        menu.style.transform = `translateY(${header[0].offsetHeight}px)`;
    } else {
        menuCloseIcon.style.display = 'none'
        menuOpenIcon.style.display = 'block'
        menu.style.transform = `translateY(-${yOffset}px)`;
    }
}
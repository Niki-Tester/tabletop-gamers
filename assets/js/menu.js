const menu = document.getElementById('navbar-container');
const menuButton = document.getElementById('menu-button');
const menuCloseButton = document.getElementById('menu-close-button');

menu.style.transform = "translateY(-300px)";

menuButton.addEventListener('click', () => {
    menuButton.style.display = 'none'
    menuCloseButton.style.display = 'block'
    menu.style.transform = "translateY(56px)";
});

menuCloseButton.addEventListener('click', () => {
    menuCloseButton.style.display = 'none'
    menuButton.style.display = 'block'
    menu.style.transform = "translateY(-227px)";
});
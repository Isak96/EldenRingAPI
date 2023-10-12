
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const menuButton = document.getElementById('menu-button');

hamburger.addEventListener('click', () => {
    sidebar.style.left = '0';
    menuButton.style.display = 'block';
});

menuButton.addEventListener('click', () => {
    sidebar.style.left = '-250px';
    menuButton.style.display = 'none';
});
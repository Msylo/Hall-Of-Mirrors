const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu');

function toggleNavbar() {
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

document.querySelector('.toggle-btn').addEventListener('click', function () {
    toggleNavbar();
});
const mobileMenu = document.getElementById('mobile-navbar');
const menu = document.querySelector('.navbar-menu');
const links = document.querySelectorAll('.navbar-menu-link')

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('is-active')
    menu.classList.toggle('active')
})

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        mobileMenu.classList.remove('is-active');
        menu.classList.remove('active');
    });
});
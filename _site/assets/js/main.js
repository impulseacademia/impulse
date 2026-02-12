// Aparece background no menu
const menu = document.getElementById('navbar');
    const banner = document.getElementById('banner');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
        menu.classList.add('scrolled');
        } else {
        menu.classList.remove('scrolled');
        }
});

// Fecha menu responsivo quando clicado
document.querySelectorAll('.offcanvas .nav-link').forEach(link => {
  link.addEventListener('click', function () {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvas.hide();
  });
});

// Carrega efeitos
AOS.init({
    duration: 1000,
    once: true
});
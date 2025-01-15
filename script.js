let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Highlight menu links on scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Perbaikan selektor
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle class untuk ikon
    navbar.classList.toggle('active'); // Toggle class untuk menu
    console.log('Menu toggled:', navbar.classList.contains('active')); // Debugging
};

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah reload halaman
    alert('Message sent successfully!');
});

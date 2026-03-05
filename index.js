// Navbar color change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(175, 87, 87, 0.9)'; // Semi-transparent when scrolled
        header.style.backdropFilter = 'blur(10px)'; // Add blur effect
    } else {
        header.style.background = '#d8d7d7'; // Original color
        header.style.backdropFilter = 'none';
    }
}); 
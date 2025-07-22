document.addEventListener("DOMContentLoaded", () => {
    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
            header.style.transform = 'translateY(0)';
        } else {
            header.style.transform = 'translateY(-65px)';
        }

        prevScrollPos = currentScrollPos;
    });
});

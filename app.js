const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const links = document.querySelectorAll('nav ul li');
    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');
        // Animate links
        links.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
        // Animate burger
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Show hide navbar when scrolling
let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos){
        document.querySelector('nav').style.top = '0';
    } else {
        document.querySelector('nav').style.top = '-58px';
    }
    prevScrollPos = currentScrollPos;
}

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

//Show course content
const itContent = document.querySelector('.it-career-switch');
const codecademyContent = document.querySelector('.codecademy');
const nearContent = document.querySelector('.near');
const itBtn = document.querySelector('.it-career-switch-btn');
const codecademyBtn = document.querySelector('.codecademy-btn');
const nearBtn = document.querySelector('.near-btn');

const showHideCourse = (hideBtn1, hideBtn2, showBtn, hide1, hide2, show) => {
    hideBtn1.classList.remove('btn-active');
    hideBtn2.classList.remove('btn-active');
    showBtn.classList.add('btn-active');
    hide1.classList.remove('course-description-active');
    hide1.classList.add('course-description-inactive');
    hide2.classList.remove('course-description-active');
    hide1.classList.add('course-description-inactive');
    show.classList.remove('course-description-inactive');
    show.classList.add('course-description-active');
}

itBtn.onclick = function() {showHideCourse(codecademyBtn, nearBtn, itBtn, codecademyContent, nearContent, itContent)};
codecademyBtn.onclick = function() {showHideCourse(itBtn, nearBtn, codecademyBtn, itContent, nearContent, codecademyContent)};
nearBtn.onclick = function() {showHideCourse(itBtn, codecademyBtn, nearBtn, itContent, codecademyContent, nearContent)};

const burger = document.querySelector('.burger');
const nav = document.querySelector('.link-list');
const links = document.querySelectorAll('.link');

const navSlide = () => {
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
const styles = getComputedStyle(burger);
links.forEach(link => {
    link.addEventListener('click', () => {
        if (styles.display === 'block'){
            nav.classList.toggle('nav-active');
            links.forEach(link => {
                link.style.animation = '';
            })
            burger.classList.toggle('toggle');
        }
    })
})

// home fade-out
const profileSection = document.getElementById('profile');
const homeSection = document.getElementById('home');
const initialProfileSectionPosition = profileSection.offsetTop;

window.onscroll = () => {
    let profileSectionPosition = profileSection.offsetTop - window.pageYOffset;
    homeSection.style.opacity = 2*profileSectionPosition/initialProfileSectionPosition - 1;
}

// Skills section
$(window).scroll(() => {
    // Distance between top of viewport and top of webpage
    let scrollTop = $(this).scrollTop();
    const plDiv = $('#pl'); // Programming Languages
    const lfDiv = $('#lf'); // Libraries and Frameworks
    const otDiv = $('#ot'); // Other technologies
    const plTitle = $('#pl-title') // Programming languages title
    const lfTitle = $('#lf-title') // Libraries and frameworks title
    const otTitle = $('#ot-title') // Other technologies title
    // Distance between div and top of webpage - scrollTop = distance between div and top of viewport
    const plDivPos = plDiv.offset().top - scrollTop;
    const lfDivPos = lfDiv.offset().top - scrollTop;
    const otDivPos = otDiv.offset().top - scrollTop;
    const plTitlePos = plTitle.offset().top - scrollTop;
    const lfTitlePos = lfTitle.offset().top - scrollTop;
    const otTitlePos = otTitle.offset().top - scrollTop;

    if (lfDivPos > lfTitlePos) {
        $('#pl-title').addClass('highlight-blue');
        $('#lf-title').removeClass('highlight-blue');
        $('#ot-title').removeClass('highlight-blue');

    } else if (otDivPos > otTitlePos) {
        $('#pl-title').removeClass('highlight-blue');
        $('#lf-title').addClass('highlight-blue');
        $('#ot-title').removeClass('highlight-blue');
    } else {
        $('#pl-title').removeClass('highlight-blue');
        $('#lf-title').removeClass('highlight-blue');
        $('#ot-title').addClass('highlight-blue');
    }
    
})
// Showing CV

$('#show-cv').on('click', () => {
    console.log('click');
    window.open('cv.pdf', '_blank', 'fullscreen=yes');
    return false;
})

// projects section

const projects = [
    {
        title: 'Crypto Mall',
        text: 'Buit an E-commerce platform with payment in NEAR (tesnet). Smart contract in Typescript and React in the frontend.',
        image:'./images/crypto-mall.png',
        githubLink:'https://github.com/ap3120/crypto-mall',
        url:'https://crypto-mall.netlify.app', 
    },
    {
        title: 'Company directory',
        text: 'Buit a CRUD application to manage personnel in a company. Implemented routines in PHP in the backend and connected to MySQL database. Used Ajax in the frontend to call the routines. Performed continuous integration with Github workflow.',
        image:'./images/company-dir.png',
        githubLink:'https://github.com/ap3120/',
        url:'https://anthonypou.co.uk/project2/', 
    },
    {
        title: 'Gazetteer',
        text: 'Designed an interactive map providing information about countries and places with Leaflet. Implemented routines in PHP using CURL in the backend and Ajax in the frontend, to retrieve data from third party APIs. Used Bootstrap template in the frontend',
        image:'./images/gazetteer.png',
        githubLink:'https://github.com/ap3120/',
        url:'https://anthonypou.co.uk/project1/', 
    },
    {
        title: 'E commerce app',
        text: 'Designed an E commerce website. Used postgres for the database, Express to build the server and React in the frontend. Managed user registration and sessions using Passport.js and managed app state using Redux.',
        image:'./images/e-commerce.png',
        githubLink:'https://github.com/ap3120/e_commerce_api/',
        url:'https://pern-e-commerce.herokuapp.com/', 
    },
    {
        title:'Reddit clone',
        text:'Created an app to fetch and display reddit posts. Managed components state with Redux. Deployed the application on Netlify.',
        image:'./images/reddit.png',
        githubLink:'https://github.com/ap3120/reddit-clone/',
        url:'http://reddit-clone-22.netlify.app',
    },
    {
        title:'Jammming',
        text:'Used the Spotify API to search artists and songs and create playlists. Deployed the website using Surge.',
        image:'./images/jammming.png',
        githubLink:'https://github.com/ap3120/jamming',
        url:'http://jammingworkshop.surge.sh',
    },
    {
        title:'Web 3.0 Application',
        text:'Designed and deployed a Web 3.0 website able to pair with Metamask, to send Ethereum on the Goerli network and to interact with smart contracts. The smart contracts were tested locally using Hardhat and deployed on Alchemy.',
        image:'./images/ethapp.png',
        githubLink:'https://github.com/ap3120/ethApp',
        url:'https://ethapp.netlify.app/',
    },
    {
        title: 'Sudoku game',
        text:'Created a sudoku game using plain CSS and JavaScript.',
        image:'./images/sudoku.png',
        githubLink:'https://github.com/ap3120/sudoku/',
        url:'https://ap3120.github.io/sudoku/',
    },
    {
        title:'Pancakeswap clone',
        text:'I created this static webpage that replicates the frontend of the Pancakeswap official website when I was learning CSS.',
        image:'./images/pancakeswap.png',
        githubLink:'https://github.com/ap3120/pancakeswap_clone',
        url:'https://ap3120.github.io/pancakeswap_clone/',
    },
];

for (let project of projects){
    const card = document.createElement('div');
    const overlay = document.createElement('div');
    const title = document.createElement('h3');
    const text = document.createElement('p');
    const image = document.createElement('img');
    card.classList.add('project-card');
    overlay.classList.add('overlay');
    title.innerHTML = project.title;
    text.innerHTML = project.text;
    if (project.image.length > 0) {
        const image = document.createElement('img');
        image.classList.add('image');
        image.classList.add('image-blur');
        image.src = project.image;
        card.appendChild(image);
    }
    overlay.appendChild(title);
    overlay.appendChild(text);
    if (project.githubLink.length > 0 || project.url.length > 0) {
        const linksContainer = document.createElement('div');
        if (project.githubLink.length > 0){
            const githubLinkTag = document.createElement('a');
            const githubIcon = document.createElement('i');
            githubLinkTag.href = project.githubLink;
            githubLinkTag.target = '_blank';
            githubIcon.classList.add('fa-brands');
            githubIcon.classList.add('fa-github');
            githubLinkTag.appendChild(githubIcon);
            linksContainer.appendChild(githubLinkTag);
        }
        if (project.url.length > 0) {
            const urlLinkTag = document.createElement('a');
            const urlIcon = document.createElement('i');
            urlLinkTag.href = project.url;
            urlLinkTag.target = '_blank';
            urlIcon.classList.add('fa-solid');
            urlIcon.classList.add('fa-up-right-from-square');
            urlLinkTag.appendChild(urlIcon);
            linksContainer.appendChild(urlLinkTag);
        }
        overlay.appendChild(linksContainer);
    }

    card.appendChild(overlay);
    document.getElementsByClassName('projects-container')[0].appendChild(card);
}

// Submit form
$('#submit').on('click', (e) => {

    e.preventDefault();
    $.ajax({
        url: 'php/mail.php',
        type: 'POST',
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val(),
        },
        success: res => {
            if (res === 'OK') {
                const toast = new bootstrap.Toast($('#success-toast'))
                toast.show();
            } else {
                const toast = new bootstrap.Toast($('#danger-toast'))
                toast.show();
            }
        },
        error: (jqXHR, textStatus, errorThrown) => {
            const toast = new bootstrap.Toast($('#danger-toast'))
            toast.show();
        }
    });
});

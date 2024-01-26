const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }/* else {
            entry.target.classList.remove('show');
        } */ //release this from comments if you want to restart animation on items not in view
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// CHANGE AVATAR PIC WHEN HOVERED

const avatar = document.querySelector('.bigLeo');

avatar.addEventListener('mouseenter', () => {
    avatar.src = 'img/icon.png';
});

avatar.addEventListener('mouseleave', () => {
    avatar.src = 'img/leoNorm.png';
});

// END CHANGE AVATAR


// ARROW ANIMATION SCROLLS TO ABOUT
const arrow = document.getElementById('arrowAnim');
var aboutScroll = document.querySelector('.info');

var Arrowtarget = aboutScroll.offsetTop - 70;

arrow.addEventListener('click', () => {
    window.scrollTo({
        top: Arrowtarget,
        behavior: 'smooth',
    });
});
// END: ARROW SCROLL

// PROJECTS SCROLL
const projectsButton = document.getElementById('work-button');
const projects = document.querySelector('.projects');

var ProjTarget = projects.offsetTop - 60;

projectsButton.addEventListener('click', () => {
    window.scrollTo({
        top: ProjTarget,
        behavior: 'smooth',
    });
});

// END PROJECTS SCROLL

// when scrolled, header gets box-shadow
const navbar = document.getElementById('theNav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled-header')
    } else if (window.scrollY < 50) {
        navbar.classList.remove('scrolled-header')
    }
})


/** This code is unused */



// const observerUp = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('showUp');
//         } else {
//             entry.target.classList.remove('showUp');
//         }
//     });
// });

// const hiddenElementsUpward = document.querySelectorAll('.hiddenUp');
// hiddenElementsUpward.forEach((ell) => observerUp.observe(ell));
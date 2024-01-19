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


// ARROW ANIMATION SCROLLS TO ABOUT
const arrow = document.getElementById('arrowAnim');
var aboutScroll = document.querySelector('.info');

var Arrowtarget = aboutScroll.offsetTop - 50;

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

var ProjTarget = projects.offsetTop - 55;

projectsButton.addEventListener('click', () => {
    window.scrollTo({
        top: ProjTarget,
        behavior: 'smooth',
    });
});

// END PROJECTS SCROLL


/** This code is unused */
const observerUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showUp');
        } else {
            entry.target.classList.remove('showUp');
        }
    });
});

const hiddenElementsUpward = document.querySelectorAll('.hiddenUp');
hiddenElementsUpward.forEach((ell) => observerUp.observe(ell));
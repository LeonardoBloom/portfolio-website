
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
});


let card = document.querySelectorAll(".proj-grid");

// Iterate over each 'proj-grid' element
card.forEach(function(projGrid) {
    // Get all children with the class 'card' within this 'proj-grid' element
    var cards = projGrid.querySelectorAll('.card');

    // Iterate over each 'card' element and assign a random background color
    cards.forEach(function(card) {
        // Generate a random hexadecimal color
        var randomHexColor = getRandomColor();
        // Set the background color of the 'card' element
        card.style.backgroundColor = randomHexColor;
    });
});


function getRandomColor() {
    // Generate random values for red, green, and blue components
    var r = Math.floor(Math.random() * (256 - 100) + 100); // Random integer between 0 and 255
    var g = Math.floor(Math.random() * (256 - 100) + 100);
    var b = Math.floor(Math.random() * (256 - 100) + 100);

    // Convert decimal to hexadecimal
    var rHex = r.toString(16).padStart(2, '0'); // Convert to hexadecimal and pad with zero if necessary
    var gHex = g.toString(16).padStart(2, '0');
    var bHex = b.toString(16).padStart(2, '0');

    // Construct the CSS color string in hexadecimal format
    var color = "#" + rHex + gHex + bHex;

    return color;
}


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
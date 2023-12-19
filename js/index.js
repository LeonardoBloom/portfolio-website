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
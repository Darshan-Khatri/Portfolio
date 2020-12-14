


const home = document.querySelector('.home');
const homeNav = document.querySelector('.homeNav');
const aboutNav = document.querySelector(".aboutNav");
const about = document.querySelector('.about');
const project = document.querySelector('.project');
const projectNav = document.querySelector('.projectNav');
const contact = document.querySelector('.contact');
const contactNav = document.querySelector('.contactNav');



aboutNav.addEventListener('click', () => {
    about.classList.remove("Hide");
    home.classList.add("Hide");
    project.classList.add("Hide");
    contact.classList.add("Hide");
});

homeNav.addEventListener('click', () => {
    about.classList.add("Hide");
    home.classList.remove("Hide");
    project.classList.add("Hide");
    contact.classList.add("Hide");
});


projectNav.addEventListener('click', () => {
    about.classList.add("Hide");
    home.classList.add("Hide");
    project.classList.remove("Hide");
    contact.classList.add("Hide");
});

contactNav.addEventListener('click', () => {
    about.classList.add("Hide");
    home.classList.add("Hide");
    project.classList.add("Hide");
    contact.classList.remove("Hide");
});



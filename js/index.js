

// NAVIGATION OPEN

const butMenuEl = document.querySelector(".nav-menu-but");
const NavEl = document.querySelector("nav .nav-div");

butMenuEl.addEventListener("click", function(){
    NavEl.classList.toggle("menu-open");
});


// FOOTER YEAR 

const yearEl = document.querySelector("#copyright span");
const currentYear=new Date().getFullYear();

yearEl.textContent = currentYear;


// Show the loader
document.querySelector('.loader-container').style.opacity = 1;
document.querySelector('.loader-container').style.pointerEvents = 'all';

// Hide the loader after 5 seconds (or any desired duration)
setTimeout(() => {
    document.querySelector('.loader-container').style.opacity = 0;
    document.querySelector('.loader-container').style.pointerEvents = 'none';
}, 3000); // 5000 milliseconds (5 seconds) in this example

// navigation slider
document.querySelector('.cate-dis').addEventListener('click', function (e) {
e.preventDefault();
// Matching strategy
if (e.target.classList.contains('cates')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth' });
}
});
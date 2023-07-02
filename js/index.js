

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

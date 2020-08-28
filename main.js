const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.navbar-wrapper');
const toTopBtn = document.querySelector('.top-link');
const navLinks = document.querySelector('.links-list');
const container = document.querySelector('.container');

// ********** SET FOOTER DATE ************//

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** SET TOGGLE BTN NAVBAR ************// 

navToggle.addEventListener('click', function(){
    nav.classList.toggle("show-links");
});

// ********** SET FIXED SCROLLING NAVBAR ************//

window.addEventListener('scroll', function(){
    if(window.pageYOffset > nav.getBoundingClientRect().height){
        nav.classList.add("fixed-nav");
    }else {
        nav.classList.remove("fixed-nav");
    }
});

// ********** SET BACK TO TOP BUTTON ************// 

window.addEventListener('scroll', function(){
    if(window.pageYOffset > nav.getBoundingClientRect().height*3){
        toTopBtn.classList.add("show-top-link");
    }else {
        toTopBtn.classList.remove("show-top-link");
    }
});

// ********** SET SMOOTH SCROLL ************// 

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        // Prevent default navigation behavior
            e.preventDefault();
        // Navigate to specific section
            const id = e.currentTarget.getAttribute('href').slice(1); // skip the "#"
            const element = document.getElementById(id);

            // calculate position
            const navHeight = nav.getBoundingClientRect().height;
            const fixedNav = nav.classList.contains("fixed-nav");
            let position = element.offsetTop - navHeight;;
            if(!fixedNav){
                position = position - navHeight;
            }
            // end of calculate position

            window.scrollTo({
                left: 0,
                top: position,
            });
            // close navLinks when scrolling (smaller screens)
            nav.classList.remove("show-links");
    });
});
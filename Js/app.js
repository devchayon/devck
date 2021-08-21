$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotClass: 'dots'
    });


    let hamburger = document.querySelector('.hamburger');
    let cancel = document.querySelector('.cancel');
    let mobileNav = document.querySelector('.mobile-nav');
    let home = document.querySelector('.home');
    let about = document.querySelector('.about');
    let mySkills = document.querySelector('.myskills');
    let works = document.querySelector('.works');
    let blog = document.querySelector('.blog');
    let contact = document.querySelector('.contact');


    hamburger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    cancel.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    home.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    about.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    mySkills.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    works.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    blog.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    contact.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

});
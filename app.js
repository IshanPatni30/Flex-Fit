const menu=document.querySelector("#mobile-menu");
const menuLinks=document.querySelector(".navbar__menu");
const navLogo=document.querySelector("#navbar__logo");
const body=document.querySelector("body");
//Display Mobile menu
const mobileMenu= () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};
menu.addEventListener('click',mobileMenu);
//animations
gsap.registerPlugin(ScrollTrigger);
gsap.from('.an-h',{
    duration:0.6,
    opacity:0,
    y:-150,
    stagger:0.3
});
gsap.from('.an-s',{
   ScrollTrigger:'.an-s',
    duration:5.0,
    opacity:1,
    x:-150,
    stagger:0.12
});
gsap.from('.an-img',{
    ScrollTrigger:'.an-s',
     duration:5.0,
     opacity:0,
     x:-200,
     
 });

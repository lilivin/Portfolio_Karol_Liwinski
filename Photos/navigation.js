const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const body = document.querySelector('.aboutclass');
const aboutMeSection = document.querySelector('.sectionAboutMe');
const contactSection = document.querySelector('.sectionContact');
const myProjectsSection = document.querySelector('.sectionMyProjects');
const mainSiteSection =  document.querySelector('.sectionMainSite');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
    body.classList.toggle('disable');
}

hamburger.addEventListener('click', handleClick);

$('nav div ul li').on('click', function(){
    const goToSection= "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

function closeNavigation(){
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
}

mainSiteSection.addEventListener('click', closeNavigation);
aboutMeSection.addEventListener('click', closeNavigation);
contactSection.addEventListener('click', closeNavigation);
myProjectsSection.addEventListener('click', closeNavigation);
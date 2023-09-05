// mobile nav
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

const header = document.querySelector('.header')
window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 10){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
}

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

var navContact = document.getElementById('nav-contact');
if (navContact) {
    navContact.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        scrollToContact(); // Call the scroll function when the "Contact" link is clicked
    });
}
function scrollToContact() {
  var contactSection = document.getElementById('contact-section');
  if (contactSection) {
    contactSection.scrollIntoView({behavior:'smooth'})
  }
}

var navProject = document.getElementById('nav-project');
if (navProject) {
    navProject.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        var projectSection = document.getElementById('project-section');
        if (projectSection) {
          projectSection.scrollIntoView({behavior:'smooth'})
        }
    });
}
function scrollToProject() {
  var projectSection = document.getElementById('project-section');
  if (projectSection) {
    projectSection.scrollIntoView({behavior:'smooth'})
  }
}

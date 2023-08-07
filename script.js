'use strict'






//==================== Navbar-Code ===================
const navbar = document.querySelector("[data-nav]");
const overlay = document.querySelector(".overlay");
const innerContent = document.querySelector(".inner-content");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navCloseBtn = document.querySelector(".nav-close-btn");

//Funktion zum togglen=> entfernt Klasse, wenn sie existiert und fügt sie hinzu, wenn sie nicht existiert
const toggleNavbar = function(){
  navbar.classList.add("active");
  innerContent.classList.add("active");
  overlay.classList.add("active"); 
  document.body.classList.add("nav-active");
}

//Funktion zum Schließen der navbar
const closeNavbar = function() {
  navbar.classList.remove("active");
  innerContent.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
};

//wenn Window size verändert wird, wird Navbar+ overlay ausgeblendet
window.addEventListener("resize", function() {
  if (navbar.classList.contains("active")) {
    closeNavbar();
  }
});

//Eventlistener hinzufügen
hamburgerMenu.addEventListener("click", toggleNavbar);
navCloseBtn.addEventListener("click", closeNavbar);
overlay.addEventListener("click", closeNavbar);



//=================== Scroll animations=========================
window.onscroll = function() {
  scrollFunction();
  stickyNavbar();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("scroll-top-btn").style.display = "block";
    document.getElementById("scroll-top-btn").classList.add("show");
  } else {
    document.getElementById("scroll-top-btn").style.display = "none";
    document.getElementById("scroll-top-btn").classList.remove("show");
  }
}

function stickyNavbar() {
  const navbar = document.querySelector("[data-nav]");
  if (window.scrollY > 5) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

document.getElementById("scroll-top-btn").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});


//=================== Hover im Hero ===================================
const phoneMockup = document.querySelector('.phone-mockup');

phoneMockup.addEventListener('mouseover', () => {
  phoneMockup.classList.add('large');
});

phoneMockup.addEventListener('mouseout', () => {
  phoneMockup.classList.remove('large');
});


//`=====================Image slider======================================
/* alter code

const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const slides = document.getElementsByClassName('slide');
let currentIndex = 0;

showSlide(currentIndex);

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[index].classList.add('active');
}

function showPrevSlide() {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

function showNextSlide() {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}*/

const slider = document.querySelector(".slider"),
  carousel= document.querySelector(".carousel"),
  images = document.querySelector(".img"),
  buttons = document.querySelectorAll(".");

console.log(slider, carousel, images);



//show Scroll-Top-Button 

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("scroll-top-btn").classList.add("show");
  } else {
    document.getElementById("scroll-top-btn").classList.remove("show");
  }
}

document.getElementById("scroll-top-btn").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});









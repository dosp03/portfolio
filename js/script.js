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


//===========================read more button===========================
    const button = document.querySelector('.read-more-Btn'); // Use '.read-more-Btn' here
    const hiddenText = document.querySelector('.hidden-text');

    const chevronIcon = document.querySelector('.chevron-icon');

    button.addEventListener('click', function () {
        if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
            hiddenText.style.display = 'block';
            button.textContent = 'Read Less';
            chevronIcon.innerHTML = '<ion-icon name="chevron-up-outline"></ion-icon>';
        } else {
            hiddenText.style.display = 'none';
            button.textContent = 'Read More';
            chevronIcon.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>';
        }
    });


//=======================Projektfilter======================
const btns = document.querySelectorAll('.buttons button');
const projcards = document.querySelectorAll('.filterable .projcard');

// Set active btn on click
function setActiveBtn(e) {
  // Remove active class from all buttons
  btns.forEach(btn => {
    btn.classList.remove('btn-clicked');
  });

  // Add active class to clicked btn
  e.target.classList.add('btn-clicked');
}

// Filter projcards
function filterProjcards(e) {
  setActiveBtn(e);
  // Loop through all projcards
  projcards.forEach(projcard => {

    // Expand all projcards
    projcard.classList.remove('projcard-shrink');
    projcard.classList.add('projcard-expand');

    // Get Data from data attributes
    // Get projcard type data
    const projcardType = parseInt(projcard.dataset.projcard);

    // Get button type data
    const btnType = parseInt(e.target.dataset.btn);

    if (projcardType !== btnType) {
      // Hide the projcard
      projcard.classList.remove('projcard-expand');
      projcard.classList.add('projcard-shrink');
    }
  });
}

// Set click event for the 'All' button
btns[0].addEventListener('click', (e) => {
  setActiveBtn(e);

  projcards.forEach(projcard => {
    // Expand all projcards
    projcard.classList.remove('projcard-shrink');
    projcard.classList.add('projcard-expand');
  });
});

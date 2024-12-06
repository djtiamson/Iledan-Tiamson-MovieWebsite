'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});

// Get all filter buttons and content sections
const filterButtons = document.querySelectorAll('.filter-btn');
const contentSections = document.querySelectorAll('.content-section');

// Add event listeners to filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterType = button.getAttribute('data-filter');

    // Hide all content sections
    contentSections.forEach(section => {
      section.style.display = 'none';
    });

    // Show the selected content section
    const selectedSection = document.querySelector(`.content-section[data-type="${filterType}"]`);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  });
});




/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


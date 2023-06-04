document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var navLinks = document.querySelectorAll(".nav-links ul li a");
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle("scrolled", window.scrollY > 0);
      }
    });
  
    window.addEventListener("scroll", function() {
      var nav = document.querySelector(".nav");
      nav.classList.toggle("scrolled", window.scrollY > 0);
    });
  
    var slideCount = document.querySelectorAll(".slide").length; // Total number of slides
    var visibleSlides = 4; // Number of slides visible at a time
    var slideWidth = document.querySelector(".slide").offsetWidth; // Width of a single slide including margin
    var containerWidth = visibleSlides * slideWidth; // Total width of visible slides
    var currentPosition = 0; // Current position of the slide container
  
    document.querySelector(".slides").style.width = containerWidth + "px"; });
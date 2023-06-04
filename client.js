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
  
    document.querySelector(".slides").style.width = containerWidth + "px"; // Set the width of the slide container
  
    function slideNext() {
      if (currentPosition > -(slideCount - visibleSlides) * slideWidth) {
        currentPosition -= slideWidth;
        document.querySelector(".slides").style.transform = "translateX(" + currentPosition + "px)";
        var activeIndex = Math.abs(currentPosition) / slideWidth;
        activateCircle(activeIndex);
        centerSlide(activeIndex);
      }
    }
  
    function slidePrev() {
      if (currentPosition < 0) {
        currentPosition += slideWidth;
        document.querySelector(".slides").style.transform = "translateX(" + currentPosition + "px)";
        var activeIndex = Math.abs(currentPosition) / slideWidth;
        activateCircle(activeIndex);
        centerSlide(activeIndex);
      }
    }
  
    function goToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < slideCount) {
          currentPosition = -(slideIndex * slideWidth);
          document.querySelector(".slides").style.transform = "translateX(" + currentPosition + "px)";
          activateCircle(slideIndex);
          centerSlide(slideIndex);
        }
      }
      function centerSlide(slideIndex) {
        var slideWidth = document.querySelector(".slide").offsetWidth;
        var container = document.querySelector(".slides");
        var containerWidth = container.offsetWidth;
        var slideOffset = slideIndex * slideWidth;
        var centerOffset = (containerWidth / 2) - (slideWidth / 2);
        var scrollPosition = slideOffset - centerOffset;
        container.scrollLeft = scrollPosition;
      }
      
      
  
    function activateCircle(slideIndex) {
      var circles = document.querySelectorAll(".slider-circle");
      for (var i = 0; i < circles.length; i++) {
        circles[i].classList.remove("active");
      }
      circles[slideIndex].classList.add("active");
    }
  
 
    // Handle next slide button click
    document.querySelector(".next-button").addEventListener("click", function() {
      slideNext();
    });
  
    // Handle previous slide button click
    document.querySelector(".prev-button").addEventListener("click", function() {
      slidePrev();
    });
  
    // Handle circle click
    var circles = document.querySelectorAll(".slider-circle");
    circles.forEach(function(circle, index) {
      circle.addEventListener("click", function() {
        goToSlide(index);
      });
    });
  });
  
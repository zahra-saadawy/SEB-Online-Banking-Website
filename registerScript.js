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


function register(username, password) {
    // Check the username and password against your authentication logic
    if (username === 'admin' && password === 'admin') {
      // Redirect to the admin page if the credentials are valid
      window.location.href = 'applyforloan.html';
    } else if (username === 'client' && password === 'client') {
      // Redirect to the user page if the credentials are valid
      window.location.href = 'CreateAccount.html';
    } else  if(username === 'banker' && password === 'banker'){
      // Redirect to an error page if the credentials are invalid
      window.location.href = 'applyforloan.html';
    }

  }

  function changeForm() {
    console.log("hey");
    document.getElementById("notforget").style.display = "none";
    document.getElementById("forget").style.display = "flex";   
    ;
  
  }
   function submitForm(a,b) {
   
      var newPassword = document.getElementById("newPassword").value;
      var confirmPassword = document.getElementById("confirmPassword").value;
      console.log("baraa");
      // Perform validation
      if (newPassword !== confirmPassword) {
        console.log("heyy");
        alert("Passwords do not match");
        return;
      }
      if (a === 'admin' && b=== 'admin') {
        // Redirect to the admin page if the credentials are valid
        window.location.href = 'applyforloan.html';
      } else if (a === 'client' && b === 'client') {
        // Redirect to the user page if the credentials are valid
        window.location.href = 'CreateAccount.html';
      } else  if(a === 'banker' && b === 'banker'){
        // Redirect to an error page if the credentials are invalid
        window.location.href = 'applyforloan.html';
      }

    }
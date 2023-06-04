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


    document.getElementById("sendMoneyForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting
    
      // Get form values
      var sender = document.getElementById("sender").value;
      // var recipient = document.getElementById("recipient").value;
      var amount = document.getElementById("amount").value;
     
      if(telephoneVisible)
      {

        var telephone = document.getElementById("telephone").value;
        console.log(document.getElementById("telephone").style.display);
      if(telephone==="")
     { showError();
    return;}}
      // Perform validation
      if (sender === "" || amount === "") {
        displayError("Please fill in all fields.");
        // return;
      }
      else showPopup();
      // Perform money transfer
      // Add your logic here to send money
    
      // Display success message
      // alert("Money sent successfully!");
      // // Alternatively, you can display a success message in the HTML
    
      // // Clear form fields
      // document.getElementById("sendMoneyForm").reset();
    });
    function showError() {
      displayError("Enter Telephone Number"); // Calling displayError function
    }
    function displayError(errorMessage) {
      alert(errorMessage); // Example implementation to display an error message
    }var telephoneVisible = false;
    function showPayment() {
      var listElement = document.getElementById("billslist");
      var payElement = document.getElementById("sendMoneyForm");
  
      listElement.style.display = "none";
      payElement.style.display = "block";
    }
    function showPaymentt() {
      var listElement = document.getElementById("billslist");
      var telephone = document.getElementById("telephone");
      var payElement = document.getElementById("sendMoneyForm");
      var telel = document.getElementById("telephonel");
      telephoneVisible=true;
      listElement.style.display = "none";
      payElement.style.display = "block";
      telephone.style.display="block";
      telel.style.display="block";
      telephone.required="true";
    }
    //pop up
  // var form = document.getElementById('myForm');
  // form.addEventListener('submit', function(e) {
  //   e.preventDefault(); // Prevent form submission

  //   // Display the popup
  //   showPopup();
  // });

  function showPopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    popup.style.display = 'block';
    overlay.style.display = 'block';
  }

  function hidePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    popup.style.display = 'none';
    overlay.style.display = 'none';
  }
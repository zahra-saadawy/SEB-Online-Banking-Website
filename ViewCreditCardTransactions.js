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
  
  const OKBtns = document.querySelectorAll(".btn-next");


  const progressSteps = document.querySelectorAll(".progress-step");
  
  let formStepsNum = 0;
  function checkValue() {
      var fields = document.querySelectorAll(".form-step-active " +"input[required]");
    
      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
    
        if (field.value === "") {
           field.reportValidity();
          console.log(field);
          return false; // Stop execution if any required field is empty
        }
    
        if (!field.checkValidity()) {
          console.log(field);
           field.reportValidity();
          return false; // Stop execution if field data is not in the correct format
        }
       }
    
      return true; // All required fields are filled and in the correct format
    }
    OKBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
         console.log(checkValue());
        if (checkValue()) {
          formStepsNum++;
          updateFormSteps();
        }
      });
    });
  function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });
  
    formSteps[formStepsNum].classList.add("form-step-active");
  }
  
  var rangeInput = document.getElementById("income-range");
  var rangeValue = document.getElementById("income-value");
  
  rangeInput.addEventListener("input", function() {
    rangeValue.textContent = "$" + this.value;
  });
  
  var canvas = document.getElementById('signatureCanvas');
  var context = canvas.getContext('2d');
  var isDrawing = false;
  
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
  document.getElementById('clearButton').addEventListener('click', clearSignature);
  document.getElementById('saveButton').addEventListener('click', saveSignature);
  
  function startDrawing(event) {
    isDrawing = true;
    draw(event);
  }
  
  function draw(event) {
    if (!isDrawing) return;
  
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
  
    context.lineWidth = 2;
    context.lineCap = 'round';
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
  }
  
  function stopDrawing() {
    isDrawing = false;
    context.beginPath();
  }
  
  function clearSignature() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    return false;
  }
  
  function saveSignature() {
    var image = canvas.toDataURL(); // Convert canvas to base64 image
    // Send the image data to the server or perform further processing
    console.log(image);
  //   return false;
    // You can also create a hidden input field and set the image data as its value
    var hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'signature';
    hiddenInput.value = image;
    document.getElementById('signatureContainer').appendChild(hiddenInput);
  }
  
  function validateForm() {
      var termsCheckbox = document.getElementById('termsCheckbox');
    
      if (!termsCheckbox.checked) {
        alert('Please agree to the Terms and Conditions');
        return false; // Prevent form submission
      }
    
      // Additional form validation or submission logic...
    
      return true; // Allow form submission
    }
/* Name: Karim Mohamed 
Date: 05/06/24 
Section: CSC125 
Title: Final Project */




function checkFirstName() {
    const firstName = document.getElementById("firstName").value;
    if (!firstName) {
      alert("Field is incomplete");
 
    }
  }
 
 
 
 
  function validateForm() {
    var errors = "";
 
    var firstName = document.getElementById('firstName').value;
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        errors += "Full Name: Must include one or more letters, upper or lower case.\n";
    }
   

    var email = document.getElementById('email').value;
if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    errors += "Please enter a valid email address.\n";
}

var phoneNumber = document.getElementById('phoneNumber').value;
    if (!/^\d{10}$/.test(phoneNumber)) {
          errors += "Phone Number: Must include 10 digits.\n";
      }
 
 
 
  
  var address = document.getElementById('address').value;
  if (address === "") {
      errors += "Please enter an address.\n";
  }

  var zip = document.getElementById('zip').value;
  if (!/^\d{5}$/.test(zip)) {
      errors += "Zip: Must include 5 numbers at the beginning of string.\n";
  }

var city = document.getElementById('city').value;
  if (city === "") {
      errors += "Please enter a city.\n";
  }
  var state = document.getElementById('state').value;
  if (state === "r") {
      errors += "Select a State.\n";
  }


   
    if (errors.length > 0) {
        alert(errors);
        return false;
 
 
 
        document.getElementById('myForm').submit();
 
  }
  }

  
  


  
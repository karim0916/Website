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
 
   
 
 
  
 

    var zip = document.getElementById('zip').value;
    if (!/^\d{5}$/.test(zip)) {
        errors += "Zip number: Must include 5 numbers at the beginning of string.\n";
    }
 
    var telephone1 = document.getElementById('telephone1').value;
    if (!/^\d{10}$/.test(telephone1)) {
          errors += "Phone Number:Must include 10 digits.\n";
      }
 
 
    

      var state = document.getElementById('state').value;
      if (state === "r") {
          errors += "Select a State.\n";
      }

       
  var street = document.getElementById('street').value;
  if (street === "") {
      errors += "Please enter a street.\n";
  }

  var street = document.getElementById('city').value;
  if (street === "") {
      errors += "Please enter a city.\n";
  }


  var email = document.getElementById('email-address').value;
  if (!email.match(/^[a-zA-Z0-9@.]+$/)) {
      errors += "Please enter a valid email address.\n";
  }
  


   
    if (errors.length > 0) {
        alert(errors);
        return false;
 
 
 
        document.getElementById('myForm').submit();
 
  }
  }

  
  


  
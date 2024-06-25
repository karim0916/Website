



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
        errors += "First Name: Must include one or more letters, upper or lower case.\n";
    }
  
    
  
  
    var lastName = document.getElementById('lastName').value;
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        errors += "Last Name: Must include one or more letters, upper or lower case.\n";
    }
  
    var city = document.getElementById('city').value;
    if (!/^[a-zA-Z]+$/.test(city)) {
      errors += "City: Must include one or more letters, upper or lower case.\n";
    }
  
  
  
  
  var street = document.getElementById('street').value;
      if (!street.match(/^[a-zA-Z0-9\s\-,.]+$/)) {
          errors += "Street address: Must include one or more letters, numbers, spaces, hyphens, commas, or periods.\n";
      }
  
  
  
  
  
  
    var No = document.getElementById('No').value;
    if (!/^\d+$/.test(No)) {
        errors += "Address number: Must include one or more numbers.\n";
    }
  
    var zip = document.getElementById('zip').value;
    if (!/^\d{5}$/.test(zip)) {
        errors += "Zip number: Must include 5 numbers at the beginning of string.\n";
    }
  
  
    var genderButtons = document.getElementsByName('gender');
    var genderHighlighted = false;
    for (var i = 0; i < genderButtons.length; i++) {
        if (genderButtons[i].checked) {
          genderHighlighted = true;
            break;
        }
    }
    if (!genderHighlighted) {
        errors += "Gender:  (male or female) (one button checked).\n";
    }
  
    var telephone1 = document.getElementById('telephone1').value;
    if (!/^\d{3}$/.test(telephone1)) {
          errors += "Telephone: (Field 1): Must include 3 digits.\n";
      }
  
  
      var telephone2 = document.getElementById('telephone2').value;
      if (!/^\d{3}$/.test(telephone2)) {
          errors += "Telephone: (Field 2): Must include 3 digits.\n";
      }
  
  
      var telephone3 = document.getElementById('telephone3').value;
      if (!/^\d{4}$/.test(telephone3)) {
          errors += "Telephone: (Field 3): Must include 4 digits.\n";
      }
  
      var suggestion = document.getElementById('suggestion').value.trim();
      if (!suggestion.match(/^[a-zA-Z]+$/)) {
          errors += "Suggestion: Must include one or more letters, upper or lower case.\n";
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
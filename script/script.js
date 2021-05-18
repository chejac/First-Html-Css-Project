// Toggle all the checkboxes in the signup page
function toggleAllCheckboxes(toggle) {
  let checkboxes = document.getElementsByName("chk");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].type == "checkbox") {
      checkboxes[i].checked = toggle;
    }
  }
}

// Validate password and state in the signup page
function validateForm() {
  return validatePassword() && validateState();
}

// Validate password using regex and confirm the passwords match
function validatePassword() {
  let pass1 = document.getElementById("pass").value;
  let pass2 = document.getElementById("confirm-pass").value;
  console.log(pass1);
  let regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[a-zA-Z0-9]{8,20}$$";
  if (!pass1.match(regex)) {
    alert(
      "Invalid password: 8-20 characters, at least 1 digit, lower and upper case alphabet."
    );
    return false;
  }

  if (pass1 != pass2) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
}

// Validate state is not empty
function validateState() {
  let state = document.getElementById("states").value;

  if (state == "") {
    alert("Choose a state.");
    return false;
  }

  return true;
}

// Load HTML before Javascript
document.addEventListener("DOMContentLoaded", function () {
  // Get header navbars
  let navbars = document.getElementsByTagName("a");

  // Change font from white to green when mouse is over header navbars
  navbars[0].addEventListener("mouseover", function () {
    navbars[0].style.color = "#39ff14";
  });

  navbars[0].addEventListener("mouseout", function () {
    navbars[0].style.color = "white";
  });

  navbars[1].addEventListener("mouseover", function () {
    navbars[1].style.color = "#39ff14";
  });

  navbars[1].addEventListener("mouseout", function () {
    navbars[1].style.color = "white";
  });

  navbars[2].addEventListener("mouseover", function () {
    navbars[2].style.color = "#39ff14";
  });

  navbars[2].addEventListener("mouseout", function () {
    navbars[2].style.color = "white";
  });

  navbars[3].addEventListener("mouseover", function () {
    navbars[3].style.color = "#39ff14";
  });

  navbars[3].addEventListener("mouseout", function () {
    navbars[3].style.color = "white";
  });

  navbars[4].addEventListener("mouseover", function () {
    navbars[4].style.color = "#39ff14";
  });

  navbars[4].addEventListener("mouseout", function () {
    navbars[4].style.color = "white";
  });

  navbars[5].addEventListener("mouseover", function () {
    navbars[5].style.color = "#39ff14";
  });

  navbars[5].addEventListener("mouseout", function () {
    navbars[5].style.color = "white";
  });
});

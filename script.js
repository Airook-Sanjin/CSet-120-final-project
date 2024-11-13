function initializeSignInPage() {
  function signup() {
    
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    const passwordRequirements = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    //console.log(email);
    //console.log(pass);

    localStorage.setItem(email, pass);
    if (!passwordRequirements.test(pass)) {
      alert("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.");
    }
    if (localStorage.getItem(email)) {
      if (passwordRequirements.test(pass)) {
        location.replace("index.html");
      } 
    } else {
      alert("User does not exist");
    }
  }

  function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    //console.log(email);
    //console.log(pass);
    
    if (email == managerInfo.email && pass == managerInfo.password) {
      location.replace("index.html");
      alert("Logged in as manager");
    }

   else if (localStorage.getItem(email)) {
      if (pass == localStorage.getItem(email)) {
        location.replace("index.html");
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("User does not exist");
    }
  }
  document.getElementById("Signup-btn").addEventListener("click", signup);
  document.getElementById("Login-btn").addEventListener("click", login);
}
function initializeMainPage() {}
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("Page1")) {
    initializeMainPage();
  } else if (document.getElementById("SignInPage")) {
    initializeSignInPage();
  }
});




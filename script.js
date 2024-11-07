function initializeSignInPage() {
  function signup() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    //console.log(email);
    //console.log(pass);

    localStorage.setItem(email, pass);
    if (localStorage.getItem(email)) {
      if (pass == localStorage.getItem(email)) {
        location.replace("index.html");
      } else {
        alert("Incorrect");
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

    if (localStorage.getItem(email)) {
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
function initializeMenuPage() {
  //  -----------------------------------------------------------------------
  //                                Modal Boxes
  //  -----------------------------------------------------------------------
  let modalBtn = document.getElementById("Modalbutton");
  let modal = document.getElementById("Mymodal");
  let closebtn = document.getElementById("Closebtn");
  modalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });
  closebtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
let logo = document.getElementById("logo");
logo.addEventListener("click", function(){
    location.replace("index.html");
});
let Deliverybtn = document.getElementById("Deliverybtn");
let Pickupbtn = document.getElementById("Pickupbtn");
let indicator = document.getElementById("D-P-Indicator");
Deliverybtn.addEventListener("click", function(){
indicator.innerHTML=`<ion-icon name="pin"></ion-icon> Delivery`
Pickupbtn.addEventListener("click", function(){
    indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Pick Up`
})
})
  //  -----------------------------------------------------------------------
  //                                Modal Boxes
  //  -----------------------------------------------------------------------
}
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("Page1")) {
    initializeMainPage();
  } else if (document.getElementById("SignInPage")) {
    initializeSignInPage();
  } else if (document.getElementById("MenuPage")) {
    initializeMenuPage();
  }
});

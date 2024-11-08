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
function initializeMainPage() {
  //  -----------------------------------------------------------------------
  //                                Modal Boxes
  //  -----------------------------------------------------------------------
  let MainmodalBtn = document.getElementsByClassName("Modalbutton Main")[0];
  
  let Mainmodal = document.getElementsByClassName("modal Main")[0];
  let Mainclosebtn = document.getElementsByClassName("Closebtn Main")[0];
  MainmodalBtn.addEventListener("click", function () {
    console.log(MainmodalBtn);
    Mainmodal.style.display = "block";
  });
  Mainclosebtn.addEventListener("click", function () {
    Mainmodal.style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target == Mainmodal) {
      Mainmodal.style.display = "none";
    }
  };
  let logo = document.getElementById("logo");
  logo.addEventListener("click", function () {
    location.replace("index.html");
  });
  let mainDeliverybtn = document.getElementsByClassName("Delivery-Main")[0];
  let mainPickupbtn = document.getElementsByClassName("Pickup-Main")[0];

  let maindeliveryForm =
    document.getElementsByClassName("Main-in-container")[0];
  mainDeliverybtn.addEventListener("click", function () {
    maindeliveryForm.style.display = "block";
  });
  mainPickupbtn.addEventListener("click", function () {
    maindeliveryForm.style.display = "none";
  });
}
function initializeMenuPage() {
ready();
  function ready (){
    let AddtoCart = document.getElementsByClassName("btn menu-add")
    for (let i = 0; i < AddtoCart.length; i++ ){
     let AddtoCartBtn = AddtoCart[i];
     AddtoCartBtn.addEventListener("click", addToCartClicked )
    }
    
  }
  function addToCartClicked (event){
 let button = event.target;
 let shopItem = button.parentElement.parentElement;
 console.log(shopItem)
 let Title = shopItem.getElementsByClassName("item-header")[0].innerText;
 console.log(Title)
  }
  //  -----------------------------------------------------------------------
  //                                Modal Boxes
  //  -----------------------------------------------------------------------
  let modalBtn = document.getElementsByClassName("Modalbutton Menu")[0];
  let modal = document.getElementsByClassName("modal Menu")[0];
  let closebtn = document.getElementsByClassName("Closebtn Menu")[0];
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
  logo.addEventListener("click", function () {
    location.replace("index.html");
  });
  let Deliverybtn = document.getElementsByClassName("Delivery-Menu")[0];
  let Pickupbtn = document.getElementsByClassName("Pickup-Menu")[0];
  let indicator = document.getElementById("D-P-Indicator");
  let deliveryForm = document.getElementsByClassName("in-container")[0];
  Deliverybtn.addEventListener("click", function () {
    indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Delivery`;
    deliveryForm.style.display = "block";
  });
  Pickupbtn.addEventListener("click", function () {
    indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Pick Up`;
    deliveryForm.style.display = "none";
  });

  //  -----------------------------------------------------------------------
  //                                Modal Boxes end
  //  -----------------------------------------------------------------------
  
}
function initializeCheckoutPage(){

}
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("Page1")) {
    initializeMainPage();
  } else if (document.getElementById("SignInPage")) {
    initializeSignInPage();
  } else if (document.getElementById("MenuPage")) {
    initializeMenuPage();
  } else if (document.getElementById("CheckoutPage")){
    initializeCheckoutPage();
  }
});

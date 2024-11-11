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
    } else if (localStorage.getItem(email)) {
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
// ----------------------------------------------------------------------------------------------------------
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
// ---------------------------------------------------------------------------------------------------------
function initializeMenuPage() {
  document.addEventListener("DOMContentLoaded", ready);
  ready();
  function ready() {
    // makes sure the each add to cart buttons work
    let AddtoCart = document.getElementsByClassName("menu-add");
    for (let i = 0; i < AddtoCart.length; i++) {
      let AddtoCartBtn = AddtoCart[i];
      AddtoCartBtn.addEventListener("click", addToCartClicked);
    }
    //  -----------------------------------------------------------------------
    //                                Adding to Cart
    //  -----------------------------------------------------------------------
  }
  function addToCartClicked(event) {
    let button = event.target;
    console.log(button);
    let shopItem = button.parentElement.parentElement.parentElement;
    console.log(shopItem);
    let Title = shopItem.getElementsByClassName("item-header")[0].innerText;
    console.log(Title);

    let Price = shopItem
      .getElementsByClassName("price")[0]
      .getElementsByTagName("span")[0].innerText;
    console.log(Price);
    let foodImage = shopItem
      .getElementsByClassName("item-img")[0]
      .getElementsByTagName("img")[0].src;
    console.log(foodImage);

    let ItemInfo = {
      foodTitle: Title,
      foodPrice: Price,
      foodImg: foodImage,
    };
    let existingItems = JSON.parse(localStorage.getItem("StoredItems"))||[];
    existingItems.push(ItemInfo)

    localStorage.setItem("StoredItems", JSON.stringify(existingItems));
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
  //                            Modal Boxes end
  //  -----------------------------------------------------------------------
}
function initializeCheckoutPage() {
  console.log("is this on?")
  let retrievedItems = JSON.parse(localStorage.getItem(`StoredItems`))||[];
  console.log(retrievedItems);
  let itemList = document.getElementsByClassName("Item-Qty-Price-List")[0];
for(let i = 0 ; i <= retrievedItems.length; i++){
  let cartRowContent = document.createElement("div");
  cartRowContent.className = "Item-Container";
  cartRowContent.innerHTML = `<div class="Item-Qty-Price-List">
              <div class="Item-Container">
                <img id="Item-img" src="${retrievedItems[i].foodImg}" alt="ItemImg" />
                <p>${retrievedItems[i].foodTitle}</p>
              </div>
              <div class="Qty-Container">
                <input
                  type="number"
                  name="Quantity-Counter"
                  id="Quantity"
                  value="1"
                />
              </div>
              <div class="Price-Container">
                <p>${retrievedItems[i].foodPrice}</p>
              </div>
            </div>`;
  itemList.insertAdjacentElement("afterEnd", cartRowContent);}
}

//  -----------------------------------------------------------------------
//                  Checks for Id to Load the right Functions
//  -----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("Page1")) {
    console.log("MainPage opening")
    initializeMainPage();
  } else if (document.getElementById("SignInPage")) {
    console.log("Signin Page opening")
    initializeSignInPage();
  } else if (document.getElementById("MenuPage")) {
    console.log("MenuPage opening")
    initializeMenuPage();
  } else if (document.getElementById("CheckoutPage")) {
    console.log("checkoutPage opening")
    initializeCheckoutPage();
  }
});

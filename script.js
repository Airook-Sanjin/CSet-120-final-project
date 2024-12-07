// const { json } = require("stream/consumers");


let storedLosPollosMenu = JSON.parse(localStorage.getItem("LosPollosMenu"));
if(!storedLosPollosMenu){
  let InititalLosPollosMenu = {
    BreakfastSpecialties: [
      {
        Itemid: 1,
        Name: "Huevos Rancheros",
        Price: 5.99,
        Description:
          "Fried eggs (3) served on a lightly fried corn tortillas in cooked salsa. A Mexican breakfast classic.",
        image: "LosPollosImages-gif/huevorancheros.png",
      },
      {
        Itemid: 2,
        Name: "Carne Avocado Rancheros",
        Price: 5.99,
        Description:
          "Grilled steak, creamy avocado, and zesty ranchero sauce, served with warm corn tortillas.",
        image: "LosPollosImages-gif/avocadorancheros.webp",
      },
    ],
    PollosBurritos: [
      {
        Itemid: 1,
        Name: "Classic Burrito",
        Price: 2.49,
        Description: "Egg & potato",
        image: "LosPollosImages-gif/potato.jpg",
      },
      {
        Itemid: 2,
        Name: "New Mexico Burrito",
        Price: 5.99,
        Description: "Ground beef, refried beans, & melted cheese",
        image: "LosPollosImages-gif/combo.jpg",
      },
      {
        Itemid: 3,
        Name: "Albequerque Burrito",
        Price: 5.99,
        Description: "Sausage, egg, potato, red chile & cheese",
        image: "LosPollosImages-gif/albuquerque.png",
      },
      {
        Itemid: 4,
        Name: "South Valley Burrito",
        Price: 5.99,
        Description: "Chicken, egg, potato, red chile and cheese",
        image: "LosPollosImages-gif/elasado.jpg",
      },
    ],
    PollosSpecialties: [
      {
        Itemid: 1,
        Name: "Pollo Platter A",
        Price: 5.99,
        Description: "Three piece chikcen with two sides",
        image: "LosPollosImages-gif/classicplatter.webp",
      },
      {
        Itemid: 2,
        Name: "Pollo Platter B",
        Price: 5.99,
        Description: "Two piece chicken with one side",
        image: "LosPollosImages-gif/polloplatter2.webp",
      },
      {
        Itemid: 3,
        Name: "10 Pc Pollo Box",
        Price: 9.99,
        Description:
          "Ten pieces of our signature pollo chicken (5 legs, 5 thighs) with your choice of side",
        image: "LosPollosImages-gif/chickenbox.png",
      },
      {
        Itemid:4,
        Name: "6 Pc Pollo Bucket",
        Price: 5.99,
        Description: "Six pieces of our signature pollo chicken",
        image: "LosPollosImages-gif/chickenbox.png",
      },
    ],
    Sides: [
      {
        Itemid: 1,
        Name: "6 Pc Pollo Tenders",
        Price: 4.99,
        Description:
          "Golden, crispy chicken strips served with your choice dipping sauce (6Pc)",
        image: "LosPollosImages-gif/chicken-tenders.webp",
      },
      {
        Itemid: 2,
        Name: "Pollo Curly Fries",
        Price: 2.5,
        Description:
          "Our signature crispy, golden fries served hot and salted to perfection",
        image: "LosPollosImages-gif/pollofries.png",
      },
      {
        Itemid: 3,
        Name: "Chicken Nuggets",
        Price: 4.99,
        Description:
          "Cripsy, tender chicken bites served with your choice of dipping sauce (6Pc)",
        image: "LosPollosImages-gif/nuggets.png",
      },
      {
        Itemid: 4,
        Name: "Nachos",
        Price: 5.99,
        Description:
          "Crispy tortilla chips topped with melted cheese, juicy tomato, refried beans and your choice of meat",
        image: "LosPollosImages-gif/nachos.jpg",
      },
    ],
    Sandwiches: [
      {
        Itemid: 1,
        Name: "Cripsy Chicken Sandwich",
        Price: 5.99,
        Description:
          "Juicy, crispy chicken breast on a soft bun with lettuce, tomato, and your choice of sauce",
        image: "LosPollosImages-gif/ChickenSandwich.png",
      },
      {
        Itemid: 2,
        Name: "Grilled Chicken Sandwich",
        Price: 5.99,
        Description:
          "Tender, seasoned grilled chicken breaast with lettue, tomato, and your choice of sauce on a soft bun",
        image: "LosPollosImages-gif/grilledsandwich.png",
      },
      {
        Itemid: 3,
        Name: "Avocado Chicken Sandwich",
        Price: 5.99,
        Description:
          "Grilled chicekn, creamy avocado, lettuce, tomato, and mayo on a toasted bun.",
        image: "LosPollosImages-gif/avocadosandwich.png",
      },
      {
        Itemid: 4,
        Name: "Spicy Chicken Sandwich",
        Price: 5.99,
        Description:
          "Crispy, spicy chicken fillet with pickles, lettuce, and spicy mayo on a toasted bun",
        image: "LosPollosImages-gif/spicychicken.png",
      },
    ],
    Desserts: [
      {
        Itemid:1,
        Name: "Apple Pie",
        Price: 5.99,
        Description:
          "Warm, buttery crust filled with sweet cinnamon-spiced apples",
        image: "LosPollosImages-gif/applepie.png",
      },

      {
        Itemid: 2,
        Name: "French Toast Stix",
        Price: 4.99,
        Description:
          "Golden, cripsy sticks of cinnamon-sugar French Toast, served with warm syrup for dipping",
        image: "LosPollosImages-gif/frenchstix.png",
      },
      {
        Itemid: 3,
        Name: "Churros",
        Price: 4.99,
        Description:
          "Crispy, cinnamon-sugar-coated treats, served warm with a side of chocolate dipping sauce (4Pc)",
        image: "LosPollosImages-gif/churros.png",
      },
    ],
    Beverages: [
      {
        Itemid: 1,
        Name: "Coke",
        Price: 0.99,
        Description:
          "Your Choice of Sprite, Dr. Pepper, Coca Cola, or Diet Coke, served ice cold",
        image: "LosPollosImages-gif/coke.webp",
      },
      {
        Itemid: 2,
        Name: "MilkShake",
        Price: 3.19,
        Description:
          "Creamy, thick, and indulgent-choose from classic vanilla, chocolate, or strawberry",
        image: "LosPollosImages-gif/milkshake.png",
      },
      {
        Itemid: 3,
        Name: "Coffee",
        Price: 2.99,
        Description:
          "Freshly brewed, rich and aromatic- served hot or iced for your perfect pick-me-up",
        image: "LosPollosImages-gif/polloscoffee.png",
      },
    ],
  };
  localStorage.setItem("LosPollosMenu", JSON.stringify(InititalLosPollosMenu));
  storedLosPollosMenu = InititalLosPollosMenu;
}

function delOrPickModal(){
  
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  let CustomerLocInfo = [];
  let cStreet = document.getElementById("StreetAddress");
  let cStreet2 = document.getElementById("AddressLine2");
  let cCity = document.getElementById("City");
  let cSPR = document.getElementById("State");
  let cZIP = document.getElementById("ZipCode");
  let cDate = document.getElementById("Date-Dropdown");
  let cTime = document.getElementById("time-Dropdown");
  let Updatebtn = document.getElementsByClassName("Update-Btn")[0];

  Updatebtn.addEventListener("click", function () {
    if (CustomerLocInfo.length > 0) {
      CustomerLocInfo.pop();
    } else {
      console.log(
        cStreet.value,
        cStreet2.value,
        cCity.value,
        cSPR.value,
        cZIP.value,
        cDate.value,
        cTime.value
      );
      CustomerLocInfo.push({
        StreetA: cStreet.value,
        Street2: cStreet2.value,
        City: cCity.value,
        SPR: cSPR.value,
        ZIP: cZIP.value,
        date: cDate.value,
        Time: cTime.value,
      });
      localStorage.setItem("CustomerLocInfos", JSON.stringify(CustomerLocInfo));
    }
    modal.style.display = "none";
  });
  let Deliverybtn = document.getElementsByClassName("DeliveryDiv")[0];
  let Pickupbtn = document.getElementsByClassName("PickupDiv")[0];
  let indicator = document.getElementsByClassName("location-button")[0];
  
  let deliveryForm = document.getElementsByClassName("form-container")[0];
  console.log(deliveryForm)
  Deliverybtn.addEventListener("click", function () {
    if(indicator){indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Delivery`;}
    
    deliveryForm.innerHTML = `<div class="Main Loc-container">
                  <div class="Address-Container">
                    <div class="Address">
                      <h6>Street Address <span class="star">*</span></h6>
                      <input
                        type="text"
                        placeholder="123 Main St"
                        id="StreetAddress"
                        required
                      />
                    </div>
                    <div class="AddressLine2">
                      <h6>Address Line 2</h6>
                      <input
                        type="text"
                        placeholder="Apt, Suite, Unit, etc."
                        id="AddressLine2"
                      />
                    </div>
                  </div>
                  <div class="City-State">
                    <div class="City-Container">
                      <h6>City <span class="star">*</span></h6>
                      <input
                        type="text"
                        placeholder="City"
                        id="City"
                        required
                      />
                    </div>

                    <div class="State-Container">
                      <h6>State/Province/Region <span class="star">*</span></h6>
                      <select id="State" required>
                        <option value="" disabled selected>
                          Select State/Province
                        </option>
                        <option value="">Select State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>

                  <div class="Zip-Container">
                    <h6>ZIP/Postal Code <span class="star">*</span></h6>
                    <input
                      type="text"
                      placeholder="ZIP/Postal Code"
                      id="ZipCode"
                      required
                    />
                  </div>
                </div>
                <div class="Menu in-container">
                  <label for="Date"><h4>Choose Date:</h4></label>
                  <select name="Date" id="Date-Dropdown">
                    <option value="Today">Today</option>
                    <option value="tomorrow">tomorrow</option>
                    <option value="11/10">11/10</option>
                    <option value="11/11">11/11</option>
                  </select>
                </div>
                <div class="Menu in-container">
                  <label for="Time"><h4>Choose Time:</h4></label>
                  <select name="Date" id="time-Dropdown">
                    <option value="12:00pm">12:00pm</option>
                    <option value="12:30pm">12:30pm</option>
                    <option value="1:00pm">1:00pm</option>
                    <option value="1:30pm">1:30pm</option>
                  </select>
                </div>`;
  });
  Pickupbtn.addEventListener("click", function () {
    if(indicator){indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Pick Up`;}
    
    deliveryForm.innerHTML = `
    <div class="Address-Container">
                    <div class="Address">
                      <h6>Store Address <span class="star">*</span></h6>
                      <input
                        type="text"
                        placeholder="123 Main St"
                        id="StreetAddress"
                        required
                      />
                    </div>
                    </div>
                    <div class="Menu in-container">
                  <label for="Date"><h4>Choose Date:</h4></label>
                  <select name="Date" id="Date-Dropdown">
                    <option value="Today">Today</option>
                    <option value="tomorrow">tomorrow</option>
                    <option value="11/10">11/10</option>
                    <option value="11/11">11/11</option>
                  </select>
                </div>
                <div class="Menu in-container">
                  <label for="Time"><h4>Choose Time:</h4></label>
                  <select name="Date" id="time-Dropdown">
                    <option value="12:00pm">12:00pm</option>
                    <option value="12:30pm">12:30pm</option>
                    <option value="1:00pm">1:00pm</option>
                    <option value="1:30pm">1:30pm</option>
                  </select>
                </div>`;
  });
  let closebtn = document.getElementsByClassName("Closebtn")[0];
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display="block"
  closebtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

function menuDisplay() {
  
  console.log("displayingMenu");

  
  if (storedLosPollosMenu) {
    let menuContainer = document.getElementById("MenuContainer");
    if(document.getElementById("MenuPage")){
      menuContainer.innerHTML = ``;
    }
    else if (document.getElementById("ManagerPage")){
      menuContainer.innerHTML = `<div class="items-container">
            <button id ="AddItemsButton">Add Item</button>
        </div>
        <section class = "Modal Manager">
        <div class="popup-container">
<form id="addItemForm" class="popup-card">
    <label for="itemName">Item Name:</label>
    <input required placeholder="Enter Item Name" type="text" id="itemName" name="itemName"><br><br>
    <label  for="itemPrice">Item Price:</label>
    <input step="any" required placeholder="Enter Price Ex:00.00" type="number" id="itemPrice" name="itemPrice"><br><br>
    <label for="itemDescription">Item Description:</label>
    <textarea required placeholder="Enter Item Description" id="itemDescription" name="itemDescription"></textarea><br><br>
    <select required name = "ItemCategory" id="ItemCategory">
    <option value="" >-ChooseCategory</option>
        <option value="BreakfastSpecialties">Breakfast Specialties</option>
        <option value="PollosBurritos">Pollos Burritos</option>
        <option value="PollosSpecialties">Pollos Specialties</option>
        <option value="Sides">Sides</option>
        <option value="Sandwiches">Sandwiches</option>
        <option value="Desserts">Desserts</option>
        <option value="Beverages">Beverages</option>
    </select><br><br>
    <label for="itemImage">Item Image:</label>
    <input required placeholder="Enter Image url" type="text" id="itemImage" name="itemImage"><br><br>
    <img class ="PlaceholderImage" src=""/><br><br>
    <input id ="SubmitItem" type="submit" value="Add Item">
    
  </form>
  </div>
  </section>
  <section class = "Modal ManagerEDIT">
        <div class="popup-container">
<form id="addItemForm" class="popup-card">
    <label for="itemName">Item Name:</label>
    <input required placeholder="Enter Item Name" type="text" id="EDITitemName" name="itemName"><br><br>
    <label for="itemPrice">Item Price:</label>
    <input step="any" required placeholder="Enter Price Ex:00.00" type="number" id="EDITitemPrice" name="itemPrice"><br><br>
    <label for="itemDescription">Item Description:</label>
    <textarea required placeholder="Enter Item Description" id="EDITitemDescription" name="itemDescription"></textarea><br><br>
    <select required name = "ItemCategory" id="EDITItemCategory">
    <option value="" >-ChooseCategory</option>
        <option value="BreakfastSpecialties">Breakfast Specialties</option>
        <option value="PollosBurritos">Pollos Burritos</option>
        <option value="PollosSpecialties">Pollos Specialties</option>
        <option value="Sides">Sides</option>
        <option value="Sandwiches">Sandwiches</option>
        <option value="Desserts">Desserts</option>
        <option value="Beverages">Beverages</option>
    </select><br><br>
    <label for="itemImage">Item Image:</label>
    <input required placeholder="Enter Image url" type="text" id="EDITitemImage" name="itemImage"><br><br>
    <img class ="PlaceholderImage" src=""/><br><br>
    <input id ="UpdateItem" type="submit" value="Update Item">
    
  </form>
  </div>
  </section>
  `;
    }
    

    let bttBtn = document.createElement("button");
    bttBtn.id = "topBtn";
    bttBtn.title = "Back To Top";
    bttBtn.innerHTML = "&uarr;";

    for (let section in storedLosPollosMenu) {
      let headerSection = document.createElement("section");
      headerSection.id = section
        .replace(/\$1/g, "")
        .replace(/([A-Z])/g, `$1`)
        .trim("");
      
      if(document.getElementById("MenuPage")){
        menuContainer.appendChild(headerSection);
      }
      else if (document.getElementById("ManagerPage")){
        menuContainer.insertAdjacentElement("afterbegin", headerSection);
      }
      let menuHeading = document.createElement("div");
      menuHeading.className = "menu-heading title-style";
      headerSection.appendChild(menuHeading);
      let sectionHeader = document.createElement("h2");
      sectionHeader.innerText = section.replace(/([A-Z])/g, ` $1`); //Formatting of category name
      sectionHeader.className = "section-title";
      
      menuHeading.appendChild(sectionHeader);
      let itemsContainer = document.createElement("div");
      itemsContainer.className = "items-container";
      headerSection.appendChild(itemsContainer);

      storedLosPollosMenu[section].forEach((item) => {
        let itemCard = document.createElement("div");
        itemCard.className = "item-card";
        let ItemImgDiv = document.createElement("div");
        ItemImgDiv.className = "item-img";
        let ItemImage = document.createElement("img");
        ItemImage.src = item.image;
        ItemImage.alt = item.Name;
        ItemImgDiv.appendChild(ItemImage);

        let ItemInfoDiv = document.createElement("div");
        ItemInfoDiv.className = "item-info";

        let ItemName = document.createElement("h4");
        ItemName.className = "item-header";
        ItemName.innerText = item.Name;

        let priceDiv = document.createElement("div");
        priceDiv.className = "price";
        priceDiv.innerHTML = `$<span>${item.Price}</span`;

        let itemDescription = document.createElement("p");
        itemDescription.innerText = item.Description;

        let cardBottom = document.createElement("div");
        cardBottom.className = "card-bottom";
        let menuAddBtn = document.createElement("button");
        menuAddBtn.className = "btn menu-add";
        menuAddBtn.innerHTML = "Order Now";

        itemCard.appendChild(ItemImgDiv);
        ItemInfoDiv.appendChild(ItemName);
        ItemInfoDiv.appendChild(priceDiv);
        ItemInfoDiv.appendChild(itemDescription);
        ItemInfoDiv.appendChild(cardBottom);
        cardBottom.appendChild(menuAddBtn);
        itemCard.appendChild(ItemInfoDiv);
        itemsContainer.appendChild(itemCard);
        menuContainer.appendChild(bttBtn);
      });
    }
  } else {
    console.log("No More Items Found In Storage");
  }
}

function initializeSignInPage() {
  function signup() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    const passwordRequirements =
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}(?=.*[@$!%*#?&])/;
    //console.log(email);
    //console.log(pass);
    localStorage.setItem("userStatus", "logged-in");

    localStorage.setItem(email, pass);
    if (!passwordRequirements.test(pass)) {
      alert(
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character."
      );
    }
    if (localStorage.getItem(email)) {
      if (passwordRequirements.test(pass)) {
        location.replace("index.html");
      }
    } else {
      alert("User does not exist");
    }
  }
  const managerInfo = {
    email: "LosPollosManager81@gmail.com",
    password: "GusFring2425!",
  };

  function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    //console.log(email);
    //console.log(pass);
    localStorage.setItem("userStatus", "logged-in");

    if (email == managerInfo.email && pass == managerInfo.password) {
      location.replace("admin.html");
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

function joinAsGuest() {
	localStorage.setItem('userStatus', "guest");
	window.location.replace('index.html');
  }


// ----------------------------------------------------------------------------------------------------------
function initializeMainPage() {
  //  -----------------------------------------------------------------------
  //                                Nav logo
  //  -----------------------------------------------------------------------
  let LogoDiv = document.getElementsByClassName("logo")[0]
  console.log(LogoDiv)
  LogoDiv.addEventListener("click",function(){
    location.replace("index.html");
  })
  //  -----------------------------------------------------------------------
  //                                Modal Boxes
  //  -----------------------------------------------------------------------
  let modalBtn = document.getElementsByClassName("Modalbutton")[0];
  modalBtn.addEventListener("click", delOrPickModal)
  
  //  -----------------------------------------------------------------------
  //                                Testimonial Carousel
  //  -----------------------------------------------------------------------
  let currentTestimonialIndex = 0;
  let TestimonialCards = document.querySelectorAll(".Testimonial-Card");
  let totalTestimonialCards = TestimonialCards.length;
  document
    .getElementById("Next-TestBtn")
    .addEventListener("click", function () {
      if (currentTestimonialIndex < totalTestimonialCards - 1) {
        currentTestimonialIndex++;
      } else {
        currentTestimonialIndex = 0;
      }
      updateTestimonial();
    });
  document
    .getElementById("Prev-TestBtn")
    .addEventListener("click", function () {
      if (currentTestimonialIndex > 0) {
        currentTestimonialIndex--;
      } else {
        currentTestimonialIndex = totalTestimonialCards - 1;
      }
      updateTestimonial();
    });

	function updateTestimonial() {
		let TestimonialContainers = document.querySelector(
			'.Testimonial-Container'
		);

    let testOffset = -currentTestimonialIndex * (700 + 450);
    TestimonialContainers.style.transform = `translateX(${testOffset}px)`;
  }
  // --------------------gus--------------------------------------
  let Footer = document.getElementsByTagName("footer")[0];
  let secretGus = document.getElementById("SecretGus");
  let SecretModal = document.getElementsByClassName("SecretModal Main")[0];
  let scrollthreshold = 10;
  let audio = document.getElementsByTagName("audio")[0];
  Footer.addEventListener("mouseover", function () {
    audio.play();
  });
  secretGus.addEventListener("mouseover", function () {
    SecretModal.style.display = "block";
  });
  window.onclick = function (event) {
    if (event.target === SecretModal) {
      SecretModal.style.display = "none";
    }
  };
  window.onscroll = function () {
    if (window.scrollY >= scrollthreshold) {
      SecretModal.style.display = "none";
    }
  };
}
// ---------------------------------------------------------------------------------------------------------
function initializeMenuPage() {
  document.addEventListener("DOMContentLoaded", ready);
  //  -----------------------------------------------------------------------
  //                                Nav logo
  //  -----------------------------------------------------------------------
  let LogoDiv = document.getElementsByClassName("logo")[0]
  console.log(LogoDiv)
  LogoDiv.addEventListener("click",function(){
    location.replace("index.html");
  })
  ready();

  function ready() {
    storedLosPollosMenu = JSON.parse(localStorage.getItem("LosPollosMenu"))|| {};
    menuDisplay();
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
      foodquantity: 1,
    };
    let existingItems = JSON.parse(localStorage.getItem("StoredItems")) || [];

    let existingItemsindex = existingItems.findIndex(
      (item) => item.foodTitle === Title
    );
    if (existingItemsindex > -1) {
      existingItems[existingItemsindex].foodquantity += 1;
      console.log(existingItems[existingItemsindex].foodquantity);
      // alert("Item is already in cart")
    } else {
      existingItems.push(ItemInfo);
      // localStorage.setItem("StoredItems", JSON.stringify(existingItems));
    }
    localStorage.setItem("StoredItems", JSON.stringify(existingItems));
  }
  //  -----------------------------------------------------------------------
  //                                Modal Boxes
  //  -----------------------------------------------------------------------
  let modalBtn = document.getElementsByClassName("Modalbutton")[0];
   modalBtn.addEventListener("click", delOrPickModal);

	//  -----------------------------------------------------------------------
	//                            onscroll Function
	//  -----------------------------------------------------------------------
	let topButton = document.getElementById('topBtn');
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			topButton.style.display = 'block';
		} else {
			topButton.style.display = 'none';
		}
	}
	topButton.addEventListener('click', backToTop);
	function backToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	//  -----------------------------------------------------------------------
	//                            Onscroll function end
	//  -----------------------------------------------------------------------
}
function initializeCheckoutPage() {
  //  -----------------------------------------------------------------------
  //                                Nav logo
  //  -----------------------------------------------------------------------
  let LogoDiv = document.getElementsByClassName("logo")[0]
  console.log(LogoDiv)
  LogoDiv.addEventListener("click",function(){
    location.replace("index.html");
  })
  function ready() {
    let quantityInputs = document.getElementsByClassName("Cart-Quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
      let input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }
    let mStreet = document.getElementById("StreetAddress");
    let mStreet2 = document.getElementById("AddressLine2");
    let mCity = document.getElementById("City");
    let mSPR = document.getElementById("State");
    let mZIP = document.getElementById("ZipCode");
    let TransferedCustomLocInfo = JSON.parse(
      localStorage.getItem("CustomerLocInfos")
    );
    console.log(TransferedCustomLocInfo);
    if(TransferedCustomLocInfo){
    console.log(TransferedCustomLocInfo[0].StreetA);
    if (TransferedCustomLocInfo.length > -1) {
      mStreet.value = TransferedCustomLocInfo[0].StreetA;
      mStreet2.value = TransferedCustomLocInfo[0].Street2;
      mCity.value = TransferedCustomLocInfo[0].City;
      mSPR.value = TransferedCustomLocInfo[0].SPR;
      mZIP.value = TransferedCustomLocInfo[0].ZIP;
    }
  }else if(!TransferedCustomLocInfo){
    mStreet.value = "";
    mStreet2.value = "";
    mCity.value = "";
    mSPR.value = "";
    mZIP.value = "";
  }
  }
  let modalBtn = document.getElementsByClassName("Modalbutton")[0];
  modalBtn.addEventListener("click", delOrPickModal)
  


  //  -----------------------------------------------------------------------
  //                            retrieving Item info
  //  -----------------------------------------------------------------------

  let retrievedItems = JSON.parse(localStorage.getItem(`StoredItems`)) || [];
  let PlaceOrderBtn = document.getElementById("PlaceOrderBtn");
  // --------------------------------------------------------------------
  let itemList = document.getElementsByClassName("Item-Qty-Price-List")[0];
  for (let i = 0; i < retrievedItems.length; i++) {
    let cartRowContent = document.createElement("div");
    cartRowContent.className = "Item-List-Container";
    cartRowContent.innerHTML = `
  
              <div class="Item-Container">
                <img id="Item-img" src="${retrievedItems[i].foodImg}" alt="ItemImg" />
                <p>${retrievedItems[i].foodTitle}</p>
              </div>
              <div class="Qty-Container">
                <input class ="Cart-Quantity"
                  type="number"
                  name="Quantity-Counter"
                  id="Quantity"
                  value="${retrievedItems[i].foodquantity}" min="1"
                />
              </div>
              <div class="Price-Container">
                <p class ="Cart-Price">Total: $${retrievedItems[i].foodPrice}</p>
              </div>
              <button class = "remove-btn"><ion-icon class = "remove-btn" name="close"></ion-icon></button>
           `;
    itemList.insertAdjacentElement("beforeEnd", cartRowContent);
  }
  itemList.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
      removeItem(event);
    }
  });
  ready();

  function resetPage() {
    // localStorage.removeItem("StoredItems");
    CouponClicked = false;
    setTimeout(function () {
      location.reload(location.href);
    }, 2000);
  }

  function validateCard(
    FirstName,
    LastName,
    Email,
    CardName,
    CardNumber,
    ExpDate,
    Cvv
  ) {
    let errorMessage = "";
    if (!FirstName) {
      errorMessage += "Please Enter First Name\n";
    }
    if (!LastName) {
      errorMessage += "Please Enter Last Name\n";
    }
    if (!Email) {
      errorMessage += "Please Enter Email\n";
    }
    if (!CardName) {
      errorMessage += "Please Enter Card Name\n";
    }
    if (!CardNumber || !/^\d{13,19}$/.test(CardNumber)) {
      errorMessage += "Please Enter Card Number(13 to 19 digits)\n";
    }
    if (!ExpDate) {
      errorMessage += "Please Fill the expiry Date (MM/YY)\n";
    }
    //--------------------------------------------------------------------------------------------------------------------//
    if (!Cvv || !/^\d{3,4}$/.test(Cvv)) {
      // This is a regular expression that match specific numbers
      //"^" marks the start of the string and "$" marks the end of the string
      // "/d" matches any digit (0 -9) and "{number,number}" specifies that the digit (element) must occur 3 or 4 times
      errorMessage += " CVV is invalid (must be 3 or 4 digits)\n";
    }
    //-------------------------------------------------------------------------------------------------------------------------//
    return errorMessage;
  }

  //  -----------------------------------------------------------------------
  //                             Quantity Change
  //  -----------------------------------------------------------------------
  function quantityChanged(event) {
    let input = event.target;
    couponApplied = false;

    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    console.log("Quantity HAs Changed", input.value);
    updateCartTotal();
    // ========================
    let couponIdRetrieved = JSON.parse(localStorage.getItem("Coupons")) || [];
    let CouponID = document.getElementById("CouponID");
    let DiscountElement = document.getElementById("Discount");
    let discount = 0;
    let CouponCode = CouponID.value;
    if (CouponCode) {
      for (let coupon of couponIdRetrieved) {
        if (coupon.code === CouponCode) {
          discount = coupon.discount;
          CouponCode = coupon.code;

          break;
        }
      }

      // ===================

      if (CouponID.value === "") {
        resetCoupon();
      } else {
        applyCoupon(DiscountElement, discount, CouponCode);
      }
    }
  }
  //  -----------------------------------------------------------------------
  //                            Remove Function
  //  -----------------------------------------------------------------------
  function removeItem(event) {
    console.log("RemoveItem Pressed?");
    let buttonClicked = event.target;

		let itemContainer = buttonClicked.closest('.Item-List-Container');

    // VVV this will find the index of the item we want to remove
    let itemTitle = itemContainer.getElementsByTagName("p")[0].textContent;
    console.log(itemTitle);
    let retrievedItems = JSON.parse(localStorage.getItem("StoredItems")) || [];
    let itemIndex = retrievedItems.findIndex(
      (item) => item.foodTitle === itemTitle
    ); //this is a callback function that check each item in the retrievedItems array
    // it checks if foodTitle matches itemTitle adn return the index of that item
    if (itemIndex > -1) {
      retrievedItems.splice(itemIndex, 1); //removes it from array'
      localStorage.setItem("StoredItems", JSON.stringify(retrievedItems));
    }
    itemContainer.remove();
    updateCartTotal();
  }
  //  -----------------------------------------------------------------------
  //                            Updating Total
  //  ------------------------------------------------------------------------
  let currentCouponCode = null;
  let currentDiscountAmount = 0;
  let currentDiscount = 0;
  let CurrentSubTotal = 0;
  let CurrentTipTotal = 0;
  console.log("Base currentTip", CurrentTipTotal);
  let couponApplied = false;
  let autoAppliedCoupon = false;
  let CouponBtn = document.getElementById("CouponBtn");
  let CurrentOrderTotal = 0;
  let CurrentTaxTotal = 0;
  function updateCartTotal() {
    let itemContainer = document.getElementsByClassName(
      "Item-Qty-Price-List"
    )[0];
    let itemRow = itemContainer.getElementsByClassName("Item-List-Container");
    let total = 0;

    for (let i = 0; i < itemRow.length; i++) {
      let cartRow = itemRow[i];
      let priceElement = cartRow.getElementsByClassName("Cart-Price")[0];
      let quantityElement = cartRow.getElementsByClassName("Cart-Quantity")[0];
      let price = parseFloat(priceElement.innerText.replace("Total: $", ""));
      let quantity = parseInt(quantityElement.value);
      total += price * quantity;
      // ---------------------tips-------------------------------
    }
    let Taxtotal = total * 0.06;

    CurrentTaxTotal = Taxtotal
    let TipTotal = 0;
    let orderTotal = total + Taxtotal + CurrentTipTotal;

    console.log("current total", orderTotal);
    updateUI(total, TipTotal, Taxtotal, orderTotal);
    tipBtns(total, Taxtotal);
    couponInput();

    // ---------------------------------------------------Tip btns function
    function tipBtns(total, Taxtotal) {
      let tipBtns = document.getElementsByClassName("tip-btn");
      for (let e = 0; e < tipBtns.length; e++) {
        let tipBtnElement = tipBtns[e];
        // -----------------removes previous one so it doesn't get overwritten
        tipBtnElement.removeEventListener("click", function () {
          console.log("tipButtonPressed");
          couponApplied = false;
          let TipTotal = applyTip(tipBtnElement, total, Taxtotal);
          let DiscountElement = document.getElementById("Discount");
          let couponIdRetrieved =
            JSON.parse(localStorage.getItem("Coupons")) || [];
          // applyCoupon(DiscountElement, couponIdRetrieved, CouponID.value, CurrentTipTotal);
          orderTotal = total + Taxtotal + CurrentTipTotal;
          updateUI(total, TipTotal, Taxtotal, orderTotal);
        });
        // -------------------------------------------------------------------
        tipBtnElement.addEventListener("click", function () {
          console.log("tipButtonPressed");
          couponApplied = false;
          let TipTotal = applyTip(tipBtnElement, total, Taxtotal);
          let DiscountElement = parseFloat(
            document
              .getElementById("Discount")
              .innerText.replace("Discount: -$", "")
          );
          if (isNaN(DiscountElement)) {
            DiscountElement = 0;
          }
          let couponIdRetrieved =
            JSON.parse(localStorage.getItem("Coupons")) || [];
          // applyCoupon(DiscountElement, couponIdRetrieved, CouponID.value, CurrentTipTotal);
          orderTotal = total + Taxtotal + CurrentTipTotal - DiscountElement;
          console.log(DiscountElement);
          console.log(TipTotal);
          console.log(orderTotal);
          updateUI(total, TipTotal, Taxtotal, orderTotal);
        });
      }
    }
    // ------------------------------------------------coupon input function
  }

  updateCartTotal();

  //--------------------------APPLY COUPON function--------------------------------

  function applyCoupon(
    DiscountElement,
    CurrentTaxTotal,
    discount,
    Coupon,
    TipTotal = CurrentTipTotal
  ) {
    let discountAmount;
    let newTotal;
    console.log("applying Coupon", Coupon);
    console.log("Discount", discount);
    // ---------------------------------------------------------------
    if (discount > 0 && !couponApplied) {
      couponApplied = true;
      currentCouponCode = Coupon;
      currentDiscount = discount;
      let total = parseFloat(
        document
          .getElementById("TotalPrice")
          .innerText.replace("Subtotal: $", "")
      );
      discountAmount = ((total + CurrentTaxTotal) * discount) / 100;
      currentDiscountAmount = discountAmount;
      console.log("InApplyCouponTipTotal", TipTotal);
      console.log("InApplyCouponDiscountAmount", discountAmount);
      console.log("InApplyCouponTotal", total);

      newTotal = total - discountAmount + TipTotal + CurrentTaxTotal;
      CurrentOrderTotal = newTotal;
      console.log("InApplyCouponNewTotal", newTotal);

      DiscountElement.style.display = "block";

      DiscountElement.innerHTML = `Discount: -$${discountAmount.toFixed(2)}`;
      console.log("AHHAHAHHA", discountAmount);
      currentDiscountAmount = discountAmount;
      document.getElementById(
        "FinalTotal"
      ).innerText = `Order Total: $${newTotal.toFixed(2)}`;
      console.log("Coupon Applied Successfully");
    } else {
      if (couponApplied) {
        console.log("Coupon is already Applied");
      } else {
        console.log("no valid coupon");
      }
    }
  }

  function updateUI(total, TipTotal, Taxtotal, orderTotal) {
    document.getElementById("TotalPrice").innerText = `Subtotal: $${total.toFixed(2)}`;
    CurrentSubTotal = total;
    console.log("tipdeduction", TipTotal);
    document.getElementById("tip").innerText = `Tip: $${TipTotal.toFixed(2)}`;
    document.getElementById("tax").innerText = `Tax: $${Taxtotal.toFixed(2)}`;
    CurrentTaxTotal = Taxtotal
    console.log(orderTotal);
    document.getElementById("FinalTotal").innerText = `Order Total: $${orderTotal.toFixed(2)}`;
    CurrentOrderTotal = orderTotal;
    console.log("UI Updated");
  }

  // --------------------------------------------APPLY TIP --------------
  function applyTip(tipBtnElement, total, Taxtotal) {
    let Tip =
      parseFloat(tipBtnElement.innerText.replace(`Tip: $`, ``)) / 100 || 0;
    let TipTotal = 0;
    let orderTotal = 0;
    if (isNaN(Tip)) {
      CurrentTipTotal = 0;
      CurrentTipTotal = TipTotal;
      console.log("tip is NaN", Tip);
    } else {
      TipTotal = total * Tip;
      CurrentTipTotal = TipTotal;
      console.log("CurrentTip applied", CurrentTipTotal);
    }
    total = Math.round(total * 100) / 100;
    orderTotal = total + Taxtotal + CurrentTipTotal;
    console.log(orderTotal);
    console.log("tipTotal", TipTotal);
    updateUI(total, CurrentTipTotal, Taxtotal, orderTotal);

    if (currentCouponCode) {
      let DiscountElement = document.getElementById("Discount");
      applyCoupon(
        DiscountElement,
        CurrentTaxTotal,
        currentDiscount,
        currentCouponCode,
        CurrentTipTotal
      );
    }

    return CurrentTipTotal;
  }
  function triggerInputEvent(element) {
    let event = new Event("input", { bubbles: true }); //creates and input event
    element.dispatchEvent(event); // this puts the event onto the Input element
  }
  function couponInput() {
    let couponIdRetrieved = JSON.parse(localStorage.getItem("Coupons")) || [];
    let CouponID = document.getElementById("CouponID");
    let DiscountElement = document.getElementById("Discount");
    let discount = 0;
    let CouponCode;
    // -----------------removes previous one so it doesn't get overwritten
    CouponBtn.removeEventListener("click", function () {
      let Coupon = CouponID.value;
      for (let coupon of couponIdRetrieved) {
        if (coupon.code === Coupon) {
          discount = coupon.discount;
          CouponCode = coupon.code;

          break;
        }
      }
      if (CouponCode === CouponID.value) {
        console.log("Applying coupon");
        applyCoupon(DiscountElement, discount, Coupon);
      }
    });

    CouponID.removeEventListener("input", function () {
      let Coupon = CouponID.value;
      if (Coupon === "") {
        resetCoupon();
      }
    });

    // --------------------------------------------------------------------

    if (!couponApplied && !autoAppliedCoupon) {
      if (
        couponIdRetrieved.map((coupon) => coupon.code).includes("FIRSTTIME")
      ) {
        console.log("Reward Coupon Found AutoApplying");
        CouponID.value = "FIRSTTIME";
        couponApplied = false;
        autoAppliedCoupon = true;
        triggerInputEvent(CouponID);
        let Coupon = CouponID.value;
        for (let coupon of couponIdRetrieved) {
          if (coupon.code === Coupon) {
            discount = coupon.discount;
            CouponCode = coupon.code;

            break;
          }
        }

        applyCoupon(DiscountElement, CurrentTaxTotal, discount, Coupon);
      } else if (
        couponIdRetrieved.map((coupon) => coupon.code).includes("TWENTYOFF")
      ) {
        console.log("Reward Coupon Found AutoApplying");
        CouponID.value = "TWENTYOFF";
        couponApplied = false;
        autoAppliedCoupon = true;
        triggerInputEvent(CouponID);
        let Coupon = CouponID.value;
        for (let coupon of couponIdRetrieved) {
          if (coupon.code === Coupon) {
            discount = coupon.discount;
            CouponCode = coupon.code;

            break;
          }
        }
        applyCoupon(DiscountElement, CurrentTaxTotal, discount, Coupon);
      } else if (!couponIdRetrieved.map((coupon) => coupon.code).includes("TWENTYOFF")&& !couponIdRetrieved.map((coupon) => coupon.code).includes("FIRSTTIME")) {

        let Coupon = CouponID.value;
      if (Coupon === "") {
        resetCoupon();
      }
      }
    }
    CouponID.addEventListener("input", function () {
      let Coupon = CouponID.value;
      if (Coupon === "") {
        resetCoupon();
      }
    });

    CouponBtn.addEventListener("click", function () {
      let Coupon = CouponID.value;
      for (let coupon of couponIdRetrieved) {
        if (coupon.code === Coupon) {
          discount = coupon.discount;
          CouponCode = coupon.code;

          break;
        }
      }
      if (CouponCode === CouponID.value) {
        console.log("Applying coupon");
        applyCoupon(DiscountElement, CurrentTaxTotal, discount, Coupon);
      }
    });
  }
  function resetCoupon() {
    let Coupon = CouponID.value;
    if (Coupon === "") {
      console.log("Reset");
      let DiscountElement = document.getElementById("Discount");
      DiscountElement.style.display = "none";
      DiscountElement.innerText = "Discount: $0.00";
      couponApplied = false;
      autoAppliedCoupon = true;
      currentCouponCode = null;
      currentDiscount = 0;
      currentDiscountAmount = 0;
      updateCartTotal();
    }
  }
  console.log(CurrentSubTotal);
  console.log(CurrentTaxTotal);
  console.log(currentDiscount / 100);
  console.log(CurrentTipTotal);
  console.log(CurrentOrderTotal);

  let FinalOrderTransfer = [];
  PlaceOrderBtn.addEventListener("click", function () {
    let FirstName = document.getElementById("FirstName").value;
    console.log(FirstName)
    let LastName = document.getElementById("LastName").value;
    let Email = document.getElementById("Email").value;
    let ExpDate = document.getElementById("ExpDate").value;
    let Cvv = document.getElementById("CVV").value;
    let CardName = document.getElementById("CardName").value;
    let CardNumber = document.getElementById("CardNumber").value;
    let ExistingErrormsg = document.getElementsByClassName("Error-Msg")[0];
    let existingSuccessMsg = document.getElementsByClassName("Success-Msg")[0];

    if (ExistingErrormsg) {
      ExistingErrormsg.remove();
    }
    if (existingSuccessMsg) {
      existingSuccessMsg.remove();
    }
    let errorMessage = validateCard(
      FirstName,
      LastName,
      Email,
      CardName,
      CardNumber,
      ExpDate,
      Cvv
    );
    if (errorMessage) {
      let errorElement = document.createElement("p");
      errorElement.className = "Error-Msg";
      errorElement.style.color = "red";
      errorElement.innerText = errorMessage;
      PlaceOrderBtn.insertAdjacentElement("afterend", errorElement);
    } else {
      resetPage();
      location.replace("receipt.html");

      localStorage.setItem("FinalOrderInfo", FinalOrderTransfer);
      if (FinalOrderTransfer.length > 0) {
        FinalOrderTransfer.pop();
      } else {
        FinalOrderTransfer.push({
          subtotal: CurrentSubTotal,
          tax: CurrentTaxTotal.toFixed(2),
          discount: currentDiscountAmount,
          tip: CurrentTipTotal,
          orderTotal: CurrentOrderTotal,
        });
        localStorage.setItem(
          "FinalOrderInfo",
          JSON.stringify(FinalOrderTransfer)
        );
      }
    }
  });
}

function initializeRecieptPage() {
  //  -----------------------------------------------------------------------
  //                                Nav logo
  //  -----------------------------------------------------------------------
  let LogoDiv = document.getElementsByClassName("logo")[0]
  console.log(LogoDiv)
  LogoDiv.addEventListener("click",function(){
    location.replace("index.html");
  })
  //  -----------------------------------------------------------------------
  //                                Modal
  //  -----------------------------------------------------------------------
  let modalBtn = document.getElementsByClassName("Modalbutton")[0];
  modalBtn.addEventListener("click", delOrPickModal)
  let retrievedItems = JSON.parse(localStorage.getItem(`StoredItems`)) || [];

  let itemList = document.getElementsByClassName("item-list")[0];
  for (let i = 0; i < retrievedItems.length; i++) {
    let cartRowContent = document.createElement("li");
    cartRowContent.className = "Item-List-Container";
    cartRowContent.innerHTML = `<li>
                    <div class="item-details">
                        <p><strong>${retrievedItems[i].foodTitle}</strong> - ${retrievedItems[i].foodPrice} -${retrievedItems[i].foodquantity}X</p>
                    </div>
                </li>
           `;
    itemList.insertAdjacentElement("beforeEnd", cartRowContent);
  }
  let retrievedFinalOrderInfo =
    JSON.parse(localStorage.getItem("FinalOrderInfo")) || [];
  console.log(retrievedFinalOrderInfo[0].tax);
  console.log(retrievedFinalOrderInfo[0].discount);
  console.log(retrievedFinalOrderInfo[0].tip);
  console.log(retrievedFinalOrderInfo[0].orderTotal);
  let Totalsrow = document.getElementById("totalSection");
  console.log(Totalsrow);
  function FInalOrderPriceInfo(retrievedFinalOrderInfo) {
    let TotalsrowContent = ``;
    TotalsrowContent = `<div class = total-row> <p>SubTotal:</p><p>$${retrievedFinalOrderInfo[0].subtotal.toFixed(
      2
    )}</p> </div> <div class = total-row> <p>Tax:</p><p>$${
      retrievedFinalOrderInfo[0].tax
    }</p> </div>`;
    console.log("discount", retrievedFinalOrderInfo[0].discount);
    if (retrievedFinalOrderInfo[0].discount !== 0) {
      console.log(retrievedFinalOrderInfo[0].discount);
      TotalsrowContent += `<div class = total-row> <p>Discount:</p><p> - $${retrievedFinalOrderInfo[0].discount.toFixed(
        2
      )}</p> </div>`;
    }
    if (retrievedFinalOrderInfo[0].tip !== 0) {
      console.log(retrievedFinalOrderInfo[0].tip);
      TotalsrowContent += `<div class = total-row> <p>Tip:</p><p>$${retrievedFinalOrderInfo[0].tip.toFixed(
        2
      )}</p> </div>`;
    }
    TotalsrowContent += `<div class = total-row> <p><strong>Order Total:</strong></p><p><strong>$${retrievedFinalOrderInfo[0].orderTotal.toFixed(
      2
    )}</strong></p> </div>`;
    return TotalsrowContent;
  }
  let TotalInfo = FInalOrderPriceInfo(retrievedFinalOrderInfo);
  let TotalHeader = document.getElementById("Total-Header");
  let TotalsrowElement = document.createElement("div");
  TotalsrowElement.innerHTML = TotalInfo;
  // TotalsrowContent.className = "total-row";

  Totalsrow.insertAdjacentElement("beforeEnd", TotalsrowElement);

  /* -------------------------------------------------------------------------- */
  /*                                Progress Bar                                */
  /* -------------------------------------------------------------------------- */
  const steps = [
    document.getElementById("received"),
    document.getElementById("preparation"),
    document.getElementById("delivery"),
    document.getElementById("delivered"),
  ];

  let currentStep = 0;

  function updateProgressBar() {
    if (currentStep < steps.length) {
      steps[currentStep].classList.add("active");
      if (currentStep > 0) {
        steps[currentStep - 1].classList.add("completed");
      }
      currentStep++;
    }
  }

  setTimeout(updateProgressBar, 1000);
  setTimeout(updateProgressBar, 4000);
  setTimeout(updateProgressBar, 7000);
  setTimeout(updateProgressBar, 10000);

  /* -------------------------------------------------------------------------- */
  /*                                  Date/Time                                 */
  /* -------------------------------------------------------------------------- */
  function updateDateTime() {
    const currentDate = new Date();

    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    document.getElementById("order-date").textContent = date;
    document.getElementById("order-time").textContent = time;
  }

  updateDateTime();
  // ----------------------
  let CTABtn = document.querySelector(".cta-button");
  CTABtn.addEventListener("click", function () {
    localStorage.removeItem("StoredItems");
    location.replace("MenuPage.html");
  });
}

function initiateManagerPage() {
  //  -----------------------------------------------------------------------
  //                                Nav logo
  //  -----------------------------------------------------------------------
  let LogoDiv = document.getElementsByClassName("logo")[0]
  console.log(LogoDiv)
  LogoDiv.addEventListener("click",function(){
    location.replace("index.html");
  })
  //MANAGER
  storedLosPollosMenu = JSON.parse(localStorage.getItem("LosPollosMenu"))|| {};
  ready();
  function ready() {
    menuDisplay();
    let cards = document.querySelectorAll(".item-card");
  cards.forEach((card) => {
    let cardBottom = card.querySelector(".card-bottom");
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "DeleteBtn";
    deleteBtn.innerText = "X";
    
    cardBottom.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", itemRemoval);
    let EditBtn = document.createElement("button");
    EditBtn.className = "EditBtn";
    EditBtn.innerText = "Edit Item";
    cardBottom.appendChild(EditBtn)
    EditBtn.addEventListener("click", editItem )
  });
  }
function modal(){
  console.log("MODAL")
  let modal = document.getElementsByClassName("Modal Manager")[0];
    modal.style.display = "block";

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
}


  
  let AddBtn = document.getElementById("AddItemsButton");
AddBtn.addEventListener("click", modal);
let AddItemBtn = document.getElementById("SubmitItem");
AddItemBtn.addEventListener("click", addItem)
  function addItem(){
    
  
  let ItemName = document.getElementById('itemName').value
  let ItemPrice = parseFloat(document.getElementById("itemPrice").value).toFixed(2)
  let ItemDescription = document.getElementById("itemDescription").value
  let ItemImage = document.getElementById('itemImage').value;
  let ItemCategory = document.getElementById("ItemCategory").value
  let newitemId; 
  if(!storedLosPollosMenu[ItemCategory]){
    storedLosPollosMenu[ItemCategory] = [];
  }
  let itemsInCategory = storedLosPollosMenu[ItemCategory];
  if (itemsInCategory.length >0){
    newitemId = itemsInCategory[itemsInCategory.length - 1].Itemid + 1;
  }else{
    newitemId = 1;
  }
  let newItem = {
  Itemid:newitemId,
  Name:ItemName,
  Price:ItemPrice,
  image:ItemImage,
  Description:ItemDescription,
  }

  
  if(!storedLosPollosMenu[ItemCategory]){
    storedLosPollosMenu[ItemCategory] = []; //This will create a new Category if it hasnt been made already
  }
  storedLosPollosMenu[ItemCategory].push(newItem)
  localStorage.setItem('LosPollosMenu', JSON.stringify(storedLosPollosMenu))
  ready()
  
  }
  function itemRemoval(event){
    let buttonClicked = event.target
    let ItemCard = buttonClicked.closest(".item-card");
    let itemName = ItemCard.querySelector(".item-header").innerText
    console.log(itemName)
    for (let category in storedLosPollosMenu){
      let items = storedLosPollosMenu[category];
      for(let i =0; i < items.length; i++){
        let item = items[i];
        if(item.Name === itemName){
          console.log(item.Itemid)
          console.log(item)
          items.splice(i,1)
          localStorage.setItem("LosPollosMenu", JSON.stringify(storedLosPollosMenu))
          ready()
          break;
        }
      }
    }
    
  }
  function editItem(event){
    let buttonClicked = event.target
    
    // editModal()
    let ItemCard = buttonClicked.closest(".item-card");
    let itemName = ItemCard.querySelector(".item-header").innerText;
    for (let category in storedLosPollosMenu){
      let items = storedLosPollosMenu[category];
      for(let i =0; i < items.length; i++){
        let item = items[i];
        if(item.Name === itemName){
          console.log(item.Itemid)
          console.log(item)
          console.log("EDIT")
    

  document.getElementById('EDITitemName').value = item.Name
  
  let PriceNum = item.Price
  console.log(PriceNum)
  document.getElementById("EDITitemPrice").value = PriceNum
  document.getElementById("EDITitemDescription").value = item.Description;

  let IMGInput = document.getElementById("EDITitemImage")
  let IMGprev = document.querySelector(".PlaceholderImage")
  IMGInput.value = item.image
  

  IMGInput.addEventListener("input", function(){
    let IMGurl = IMGInput.value
    IMGprev.src = IMGurl || "default.jpg"
    console.log(IMGurl)
  })
  console.log(IMGprev.src)
  
  
  document.getElementById("EDITItemCategory").value = category;
  console.log(category)
  let modal = document.getElementsByClassName("Modal ManagerEDIT")[0];
    modal.style.display = "block";
    let Updatebtn = document.getElementById("UpdateItem");
    Updatebtn.addEventListener("click",function(){
       itemUpdate(item)})


    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    break;
        }
        
      }
      
    }
    
  }
  

  function itemUpdate(item){
  let UpdatedItemName = document.getElementById('EDITitemName').value
  let UpdatedItemPrice = parseFloat(document.getElementById("EDITitemPrice").value).toFixed(2)
  let UpdatedItemDescription = document.getElementById("EDITitemDescription").value
  let UpdatedItemImage = document.getElementById('EDITitemImage').value;
  let UpdatedItemCategory = document.getElementById("EDITItemCategory").value

  for (let category in storedLosPollosMenu){
    let items = storedLosPollosMenu[category];
      let itemIndex = items.findIndex(i => i.Itemid ===item.Itemid);
      if(item.Name !== -1){
        items.splice(itemIndex,1);
        break;
        }
item.Name = UpdatedItemName;
item.Price = UpdatedItemPrice;
item.Description= UpdatedItemDescription;
item.image = UpdatedItemImage;

if(!storedLosPollosMenu[UpdatedItemCategory]){
  storedLosPollosMenu[UpdatedItemCategory]=[]
}
storedLosPollosMenu[UpdatedItemCategory].push(item)


localStorage.setItem("LosPollosMenu", JSON.stringify(storedLosPollosMenu))
let modal = document.getElementsByClassName("Modal Manager")[0];
modal.style.display = "none";
  
}

  
  }
}
function initializeWhoPage(){
  //  -----------------------------------------------------------------------
  //                                Nav logo
  //  -----------------------------------------------------------------------
  let LogoDiv = document.getElementsByClassName("logo")[0]
  console.log(LogoDiv)
  LogoDiv.addEventListener("click",function(){
    location.replace("index.html");
  })
  //  -----------------------------------------------------------------------
  //                                Modal
  //  -----------------------------------------------------------------------
  let modalbtn = document.getElementsByClassName("Modalbutton")[0];
  modalbtn.addEventListener("click", delOrPickModal)
}
function initiateCaterFormPage(){
  //  -----------------------------------------------------------------------
  //                                Nav logo
  //  -----------------------------------------------------------------------
  let LogoDiv = document.getElementsByClassName("logo")[0]
  console.log(LogoDiv)
  LogoDiv.addEventListener("click",function(){
    location.replace("index.html");
  })
  //  -----------------------------------------------------------------------
  //                                Modal
  //  -----------------------------------------------------------------------
  let modalbtn = document.getElementsByClassName("Modalbutton")[0];
  modalbtn.addEventListener("click", delOrPickModal)
}
function inititalizeIncomingPage(){
  //  -----------------------------------------------------------------------
  //                                Nav logo
  //  -----------------------------------------------------------------------
  let LogoDiv = document.getElementsByClassName("logo")[0]
  console.log(LogoDiv)
  LogoDiv.addEventListener("click",function(){
    location.replace("index.html");
  })
  //  -----------------------------------------------------------------------
  //                                Modal
  //  -----------------------------------------------------------------------
  let modalBtn = document.getElementsByClassName("Modalbutton")[0];
  modalBtn.addEventListener("click", delOrPickModal)
}
//  -----------------------------------------------------------------------
//                  Checks for Id to Load the right Functions
//  -----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("Page1")) {
    console.log("MainPage opening");
    initializeMainPage();
  } else if (document.getElementById("SignInPage")) {
    console.log("Signin Page opening");
    initializeSignInPage();
  } else if (document.getElementById("MenuPage")) {
    console.log("MenuPage opening");
    initializeMenuPage();
  } else if (document.getElementById("CheckoutPage")) {
    console.log("checkoutPage opening");
    initializeCheckoutPage();
  } else if (document.getElementById("ReceiptPage")) {
    console.log("RecieptPage Open");
    initializeRecieptPage();
  } else if (document.getElementById("ManagerPage")) {
    console.log("ManagerPage Opening");
    initiateManagerPage();
  } else if (document.getElementById("WhoPage")){
    initializeWhoPage();
  } else if (document.getElementById("CaterFormPage")){
    initiateCaterFormPage();
  }else if ( document.getElementById("IncomingPage")){
    inititalizeIncomingPage()
  }
});
